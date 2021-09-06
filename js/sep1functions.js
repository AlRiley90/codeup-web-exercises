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


// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
//Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//
// function vowelCount(word){
//     for(var count=0; )
// }


//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isPrime(num){
    for(var i = 2; i < num; i++){
        if(num % i !== 0){
            return false;
        }
        return true;
    }
}
console.log(isPrime(17));
console.log(isPrime(14));
console.log(isPrime(19));


//Write a JavaScript function which accepts an argument and returns the type.

function typeIs(input){
    return typeof input;
}

console.log(typeIs(17));
console.log(typeIs("string"));
console.log(typeIs("42"));