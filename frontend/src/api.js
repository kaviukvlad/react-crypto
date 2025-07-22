import {cryptoData, cryptoAssets} from "./data.js";

export function fakeFetchCrypto(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData);
        }, 2000);
    })
}

export function fakeFetchAssets(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 2000);
    })
}

/*const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY': 'tw8R0gKHVlGAF50kJaf1DfTzoXxReeDdRm5Mg9JWfsQ='
    }
};

export async function fakeFetchCrypto() {
    try {
        const res = await fetch('https://openapiv1.coinstats.app/coins', options);
        const data = await res.json()
        return data;
    } catch (err) {
        return null;
    }
}*/

