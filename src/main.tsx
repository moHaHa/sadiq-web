import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'antd-style';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import 'virtual:uno.css';
import queryClient from '~/config/reactQuery/queryClient';
import { antdTheme } from '~/config/theme/antdTheme';
import { version } from './../package.json';
import { AppWrapperContextProvider } from './context/AppWrapperContent/AppWrapperContent';
import './index.css';
import App from './router/App';

/**
 * Show Version
 */
document.getElementById('root')?.setAttribute('version', version);
console.log('Sadiq ', 'v' + version);
/**
 *
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
	<ConfigProvider theme={antdTheme}>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<AppWrapperContextProvider>
					<App />
				</AppWrapperContextProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</ConfigProvider>
);
