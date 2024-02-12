// Do the below programs in anonymous function & IIFE
// Return all the palindromes in an array

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
    
    let a = userInput[0].split(',').map(word => word.trim());

    // Anonymous function to find palindromes
    const findPalindromes = function(arr) 
    {
        return arr.filter(item =>
        {
            let Item = item.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
            let reversedItem = Item.split('').reverse().join('');
            return Item === reversedItem;
        });
    };

    const palindromesFromAnonymous = findPalindromes(a);
    console.log('Anonymous Function Output:', palindromesFromAnonymous);

    // IIFE for immediate invocation
    (function(arr) 
    {
        let palindromesFromIIFE = findPalindromes(arr);
        console.log('IIFE Function Output:', palindromesFromIIFE);
    })(a);
    //end-here
    });