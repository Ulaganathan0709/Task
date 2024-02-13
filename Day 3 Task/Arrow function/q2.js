// Do the below programs in arrow functions.
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
    // Arrow Function
    let words = [];
    const titleCaps = arr =>
    {
    
        for (const element of arr)
        {
           
            words.push(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase().trim());
        }
        return words;
    }
    let titleCapsWords = titleCaps(a);
    console.log('Arrow Function Output:', titleCapsWords.join(', '));
    //end-here
    });