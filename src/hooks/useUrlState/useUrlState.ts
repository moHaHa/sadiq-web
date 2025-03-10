import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Primitive = string | number | boolean | null | undefined;

interface UseUrlStateOptions<T extends Record<string, Primitive | Primitive[]>> {
	prefix: string;
	initialValues?: T;
}

export function useUrlState<T extends Record<string, Primitive | Primitive[]>>({
	prefix,
	initialValues,
}: UseUrlStateOptions<T>) {
	const navigate = useNavigate(); // Use navigate from react-router-dom
	const location = useLocation(); // Use navigate from react-router-dom
	const [state, setState] = useState<T | undefined>(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const currentState: Partial<T> = {};

		// Parse existing URL params with the prefix
		for (const [key, value] of urlParams.entries()) {
			if (key.startsWith(prefix)) {
				const paramKey = key.slice(prefix.length) as keyof T;

				// Use getAll to check if the parameter has multiple values
				const allValues = urlParams.getAll(key);

				if (allValues.length > 1) {
					// alert(`The parameter "${key}" has multiple values: ${allValues.join(", ")}`);
				}

				// Assign to currentState
				currentState[paramKey] =
					allValues.length > 1
						? (allValues.map((v) => parseValue(v)) as T[keyof T]) // Handle as array
						: (parseValue(value) as T[keyof T]); // Handle as single value
			}
		}
		// Use initialValues if no matching params are found
		return { ...initialValues, ...currentState } as T;
	});

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);

		// Update URL params with state
		Object.entries(state || {}).forEach(([key, value]) => {
			const prefixedKey = `${prefix}${key}`;
			if (value === undefined) {
				urlParams.delete(prefixedKey); // Remove null or undefined values
			} else if (Array.isArray(value)) {
				urlParams.delete(prefixedKey); // Reset the array before append, because append will not reset the old values
				value.forEach((e) => {
					urlParams.append(prefixedKey, String(e)); // Serialize arrays
				});
			} else {
				urlParams.set(prefixedKey, String(value));
			}
		});
		const keepedKeys = Object.keys(state || {});
		Array.from(urlParams.keys()).forEach((key) => {
			if (key.startsWith(prefix)) {
				const paramKey = key.slice(prefix.length);
				if (!keepedKeys.includes(paramKey)) {
					urlParams.delete(key);
				}
			}
		});

		// Remove unused prefixed keys from URL if resetting
		if (!state) {
			Array.from(urlParams.keys()).forEach((key) => {
				if (key.startsWith(prefix)) {
					urlParams.delete(key);
				}
			});
		}

		// Update the URL using navigate
		const newUrl = window.location.pathname + '?' + urlParams.toString() + window.location.hash;
		navigate(newUrl, { replace: true }); // Use navigate to replace the URL
	}, [state, prefix, navigate]);

	// Enhanced setter to handle undefined or reset
	const setPrefixedState = (updater: React.SetStateAction<T | undefined>) => {
		if (updater === undefined) {
			// Reset state to initialValues or an empty object if no initialValues are provided
			setState(undefined);
		} else {
			setState((prev) => {
				const newState = typeof updater === 'function' ? (updater as (prevState: T | undefined) => T)(prev) : updater;
				return newState;
			});
		}
	};
	const isApplied = useMemo(() => {
		return Object.values({ ...state }).findIndex((e) => e != undefined) != -1;
	}, [state]);

	return { urlState: state, isApplied, setUrlState: setPrefixedState } as const;
}

// Helper function to parse values back from strings
function parseValue(value: string): Primitive | Primitive[] {
	if (value === 'true') return true;
	if (value === 'false') return false;
	if (value === 'null') return null;
	if (value?.trim() && !isNaN(Number(value))) return Number(value); // Handle both integers and decimals
	return value; // Assume string if none of the above
}
