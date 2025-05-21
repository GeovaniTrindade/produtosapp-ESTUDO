import * as CryptoJS from 'crypto-js';


//chave usada para criptografar/descriptografar
const key = 'e6d3a34d-da7e-49e2-8ead-c5e64ce0a0d0';


//função para criptografar um valor
export function encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, key).toString();
}


//função para descriptografar um valor
export function decrypt(value: string): string {
    return CryptoJS.AES.decrypt(value, key)
        .toString(CryptoJS.enc.Utf8);
}
