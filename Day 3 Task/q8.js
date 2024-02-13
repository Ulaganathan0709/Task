// Do the below programs in anonymous function & IIFE
// Rotate an array by k times

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
    let arr = userInput[0].split(" ").map(Number);
    const k = userInput[1].split(" ").map(Number);
    
    // Anonymous Function
    const rotateArray = function(arr, k) {
    k = k % arr.length;  
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
    };
    console.log(rotateArray(arr, k)); 
    
    //IIFE function
    (function(arr, k) {
        k = k % arr.length;  
        const rotatedArray = arr.slice(-k).concat(arr.slice(0, arr.length - k));
        console.log(rotatedArray); 
        })(arr, k);


    //end-here
    });