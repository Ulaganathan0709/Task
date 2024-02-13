// Do the below programs in arrow functions.
// Return all the prime numbers in an array

// Soluctions:

const readline = require('readline');

const inp = readline.createInterface({
    input: process.stdin
  });
  
  const userInput = [];
  
  inp.on("line", (data) => {
    userInput.push(data);
  });
  
  inp.on("close", () => {
    //start-here
    //Your code goes here … replace the below line with your code logic 
    let a = userInput[0].split(' ').map(Number);
    // Arrow Function
    const findPrimeNumber = arr => 
    {
        let primeNumbers = [];
        for (let num of arr) 
        {
            if (num < 2) continue;

            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) 
            {
                if (num % i === 0) 
                {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime)
            {
                primeNumbers.push(num);
            }
        }
        return primeNumbers;
    };

    const primeNumbersFromAnonymous = findPrimeNumber(a);
    console.log('Arrow Function Output:', primeNumbersFromAnonymous);
    //end-here
    });