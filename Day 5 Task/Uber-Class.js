/* write a class to calculate the Uber price.

Soluction */


class UberPrice {
    constructor(rates) 
    {
        this.rates = rates; // rates is an object containing fare details for different vehicle types
    }
/**
 * Calculates the fare for a Uber ride based on the specified parameters.
 *
 * @param {string} vehicleType - The type of vehicle used for the ride (e.g., 'car', 'bike', etc.).
 * @param {number} durationInMinutes - The duration of the ride in minutes.
 * @param {number} distanceInKilometers - The distance traveled in kilometers.
 * @returns {string} The total fare for the Uber ride, formatted with two decimal places.
 */
    calculatePrice(vehicleType, durationInMinutes, distanceInKilometers) 
    {
        const rate = this.rates[vehicleType];
        const timeCharge = rate.costPerMinute * durationInMinutes;
        const distanceCharge = rate.costPerKilometer * distanceInKilometers;
        const totalFare = rate.baseFare + timeCharge + distanceCharge + rate.bookingFee;
        return totalFare.toFixed(2);
    }
}

// Fix default prices with cost per kilometer
const rates = 
{
    auto: { baseFare: 30.00, costPerMinute: 1.10, costPerKilometer: 7.40, bookingFee: 1.00 },
    bike: { baseFare: 15.50, costPerMinute: 2.08, costPerKilometer: 4.85, bookingFee: 0.80 },
    car: { baseFare: 45.21, costPerMinute: 2.15, costPerKilometer: 5.00, bookingFee: 1.50 },
    sedan: { baseFare: 59.12, costPerMinute: 3.20, costPerKilometer: 7.60, bookingFee: 2.00 },
    suv: { baseFare: 52.22, costPerMinute: 4.25, costPerKilometer: 10.70, bookingFee: 2.50 },
    prime: { baseFare: 69.00, costPerMinute: 5.00, costPerKilometer: 11.30, bookingFee: 3.00 },
    primesuv: { baseFare: 34.00, costPerMinute: 6.35, costPerKilometer: 16.90, bookingFee: 3.50 }
};

const uberPrice = new UberPrice(rates);

// Calculate the price of a 20-minute primesuv ride that covers 10 kilometers
const vehicleType = 'primesuv';
const durationInMinutes = 20;
const distanceInKilometers = 10;
const price = uberPrice.calculatePrice(vehicleType, durationInMinutes, distanceInKilometers);

console.log(`The price of your ${vehicleType} Uber ride is: ₹${price}`);
