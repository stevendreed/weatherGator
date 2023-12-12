// scripts/app.js

const app = async function()
{
    console.log('app running on localbrowser'); // debugging
    
    console.log(await getForecast('  san frANCISCo  '));
    
}

// run main
app();