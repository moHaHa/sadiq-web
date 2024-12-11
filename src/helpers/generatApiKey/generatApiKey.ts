export const generateApiKey = () => {
	const array = new Uint32Array(28);
	window.crypto.getRandomValues(array);

	let apiKey = '';
	for (let i = 0; i < array.length; i++) {
		apiKey += String.fromCharCode(array[i] % 256);
	}

	// Base64 encode the string
	const encodedString = btoa(apiKey);

	// Remove '=', '/', and '+' characters
	const sanitizedKey = encodedString.replace(/=/g, '').replace(/\//g, '').replace(/\+/g, '');

	return sanitizedKey;
};
