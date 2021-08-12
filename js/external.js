"use strict";

// console.log("Hello from external js")
// var myFirstStatement = "This is sooo cool!"
// console.log(myFirstStatement)
//

alert("Welcome to my website!")
var helloMessage = "Hello from external Javascript"

console.log(helloMessage)
var userFavColor = prompt("What is your favorite color?")
alert("Wow " + userFavColor + " is my favorite color too!")

var theLittleMermaid = prompt("How many days would you like to rent The Little Mermaid?")
var firstTotal = theLittleMermaid * 3
alert("That will cost you " + firstTotal + " dollars")

var brotherBear = prompt("How many days would you like to rent Brother Bear?")
var secondTotal = ((brotherBear * 3) + firstTotal)
alert("Your new total is " + secondTotal + " dollars")

var hercules = prompt("How many days would you like to rent Hercules?")
var grandTotal = ((hercules * 3) + secondTotal)
alert("Your grand total for the rentals is " + grandTotal)

var googleWork = prompt("How many hours did you work for Google this week?")
var googlePay = googleWork * 400;
var amazonWork = prompt("How many hours did you work for Amazon this week?")
var amazonPay = amazonWork * 380;
var facebookWork = prompt("How many hours did you work for Facebook this week?")
var facebookPay = facebookWork * 350;
var payCheck = (googlePay + amazonPay + facebookPay)
alert("You made " + payCheck + " dollars this week! Congrats!")

var isSpace = confirm("Is there a seat available in the class?")
var noConflict = confirm("Click cancel if there is no conflict with your current schedule and this class")
alert("Congratulations, you can enroll in this course.")

var numberOfItems = prompt("How many items are you purchasing today?")
parseInt(numberOfItems);
var expired = confirm("Click cancel if this offer expired?")
var premiumMember = confirm("Click Ok if you are a premium member")
alert("Your discount has been applied!")