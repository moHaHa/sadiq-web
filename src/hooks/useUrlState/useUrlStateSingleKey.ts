import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type Primitive = string | number | boolean | null | undefined;

interface UseUrlStateSingleKeyOptions<T extends string | Primitive | Primitive[]> {
	queryKey: string;
	initialValues?: T;
}

export function useUrlStateSingleKey<T extends string | Primitive | Primitive[]>({
	queryKey,
	initialValues,
}: UseUrlStateSingleKeyOptions<T>) {
	const navigate = useNavigate(); // Use navigate from react-router-dom

	const state = useMemo(() => {
		const urlParams = new URLSearchParams(window.location.search);
		let currentState = undefined;
		const allValues = urlParams.getAll(queryKey);
		currentState =
			allValues.length > 1
				? (allValues.map((v) => parseValue(v)) as T[keyof T])
				: allValues.length == 1
				? (parseValue(allValues[0]) as T[keyof T])
				: undefined;
		return currentState as T;
	}, [location.search]);

	const set = (value: Primitive | Primitive[]) => {
		const nextSearchParams = new URLSearchParams(location.search);
		nextSearchParams.delete(queryKey);
		if (value != undefined) {
			if (value == true) {
				nextSearchParams.set(queryKey, 'true');
			} else if (value == false) {
				nextSearchParams.set(queryKey, 'false');
			} else if (value === null) {
				nextSearchParams.set(queryKey, 'null');
			} else if (Array.isArray(value)) {
				value.forEach((a) => nextSearchParams.append(queryKey, String(a)));
			} else {
				nextSearchParams.set(queryKey, String(value));
			}
			navigate({ ...location, search: nextSearchParams.toString() });
		}
	};
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const allValues = urlParams.getAll(queryKey);
		if (allValues.length == 0 && initialValues !== undefined) {
			set(initialValues);
		}
	}, []);

	return { get: state, set };
}

// Helper function to parse values back from strings
function parseValue(value: string): Primitive | Primitive[] {
	if (value === 'true') return true;
	if (value === 'false') return false;
	if (value === 'null') return null;
	if (value?.trim() && !isNaN(Number(value))) return Number(value); // Handle both integers and decimals
	return value; // Assume string if none of the above
}
