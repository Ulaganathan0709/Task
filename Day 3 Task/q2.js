// Do the below programs in anonymous function & IIFE
// Convert all the strings to title caps in a string array 

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
    
    let a = userInput[0].split(',').map(Word =>Word.trim());
    let words = [];
    const titleCaps = function(arr)
    {
        for (const element of arr)
        {
           
            words.push(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase().trim());
        }
        return words;
    };
    let titleCapsWords = titleCaps(a);
    console.log('Anonymous Function Output:', titleCapsWords.join(', '));

// IIFE for immediate invocation
let Words = []
    let titleCapsWordsIIFE = (function(arr) {
       for (const element of arr)
        {
           
            Words.push(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase().trim());
        }
        return Words;
    })(a);

     console.log('IIFE Output:',titleCapsWordsIIFE.join(', '));

      //end-here
});
