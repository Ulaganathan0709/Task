// Question 
// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Get all the countries from Asia continent /region using Filter function

// Soluctions:

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchAsianCountries() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function() 
    {
        if (this.status === 200)
        {
            const countries = JSON.parse(this.responseText);
            const asianCountries = countries.filter(country => country.region === 'Asia');
            console.log('Asian Countries:', asianCountries.map(country => country.name.common));
        } 
        else 
        {
            console.error('Error fetching data:', this.statusText);
        }
    };
    xhr.send();
}

fetchAsianCountries();