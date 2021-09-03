"use strict"

function tellFortune(kids, pName, loc, title){
    console.log("You will be a " + title +" in " + loc + ", and married to " + pName + " with " + kids + " kids.");
}
tellFortune(3, "Ruby", "Atlanta",  "software engineer");
tellFortune(2, "Analicia", "Miami", "web developer");
tellFortune(0, "Adorina", "Houston", "banker");



//Same function with the exception of return to give more flexibility.
// function tellFortune(kids, pName, loc, title){
//     var output = "You will be a " + title +" in " + loc + ", and married to " + pName + " with " + kids + " kids.";
//     return output;
// }



//Sep3 Warm-up
function calculateDogAge(age){
    var dogYears = age * 7;
    return "Your dog is " + dogYears +" years old in dog years!"
}

console.log(calculateDogAge(6));
console.log(calculateDogAge(10));
console.log(calculateDogAge(3));