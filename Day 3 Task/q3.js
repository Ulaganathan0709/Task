// Do the below programs in anonymous function & IIFE
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
    let b 
    let sum = 0;
    const sumOfNum = function(arr)
    {
        for (const i of arr)
        {
            sum += i;
        }
        return sum;
    };
    let totalSum = sumOfNum(a);
    console.log('Anonymous Function Output:',totalSum);
    // IIFE for immediate invocation
    let add = 0
    let sumOFNumIIFE = (function(arr) {
        for (const i of arr)
        {
            add +=i;
        }
        return add;
        
    })(a);
    console.log('IIFE Function Output:',sumOFNumIIFE);
    //end-here
    });