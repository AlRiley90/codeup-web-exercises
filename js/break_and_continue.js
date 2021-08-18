"use strict"
// function giveMeOdds(userOddNumber) {
//     while(userOddNumber % 2 === 0) {
//         var userOddNumber = prompt("Please enter an odd number between 1 and 50");
//     break;
//     }
// }
// console.log("Is this working")
var userOddNumber = prompt("Please enter and odd number between 1 and 50")
var num = parseInt(userOddNumber)
    while (num % 2 === 0 || num > 50 || num < 1) {
        num = parseInt(prompt("Please try again"))
        if (num % 2 !== 0) {
            alert("Thank you for entering a valid number!")
        break;
        }
    }

    alert("Moving to the second loop structure")


    //Question 3
// for (var i = 1; i >= 1 && i < 50; i + 2){
//   alert("Number to skip is: " + num)
//     while(i % 2 !== 0) {
//         alert("Here is an odd number: " + i);
//         break;
//         if (i === num) {
//             alert("Yikes! Skipping number: " + num);
//             continue;
//         }
//     }
// }

 console.log("Number to skip is: " + num);
// var oddNumber = 1;
// function oddCounter(oddNumber) {
//     console.log("Here is an odd number: " + oddNumber)
//   while (num % 2 === 0) {
//         continue;
//     }if(oddNumber === num){
//         console.log("Yikes! Skipping number: " + num);
//     }
//     oddNumber++;
// }
for (var oddNumber = 1; oddNumber >= 1 && oddNumber <50; oddNumber++){
    if(oddNumber % 2 === 0){
        continue;
    }else if(oddNumber === num){
        console.log("Yikes! Skipping number: " + num)
        continue;
    }
    console.log("Here is an odd number: " + oddNumber)
}