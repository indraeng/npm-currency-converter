import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const API_KEY = 'fca_live_3hAnUjFZ2Wsd16tdi0SHezXJJIeckUbuWLixxMKG'
const freecurrencyapi = new Freecurrencyapi(API_KEY);


export const convertCurrency = async(fromCurrency, toCurrency, units) => {
    const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier = response.data[toCurrency];
    // console.log(multiplier*units);
    return multiplier*units;
}

convertCurrency('USD','EUR',5);

// freecurrencyapi.latest({
//     base_currency: 'USD',
//     currencies: 'EUR'
// }).then(response => {
//     console.log(response);
// });