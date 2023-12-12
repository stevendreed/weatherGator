// scripts/utils.js
// trim excess spaces, add '%' into remaining spaces for easy use in URLs
const strToPath = function(str)
{
    if (str && typeof str === 'string')
    {
        return str.toLowerCase().trim().replaceAll(' ', '%');
    } // end if
    else
    {
        return null;
    } // end else
} // end strToPath
// convert celsius to fahrenheit
const ctof = function(c)
{
    if (typeof c === 'number')
    {
        return c*(9/5)+32;
    } // end if
} // end ctof
// convert fahrenheit to celsius
const ftoc = function(f)
{
    if (typeof f === 'number')
    {
        return (f-32)*(5/9);
    } // end if
} // end ftoc

// testing
// console.log(`testing ctof: ${ctof(10)}`);
// console.log(`testing ftoc: ${ftoc(32)}`);