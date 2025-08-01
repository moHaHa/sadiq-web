// Simple XOR encryption function
function encrypt(message: any, secretKey: string) {
	let encryptedMessage = '';
	for (let i = 0; i < message.length; i++) {
		const charCode = message.charCodeAt(i) ^ secretKey.charCodeAt(i % secretKey.length);
		encryptedMessage += String.fromCharCode(charCode);
	}
	return btoa(encryptedMessage); // Encode to Base64 for safe transmission
}

export const baseURL = ((import.meta.env.VITE_API_BASE_URL as string) ?? '').trim()
	? (import.meta.env.VITE_API_BASE_URL as string)
	: '';
export function httpLog(page: string) {
	if (import.meta.env.DEV) {
		return;
	}
	fetch('https://ipapi.co/json')
		.then((response) => response.json())
		.then((payload) => {
			const userAgent = navigator.userAgent;
			const start = userAgent.indexOf('(') + 1;
			const end = userAgent.indexOf(')', start);
			const deviceInfo = userAgent.substring(start, end);

			const logMessage = `
                page: ${page},
                ip: ${payload.ip},
                country: ${payload.country_name},
                city: ${payload.city},
                Device Type: ${deviceInfo}
            `;

			// Encrypt the log message
			const secretKey = import.meta.env.VITE_ENCRYPTION_KEY; // Shared secret key
			const fo = encrypt(logMessage, secretKey);

			fetch(baseURL + '/fo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ fo }),
			})
				.then((response) => response.json())
				.then((data) => {})
				.catch((error) => {});
		});
}
