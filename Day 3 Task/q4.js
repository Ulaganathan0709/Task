// Do the below programs in anonymous function & IIFE
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

    // Anonymous function to find prime numbers
    const findPrimeNumber = function(arr) 
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
    console.log('Anonymous Function Output:', primeNumbersFromAnonymous);

    // IIFE for immediate invocation
    (function(arr) 
    {
        let primeNumbersFromIIFE = [];
        for (let num of arr) 
        {
            if (num < 2) continue;

            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) 
            {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) 
            {
                primeNumbersFromIIFE.push(num);
            }
        }
        console.log('IIFE Function Output:', primeNumbersFromIIFE);
    })(a);
    //end-here
    });