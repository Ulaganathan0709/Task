/* Print odd numbers in an array on anonymous function & IIFE

Soluctions */

/* Print odd numbers in an array on anonymous function & IIFE

Soluctions */

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
// Anonymous function to find odd numbers
    let FindOddNumber = [];
    const findOddNumbers = function(arr)
    {
        for (const element of arr)
        {
            if (element % 2!== 0)
            {
                FindOddNumber = FindOddNumber + element + ' ';
            }   
        }
        return FindOddNumber.trim();
    };
    let oddNumber = findOddNumbers(a);
    console.log('Odd Number Of the Anonymous function is :' , oddNumber);
// IIFE function to find odd numbers
    (function(arr) {
        for (const element of arr)
        {
            if (element % 2!== 0)
            {
                FindOddNumber = FindOddNumber + element + ' ';
            }   
        }
        return FindOddNumber.trim();
    })(a);
    console.log('Odd Number Of the IIFE function is :', oddNumber);
  //end-here
});