// scripts/app.js

const app = async function()
{
    console.log('app running on localbrowser'); // debugging
    // let testLonLat = getLonLat("denver,us,colorado");
    // // console.log(`Denver is located at ${testLonLat.name} longitude`);

    // getCurrWea({"lat":"39.7392364","lon":"-104.984862"});

    console.log(await getForecast('  san frANCISCo  '));
    
}

// run main
app();