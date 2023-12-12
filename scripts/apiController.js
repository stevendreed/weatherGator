// scripts/apiController.js

// note: it is terrible practice to include an API key in the midst of
// a client application like this
const OWM_API_KEY = '9600d7dfd08fecfecc74f034b1d5fdb0';

/* START API routes */

const weatherDataRoute = 'api.openweathermap.org/data/2.5/weather?';
const coordDataRoute = 'http://api.openweathermap.org/geo/1.0/direct?q=';
// {city name},{state code},{country code}&limit={limit}&appid={API key}
/** END API routes **/
/*
    getLonLat (comma_separated_string_of:city,state,country , apiKeyString)
    => promise array{objects}

    parameters are two strings: one is a comma separated list of locational
    attributes for the city you want data on. State & country information
    are optional. see https://openweathermap.org/api/geocoding-api for
    specifics on expected parameters

    function utilizes jQuery's ajax functionality to obtain an array from
    the provided URL route
*/
const getLonLat = async function(locationString, key = OWM_API_KEY)
{
    // constuct the fetch path from parameters
    const path = coordDataRoute+locationString+`&limit=5&appid=${key}`
    console.log('trying get request to: ' + path);
    try
    {
        // fetch from constructed path
        let resp = await fetch(path);
        // get array from provided url 
        let matchArray = await $.ajax(
            {
                dataType: 'json',
                url: resp.url,
                data: ''
            }); // end await ajax
        console.log('array returned:', matchArray); // debugging
        return matchArray;
    } // end try
    // basic error handling
    catch(err)
    {
        throw err;
    } // end catch
} // end getLonLat

// module.exports({ getLonLat });