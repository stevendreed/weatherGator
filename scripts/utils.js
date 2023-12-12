// scripts/utils.js

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