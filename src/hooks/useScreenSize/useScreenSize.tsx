import { useEffect, useState } from 'react';
import { KDSBreakPointsType, kdsBreakpoints } from '~/config/breakpoints/breakpoints';

function useScreenSize(): { breakpoint: KDSBreakPointsType; screenSize: number } {
	const [screenSize, setScreenSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	let breakpoint: KDSBreakPointsType = 'zero';
	if (screenSize >= parseInt(kdsBreakpoints['xxl'], 10)) {
		breakpoint = 'xxl';
	} else if (screenSize >= parseInt(kdsBreakpoints['xl'], 10)) {
		breakpoint = 'xl';
	} else if (screenSize >= parseInt(kdsBreakpoints['lg'], 10)) {
		breakpoint = 'lg';
	} else if (screenSize >= parseInt(kdsBreakpoints['md'], 10)) {
		breakpoint = 'md';
	} else if (screenSize >= parseInt(kdsBreakpoints['sm'], 10)) {
		breakpoint = 'sm';
	} else {
		breakpoint = 'zero';
	}

	return { breakpoint, screenSize };
}

export default useScreenSize;
