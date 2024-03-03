/* Question: Print the country that uses US dollars as currency.

Soluction: */


const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function findCountriesUsingUSD() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const countries = JSON.parse(this.responseText);
            const countriesUsingUSD = countries.filter(country => {
                return country.currencies && 'USD' in country.currencies;
            });
            console.log('Countries using US Dollar as currency:');
            countriesUsingUSD.forEach(country => {
                const currencySymbol = country.currencies.USD.symbol;
                console.log(`${country.name.common}: ${currencySymbol}`);
            });
        } else {
            console.error('Error fetching data:', this.statusText);
        }
    };
    xhr.send();
}

findCountriesUsingUSD();
