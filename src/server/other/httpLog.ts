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
			const secretKey = 'my-secret-key-4869'; // Shared secret key
			const encryptedMessage = encrypt(logMessage, secretKey);

			fetch(baseURL + '/fo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ encryptedMessage }),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Log sent to server:', data);
				})
				.catch((error) => {
					console.error('Error sending log to server:', error);
				});
		});
}
