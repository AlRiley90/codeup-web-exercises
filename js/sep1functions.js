"use strict";

// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverseNumber(num){
    return (parseFloat(num.toString().split('').reverse().join('')))
}
console.log(reverseNumber(7856790));


//Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(string){
    var word = string.toLowerCase();
    var backWord= word.split("").reverse().join("");
    if(backWord == word){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("Bob"));
console.log(isPalindrome("racecar"));


//Write a JavaScript function that returns a passed string with letters in alphabetical order.
function rearrange(word){
    return word.split("").sort().join("");
}
console.log(rearrange("alphabet"));
console.log(rearrange("random"));
