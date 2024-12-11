import { message } from 'antd';
import axios, { AxiosError } from 'axios';
// import { IAuthReponse } from '~/server/auth/interfaces';
import tokenService from './tokenService';

type IAuthReponse = any
export const baseURL = import.meta.env.VITE_API_BASE_URL as string;
export const secondBaseURL = import.meta.env.VITE_API_SECOND_BASE_URL as string;
if (baseURL == undefined || !baseURL.trim()) {
	alert('VITE_API_BASE_URL  not found in env');
}
const http = axios.create({
	baseURL,
});

http.interceptors.request.use(
	(config) => {
		const token = tokenService.getLocalAccessToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
			config.headers['post'] = { 'Content-Type': 'application/json' };
			config.headers['Content-Type'] = 'application/json';
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

const apiKeyHttp = axios.create({
	baseURL: secondBaseURL,
});

apiKeyHttp.interceptors.request.use(
	(config) => {
		config.headers['post'] = { 'Content-Type': 'application/json' };
		config.headers['Content-Type'] = 'application/json';
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

let isRefreshing = false;
let failedQueue: Array<{ resolve: Function; reject: Function }> = [];

const processQueue = (error: any, token: string | null = null) => {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});

	failedQueue = [];
};

http.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err: HttpError) => {
		if (err.response?.status === 401 && err.response?.data?.message === 'Unauthorized') {
			if (!isRefreshing) {
				isRefreshing = true;
				let refreshToken = tokenService.getLocalRefreshToken();
				if (refreshToken !== null) {
					refreshToken = encodeURIComponent(refreshToken);
				}
				const rs = await axios
					.post<IAuthReponse>(`${baseURL}/api/Auth/RefreshToken?refreshToken=${refreshToken}`)
					.catch((err) => {
						isRefreshing = false;
						tokenService.logout();
						window.open('/login', '_self');
						return Promise.reject(err);
					});
				tokenService.setLocalAccessToken(rs?.data?.data?.jwtToken);
				tokenService.setLocalRefreshToken(rs?.data?.data?.refreshToken);
				isRefreshing = false;
				processQueue(null, rs?.data?.data?.jwtToken);
				return http(err.response.config);
			} else {
				if (err && err.response && err.response.config) {
					let config = err.response.config;
					// Only add the original request to failedQueue if the token was refreshed
					failedQueue.push({
						resolve: () => (config ? http(config) : Promise.reject('Config is undefined')),
						reject: () => Promise.reject(err),
					});
				}
			}
		} else if (err.response?.status === 401 && err.response?.data?.message?.includes('permission')) {
			window.open('/error/permission', '_self');
		} else if (!err.response?.status) {
			message.error(`Network Or Server Error`);
			setTimeout(() => {
				window.open('/error/without-status-error', '_self');
			}, 500);
		} else {
			message.error(err.response?.data?.message);
		}
		console.log(err);
		return Promise.reject(err);
	}
);

apiKeyHttp.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err: HttpError) => {
		if (err.response?.status === 401 && err.response?.data?.message === 'Unauthorized') {
			if (!isRefreshing) {
				isRefreshing = true;
				let refreshToken = tokenService.getLocalRefreshToken();
				if (refreshToken !== null) {
					refreshToken = encodeURIComponent(refreshToken);
				}
				const rs = await axios
					.post<IAuthReponse>(`${baseURL}/api/Auth/RefreshToken?refreshToken=${refreshToken}`)
					.catch((err) => {
						isRefreshing = false;
						tokenService.logout();
						window.open('/login', '_self');
						return Promise.reject(err);
					});
				tokenService.setLocalAccessToken(rs?.data?.data?.jwtToken);
				tokenService.setLocalRefreshToken(rs?.data?.data?.refreshToken);
				isRefreshing = false;
				processQueue(null, rs?.data?.data?.jwtToken);
				return apiKeyHttp(err.response.config);
			} else {
				if (err && err.response && err.response.config) {
					let config = err.response.config;
					// Only add the original request to failedQueue if the token was refreshed
					failedQueue.push({
						resolve: () => (config ? apiKeyHttp(config) : Promise.reject('Config is undefined')),
						reject: () => Promise.reject(err),
					});
				}
			}
		} else if (err.response?.status === 401 && err.response?.data?.message?.includes('permission')) {
			window.open('/error/permission', '_self');
		} else if (!err.response?.status) {
			message.error(`Network Or Server Error`);
			setTimeout(() => {
				window.open('/error/without-status-error', '_self');
			}, 500);
		} else {
			message.error(err.response?.data?.message);
		}
		console.log(err);
		return Promise.reject(err);
	}
);
export type HttpError = AxiosError<{
	code: number;
	data?: any;
	ex?: string;
	message?: string;
}>;
export { apiKeyHttp };
export default http;
