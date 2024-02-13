// Do the below programs in arrow functions.
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
    // Arrow Function
     const findPalindromes = arr =>
    {
        return arr.filter(item =>
        {
            let Item = item.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
            let reversedItem = Item.split('').reverse().join('');
            return Item === reversedItem;
        });
    };

    const palindromesFromAnonymous = findPalindromes(a);
    console.log('Arrow Function Output:', palindromesFromAnonymous);
    //end-here
    });