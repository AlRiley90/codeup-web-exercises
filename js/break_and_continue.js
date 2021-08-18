"use strict"
// function giveMeOdds(userOddNumber) {
//     while(userOddNumber % 2 === 0) {
//         var userOddNumber = prompt("Please enter an odd number between 1 and 50");
//     break;
//     }
// }
// console.log("Is this working")
var userOddNumber = prompt("Please enter and odd number between 1 and 50")

    while (userOddNumber % 2 === 0 || userOddNumber > 50 || userOddNumber < 1) {
        prompt("Please try again");
        if (userOddNumber % 2 !== 0) {
            alert("Thank you for entering a valid number!")
            break;
        }
}
