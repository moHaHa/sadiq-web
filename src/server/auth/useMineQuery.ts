import { UseQueryOptions, useQuery } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { decryptData, encryptData } from '~/utils/encryption';
import { TApp } from '../namespaces/app';

export type TMine = {
	id: string;
	email: string;
	role: 'user' | 'admin';
	createdAt: string;
};

export function useMinesQuery(options?: UseQueryOptions<TMine, HttpError>) {
	const key = ['mine'];

	// Fetch encrypted data from localStorage
	const encryptedMineStr = localStorage.getItem('mine');
	let mineData: TMine | null = null;

	if (encryptedMineStr) {
		try {
			// Decrypt the data
			const decryptedStr = decryptData(encryptedMineStr);
			mineData = JSON.parse(decryptedStr) as TMine;
		} catch (error) {
			console.error('Failed to decrypt or parse data:', error);
			// Reset the value in localStorage if decryption or parsing fails
			localStorage.removeItem('mine');
		}
	}

	return useQuery<TMine, HttpError>(
		key,
		async () => {
			// Fetch data from the API
			const response = await http.get<TApp.IDataResponse<TMine>>('/users/mine');
			const data = response.data;

			// Encrypt and store the data in localStorage
			const encryptedData = encryptData(JSON.stringify(data));
			localStorage.setItem('mine', encryptedData);

			return data.data;
		},
		{
			...options,
			// Use the cached data if available and valid
			initialData: mineData || undefined,
		}
	);
}
