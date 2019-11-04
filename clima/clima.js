const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=c4777ccb65d176c4528209b6034a092a&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}