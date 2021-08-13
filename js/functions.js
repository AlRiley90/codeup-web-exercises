"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
    var name = "Alex";
    return "Hello, " + name;
}
console.log(sayHello());

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello("Alex");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Alex";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(x){
    return x === 2;
}
console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(x, y){
    return x * y;
}
console.log(calculateTip(.2, 20));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
//  */
// var bill = prompt("How much is the bill?")
// var tipAmount = prompt("What percent are you leaving for the tip?")
// alert("You should leave $" + calculateTip(bill, tipAmount/100) + " dollars for the tip" )
// //come back to this to perfect having two decimal places

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
//  */
// var x = prompt("What is the original price of the product?");
// var y = prompt("What is the amount that should be discounted?");
// function applyDiscount(){
//     return x - (x * (y/100));
// }
//
// alert("The final price for your purchase after the discount will be $" + applyDiscount());


//The following portion is additional work assigned from Slack
function returnTwo(){
    return 2;
}
console.log(returnTwo());

function sayHowdy(){
    console.log("Howdy!");
}
function returnName(){
    return "Alex";
}
console.log(returnName())

function addThree(x){
    return x + 3;
}
console.log(addThree(5));

function sayString(z){
    return z;
}
console.log(sayString("coduep"))

function identity(input){
    return input;
}

function getRandomNumber(min, max){
    //Need help with this one
}
function first(input){
    var firstLetter = input.charAt(0);
    return firstLetter;
}
console.log(first("varsity"))

function last(input){
   var lastLetter = input.charAt(input.length-1);
   return lastLetter;
}
console.log(last("eagles"))

function rest(input){
    var allButFirstAndLast = input.substring(1, input.length-1);
    return allButFirstAndLast;
}
console.log(rest("Mississippi"));

function reverse(input){
    var splitString = input.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverse("variety"));

function isNumeric(input){
    if(typeof input === "number"){
        return true;
    } return false;
}
console.log(isNumeric("red"))

function count(input){
    var letterCount = input.length;
    return letterCount;
}
console.log(count("fixture"))

function add(a, b){
    var sum = a + b;
    return sum;
}
console.log(add(15, 20))

function subtract(a, b){
    var difference = a - b;
    return difference;
}
console.log(subtract(27, 12))

function multiply(a, b){
    var product = a * b;
    return product;
}
console.log(multiply(10, 24))

function divide(numerator, denominator){
    var quotient = numerator / denominator;
    return quotient;
}
console.log(divide(25, 5))

function remainder(number, divisor){
    var remainder = number % divisor;
    return remainder;
}
console.log(remainder(5, 2));

function square(a){
    var squared = a * a;
    return squared;
}
console.log(square(6))

function sumOfSquares(a, b){
   var squareA = square(a);
   var squareB = square(b);
   return add(squareA, squareB)
}
console.log(sumOfSquares(3, 4))

function doMath(multiply, a, b){
    var theProduct = multiply(a, b);
    return theProduct;
}
console.log(doMath(multiply, 7, 5));