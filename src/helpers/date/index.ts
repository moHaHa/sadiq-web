export function getSecondsDiff(startDate: string, endDate: string) {
	const start = new Date(startDate);
	const end = new Date(endDate);
	const startMs = start.getTime();
	const endMs = end.getTime();
	const diffMs = endMs - startMs;
	const diffSeconds = Math.round(diffMs / 1000); // Convert milliseconds to seconds
	return diffSeconds;
}
