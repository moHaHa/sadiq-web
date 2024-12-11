export function getFirstLetter(inputString?: string): string {
	if (inputString) {
		const words: string[] = inputString.split(' ');
		const firstLetters: string[] = words.map((word) => word.charAt(0).toUpperCase());
		return firstLetters.slice(0, 1).join('');
	} else return '';
}
