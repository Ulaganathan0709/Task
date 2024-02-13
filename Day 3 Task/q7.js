// Do the below programs in anonymous function & IIFE
// Remove duplicates from an array

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
    let arr1 = userInput[0].split(" ").map(Number);
    
    // Anonymous Function to remove duplicates
    const removeDuplicates = function(array) {
        return [...new Set(array)];
        
    };
    console.log(removeDuplicates(arr1)); 
    // IIFE to remove duplicates
    (function() {
    console.log([...new Set(array)]); 
    })(arr1);
    //end-here
    });