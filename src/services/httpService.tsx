import axios, { AxiosError } from 'axios';
// import ErrorHandler from '~/components/ErrorHandler/ErrorHandler';
import { IAuthReponse } from '~/server/auth/interfaces';
import tokenService from './tokenService';

export const baseURL = ((import.meta.env.VITE_API_BASE_URL as string) ?? '').trim()
	? (import.meta.env.VITE_API_BASE_URL as string)
	: '';
const http = axios.create({
	baseURL,
});

http.interceptors.request.use(
	(config) => {
		const token = tokenService.getLocalAccessToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
			config.headers['post'] = { 'Content-Type': 'application/json' };
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

http.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err: HttpError) => {
		// Access Token was expired
		if (err.response == undefined) {
			return Promise.reject(err);
		}
		console.log('err.response', err.response);
		if (err.response.data.message == 'Access denied. No token provided.') {
			// tokenService.logout();
			// window.open('/login', '_self');
			return Promise.reject(err);
		}
		if (err.status == 401 && err.response.data.message == 'Invalid token.') {
			const refreshToken = tokenService.getLocalRefreshToken();
			console.log(refreshToken);
			const rs = await axios
				.post<IAuthReponse>(`${baseURL}/users/refresh-token`, {
					refreshToken: refreshToken,
				})
				.catch((err) => {
					// if (err) {
					// console.log(err);
					// tokenService.logout();
					// window.open('/login', '_self');
					// }
					return Promise.reject(err);
				});
			console.log(rs);
			tokenService.setLocalAccessToken(rs?.data.token);
			tokenService.setLocalRefreshToken(rs?.data?.refreshToken);
			return http(err.response.config);
		} else {
			alert(err.response.data.message);
		}
		// if (guessHttpError(err.response?.status, err.response?.data?.msg)?.key == 'invalid-refresh-token') {
		// 	tokenService.logout();
		// 	window.open('/login', '_self');
		// } else
		//  if (
		// 	err.response?.status === 401 &&
		// 	err.response?.data?.msg !== 'Invalid authentication email or password.' &&
		// 	err.response.data.msg !== "You don't have the permissions to do this request."
		// ) {
		// 	const refreshToken = tokenService.getLocalRefreshToken();
		// 	const rs = await axios
		// 		.post<IAuthReponse>(`${baseURL}/auth/refresh-token`, {
		// 			token: refreshToken,
		// 		})
		// 		.catch((err) => {
		// 			if (guessHttpError(err.response?.status, err.response?.data?.msg)?.key == 'invalid-refresh-token') {
		// 				tokenService.logout();
		// 				window.open('/login', '_self');
		// 			}
		// 			return Promise.reject(err);
		// 		});
		// 	tokenService.setLocalAccessToken(rs?.data?.data?.accessToken);
		// 	tokenService.setLocalRefreshToken(rs?.data?.data?.refreshToken);
		// 	return http(err.response.config);
		// }

		// if (err.response?.data?.args?.includes('query.namespace not a valid id')) {
		// 	// window.open('/join-namespace', '_self');
		// 	return Promise.reject(err);
		// }
		// if (err.response?.data?.msg !== 'Subscription not found.') {
		// 	message.error(<ErrorHandler error={err} />);
		// }

		return Promise.reject(err);
	}
);

export type HttpError = AxiosError<{
	message?: string;
	msg: string;
	args?: string[];
}>;

export default http;
