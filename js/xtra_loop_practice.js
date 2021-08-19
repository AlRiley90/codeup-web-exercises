"use strict"

var n = 38;
for(var i = 1; i <= n; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

var pin = 5678;
var userPin = parseInt(prompt("Please enter 4 digit PIN number"))
while(userPin !== pin){
    userPin = parseInt(prompt("Incorrect PIN. Please try again"))
} if(userPin === pin){
    alert("Thank you! You are now logged in")
}

