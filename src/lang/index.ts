import english from './en.json';

interface StringMap {
	[key: string]: string;
}
type TranslateFunction = (termKey: TermKeyType, subtermKey?: TermKeyType, linking?: string) => string;
type TermKeyType = keyof typeof english;
const _t: TranslateFunction = (termKey, subtermKey, linking = ' ') => {
	const languageMap: StringMap = english;
	const term = languageMap[termKey] || '';
	const subterm = subtermKey ? languageMap[subtermKey].toLowerCase() || '' : '';
	return subterm.length > 0 ? `${term}${linking}${subterm}` : term;
};
export default _t;
