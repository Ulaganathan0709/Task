// Question: Print the following details name, capital, flag, using forEach function

// Soluction:

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchCountriesAndPrintDetails() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const countries = JSON.parse(this.responseText);
            countries.forEach(country => {
                console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flag}`);
            });
        } else {
            console.error('Error fetching data:', this.statusText);
        }
    };

    xhr.send();
}

fetchCountriesAndPrintDetails();
