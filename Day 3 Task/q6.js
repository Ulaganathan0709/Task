// Do the below programs in anonymous function & IIFE
// Return median of two sorted arrays of the same size.

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
    let arr2 = userInput[1].split(" ").map(Number);
    
    // Anonymous function to find and round down the median
    const findMedian = function(arr1, arr2) {
        let merged = [], i = 0, j = 0;
        const totalLength = arr1.length + arr2.length;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                merged.push(arr1[i++]);
            } else {
                merged.push(arr2[j++]);
            }
        }

        while (i < arr1.length) {
            merged.push(arr1[i++]);
        }

        while (j < arr2.length) {
            merged.push(arr2[j++]);
        }

        const mid = Math.floor(totalLength / 2);
        return (merged[mid - 1] + merged[mid]) / 2;
    };
    console.log(Math.round(findMedian(arr1, arr2)));

    // IIFE to find and round down the median
    (function(arr1, arr2) {
        let merged = [], i = 0, j = 0;
        const totalLength = arr1.length + arr2.length;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                merged.push(arr1[i++]);
            } else {
                merged.push(arr2[j++]);
            }
        }

        while (i < arr1.length) {
            merged.push(arr1[i++]);
        }

        while (j < arr2.length) {
            merged.push(arr2[j++]);
        }

        const mid = Math.floor(totalLength / 2);
        console.log(Math.round((merged[mid - 1] + merged[mid]) / 2));
    })(arr1, arr2);
        //end-here
        });