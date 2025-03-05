export interface IAuth {
	email?: string;
	password?: string;
	data?: {
		accessToken: string;
		refreshToken: string;
	};
}

export interface IAuthReponse {
	token: string;
	refreshToken: string;
}
