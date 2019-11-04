const axios = require('axios');



const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedURL }`,
        headers: { 'x-rapidapi-key': '9ba49220cemsh24df8a7e48e9fa4p1402e1jsn7455d0062b64' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const { name: direccion, lat, lon: lng } = resp.data.Results[0];

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}