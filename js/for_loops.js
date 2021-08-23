"use strict"

function showMultiplicationTable(num, i){
    var i = 1;
    do{
        var product = num * i;
        console.log(num + " x " + i + " = " + product);
        i++;
    } while (i <= 10);
}showMultiplicationTable(5)

//Instructor edition
// for (var i = 1; i <=10; i++)


function isEvenOrOdd() {
    for (var i = 0; i < 10; i++) {
        var randomInt = Math.floor(Math.random() * (200 - 20 + 1) + 20);
        if (randomInt % 2 === 0) {
            console.log(randomInt + " is an even number")
        } else {
            console.log(randomInt + " is an odd number")
        }
    }
    isEvenOrOdd();
    console.log(isEvenOrOdd());


//Instructors Edition question 4
    function NumTriangle() {
        for (var i = 1; i < 10; i++) {
            var output = "";
            for (var j = 0; j < i; j++) {
                output += i;
            }
            console.log(output);
        }
    }

//Or..
    for (var i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
// Question 4 of the exercise need to ask for help

    for (var i = 1; i.length < 10; i++) {
        var answer = "";
        for (var j = 1; j <= i; j++) {
            answer += i;
        }
        console.log(answer);
    }
}


var i;
for (i = 100; i > 0; i -= 5){
    console.log(i);
}