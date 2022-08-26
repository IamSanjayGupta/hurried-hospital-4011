import CryptoJS from "crypto-js";

export const ecrypt = (text) => {
  return CryptoJS.AES.encrypt(text, process.env.REACT_APP_SALT).toString();
};

export const decrypt = (ciphertext) => {
  return CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_SALT).toString(CryptoJS.enc.Utf8);
};
