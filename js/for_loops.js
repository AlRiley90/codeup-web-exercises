"use strict"

function showMultiplicationTable(num, i){
    var i = 1;
    do{
        var product = num * i;
        console.log(num + " x " + i + " = " + product);
        i++;
    } while (i <= 10);
}
function isEvenOrOdd() {
    for (var i = 0; i < 10; i++) {
        var randomInt = Math.floor(Math.random() * (200 - 20 + 1) + 20);
        if (randomInt % 2 === 0) {
            console.log(randomInt + " is an even number")
        } else {
            console.log(randomInt + " is an odd number")
        }
    }
}
// console.log(isEvenOrOdd());
// //Question 4 of the exercise need to ask for help
var addThis = 1;
for(var i = "1"; i.length < 10; i = i + addThis) {

    console.log(i);
    addThis++;
}

var i;
for (i = 100; i > 0; i -= 5){
    if(i === 0){
        break;
    }
    console.log(i);
}