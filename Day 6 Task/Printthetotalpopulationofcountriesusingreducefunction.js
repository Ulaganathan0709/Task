/* Questions: Print the total population of countries using reduce function

Soluctions:  */

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function calculateTotalPopulation() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const countries = JSON.parse(this.responseText);
            const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
            console.log(`Total population of all countries: ${totalPopulation}`);
        } else {
            console.error('Error fetching data:', this.statusText);
        }
    };
    xhr.send();
}

calculateTotalPopulation();
