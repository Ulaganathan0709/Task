// Do the below programs in arrow functions.
// Sum of all numbers in an array

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
    let b 
    let sum = 0;
    const sumOfNum = arr => 
    {
        for (const i of arr)
        {
            sum += i;
        }
        return sum;
    };
    let totalSum = sumOfNum(a);
    console.log('Arrow Function Output:',totalSum);
    //end-here
    });