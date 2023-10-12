import CryptoJS from 'crypto-js';

const secretKey = import.meta.env.VITE_ENCRYPTION_KEY || '';

export const useCrypto = () => {
  function encrypt(data: unknown) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  }

  function decrypt(ciphertext: string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  return {
    encrypt,
    decrypt,
  };
};
