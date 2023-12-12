// scripts/app.js

const app = function()
{
    console.log('app running on localbrowser'); // debugging
    let testLonLat = getLonLat("denver");
    console.log(`Denver is located at ${testLonLat.name} longitude`);    
}

// run main
app();