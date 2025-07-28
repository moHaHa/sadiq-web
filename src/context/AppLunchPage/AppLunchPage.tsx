import { FC, ReactNode, useEffect, useState } from 'react';
import LunchPage from './components/LunchPage/LunchPage';

interface AppLaunchPageProps {
	children: ReactNode;
}

const AppLaunchPage: FC<AppLaunchPageProps> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000); // 10 seconds

		return () => clearTimeout(timer); // Cleanup on unmount
	}, []);

	if (isLoading) {
		return <LunchPage></LunchPage>;
	}

	return <>{children}</>;
};

export default AppLaunchPage;
