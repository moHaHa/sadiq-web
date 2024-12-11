export type KDSBreakPointsType = 'zero' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'wide';

export type KDSBreakPointsValue = 0 | 320 | 640 | 960 | 1024 | 1280 | 1400;
export type KDSBreakPointsValuePixel = '0px' | '320px' | '640px' | '960px' | '1024px' | '1280px' | '1400px';

export const kdsBreakpoints: Record<KDSBreakPointsType, KDSBreakPointsValuePixel> = {
	zero: '0px',
	sm: '320px',
	md: '640px',
	lg: '960px',
	xl: '1024px',
	xxl: '1280px',
	wide: '1400px',
};

export interface IBreakPointsList {
	key: KDSBreakPointsType;
	value: KDSBreakPointsValue;
	valuePixel: KDSBreakPointsValuePixel;
}
export const breakpointsList: IBreakPointsList[] = [
	{
		key: 'zero',
		value: 0,
		valuePixel: '0px',
	},
	{
		key: 'sm',
		value: 320,
		valuePixel: '320px',
	},
	{
		key: 'md',
		value: 640,
		valuePixel: '640px',
	},
	{
		key: 'lg',
		value: 960,
		valuePixel: '960px',
	},
	{
		key: 'xl',
		value: 1024,
		valuePixel: '1024px',
	},
	{
		key: 'xxl',
		value: 1280,
		valuePixel: '1280px',
	},
	{
		key: 'wide',
		value: 1400,
		valuePixel: '1400px',
	},
];

/**
 * Return
 *
 */
export const getUhoBreakpointsList = (): Record<KDSBreakPointsType, KDSBreakPointsValuePixel> => {
	return breakpointsList.reduce((acc, curr) => {
		acc[curr.key] = curr.valuePixel;
		return acc;
	}, {} as Record<KDSBreakPointsType, KDSBreakPointsValuePixel>);
};

export const getBreakPointInfoByKey = (key: KDSBreakPointsType) => {
	const breakpointInfo = breakpointsList.find((e) => e.key == key);
	if (breakpointInfo === undefined) {
		throw Error('getBreakPointValueByKey : Cannot Find Breakpoint With Key ' + key);
	} else {
		return breakpointInfo;
	}
};
