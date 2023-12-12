// scripts/apiController.js

// note: it is terrible practice to include an API key in the midst of
// a client application like this
const OWM_API_KEY = '9600d7dfd08fecfecc74f034b1d5fdb0';

/* START API routes */

const weatherDataRoute = 'api.openweathermap.org/data/2.5/weather?';
// lat={lat}&lon={lon}&appid={API key}
const coordDataRoute = 'http://api.openweathermap.org/geo/1.0/direct?q=';
// {city name},{state code},{country code}&limit={limit}&appid={API key}
/** END API routes **/
const getLonLat = async function(locatObj, key = OWM_API_KEY)
{
    let response = await fetch(coordDataRoute+locatObj.city
            +locatObj.state
            +locatObj.county
            +`&appid=${key}`);
    console.log(response);
}

// module.exports({ getLonLat });