import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

type Primitive = string | number | boolean | null | undefined;

interface UseUrlStateReaderOptions {
	prefix: string;
}

export function useUrlStateReader<T extends Record<string, Primitive | Primitive[]>>({ prefix }: UseUrlStateReaderOptions) {
	const location = useLocation();
	const state = useMemo(() => {
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
		return { ...currentState } as T;
	}, [location.search]);

	const isApplied = useMemo(() => {
		return Object.values(state).findIndex((e) => e != undefined) != -1;
	}, [state]);
	return { urlState: state, isApplied };
}

// Helper function to parse values back from strings
function parseValue(value: string): Primitive | Primitive[] {
	if (value === 'true') return true;
	if (value === 'false') return false;
	if (value === 'null') return null;
	if (value?.trim() && !isNaN(Number(value))) return Number(value); // Handle both integers and decimals
	return value; // Assume string if none of the above
}
