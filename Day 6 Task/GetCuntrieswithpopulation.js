// Questions: Get all the countries with a population of less than 2 lakhs using Filter function

// Soluctions: 

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchCountriesWithSmallPopulation() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const countries = JSON.parse(this.responseText);
            const countriesWithSmallPopulation = countries.filter(country => country.population < 200000);
            console.log('Countries with a population less than 2 lakhs:');
            countriesWithSmallPopulation.forEach(country => {
                console.log(`${country.name.common}: Population - ${country.population}`);
            });
        } else {
            console.error('Error fetching data:', this.statusText);
        }
    };

    xhr.send();
}

fetchCountriesWithSmallPopulation();

