export interface ITokenPayload {
	exp: number;
	iat: number;
	id: string;
}

class TokenService {
	getLocalRefreshToken() {
		const refreshToken = localStorage.getItem('refreshToken');
		return refreshToken;
	}
	getLocalAccessToken() {
		const accessToken = localStorage.getItem('accessToken');
		return accessToken;
	}
	getTokenPayload(t?: string) {
		const token = t ?? localStorage.getItem('accessToken') ?? '';
		if (!token) return null;
		const base64Url = token.split('.')[1];
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		const jsonPayload = decodeURIComponent(
			window
				.atob(base64)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
				})
				.join('')
		);

		return JSON.parse(jsonPayload) as ITokenPayload;
	}
	setLocalAccessToken(value: string) {
		localStorage.setItem('accessToken', value);
	}
	setLocalRefreshToken(value: string) {
		localStorage.setItem('refreshToken', value);
	}
	setAuthToken(accessToken: string, refreshToken: string) {
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('refreshToken', refreshToken);
	}
	logout() {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
	}
}
export default new TokenService();
