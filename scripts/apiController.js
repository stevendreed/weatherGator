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
const getLonLat = async function(locationString, key = OWM_API_KEY)
{
    console.log(coordDataRoute+locationString+`&limit=5&appid=${key}`);
    try
    {
        let resp = await fetch(coordDataRoute+locationString
            +`&limit=5&appid=${key}`);
        console.log(resp.url); // testing
        return resp;
    } 
    catch(err)
    {
        return err;
    }
}

// module.exports({ getLonLat });