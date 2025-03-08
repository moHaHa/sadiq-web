// utils/encryption.ts

// Simple XOR encryption key (can be any string or number)
const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY;

/**
 * Encrypts data using XOR encryption and shifts bits by 1.
 */
export const encryptData = (data: string): string => {
	// XOR encryption
	let encrypted = '';
	for (let i = 0; i < data.length; i++) {
		const charCode = data.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length);
		encrypted += String.fromCharCode(charCode);
	}

	// Shift bits by 1
	let shifted = '';
	for (let i = 0; i < encrypted.length; i++) {
		const shiftedCharCode = encrypted.charCodeAt(i) << 1; // Left shift by 1 bit
		shifted += String.fromCharCode(shiftedCharCode);
	}

	return shifted;
};

/**
 * Decrypts data by reversing the bit shift and XOR encryption.
 */
export const decryptData = (encryptedData: string): string => {
	// Reverse the bit shift
	let unshifted = '';
	for (let i = 0; i < encryptedData.length; i++) {
		const unshiftedCharCode = encryptedData.charCodeAt(i) >>> 1; // Right shift by 1 bit
		unshifted += String.fromCharCode(unshiftedCharCode);
	}

	// XOR decryption
	let decrypted = '';
	for (let i = 0; i < unshifted.length; i++) {
		const charCode = unshifted.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length);
		decrypted += String.fromCharCode(charCode);
	}

	return decrypted;
};
