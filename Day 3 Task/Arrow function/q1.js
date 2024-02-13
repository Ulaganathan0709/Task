// Do the below programs in arrow functions.
// Print odd numbers in an array

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
    let a = userInput[0].split(" ").map(Number);
    
    // Arrow Function
    const findOddNumbers = arr => {
    let FindOddNumber = '';
    for (const element of arr) 
    {
        if (element % 2 !== 0)
        {
            FindOddNumber += element + ' ';
        }
    }
    return FindOddNumber.trim();
        
    };
    let oddNumber = findOddNumbers(a);
    console.log('Odd Number Of the Arrow function is:', oddNumber);
    //end-here
    });