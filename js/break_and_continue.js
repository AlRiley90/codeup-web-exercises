"use strict"
// function giveMeOdds(userOddNumber) {
//     while(userOddNumber % 2 === 0) {
//         var userOddNumber = prompt("Please enter an odd number between 1 and 50");
//     break;
//     }
// }
// console.log("Is this working")
var userOddNumber = prompt("Please enter and odd number between 1 and 50", "0")
var num = parseInt(userOddNumber)
    while (num % 2 === 0 || num > 50 || num < 1) {
    prompt("Please try again")
    if (num % 2 !== 0) {
        alert("Thank you for entering a valid number!")
        break;
    }
}


    //Question 3