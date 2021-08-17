"use strict"
//w3resource first problem
function biggerNumber(a, b){
    if(a > b){
        console.log(a + " is the bigger of the two numbers")
    }else if(a < b){
        console.log(b + " is the bigger of the two numbers")
    } else{
        console.log("The two numbers have the same value")
    }
}
biggerNumber()
//w3resource second problem
function signBeforeNumber(x){
    if(x > 0){
        console.log("The sign in front of the number is +");
    } else if(x < 0){
        console.log("The sign in front of the number is -")
    } else {
        console.log("Zero is neither negative nor positive")
    }
}
signBeforeNumber()
//w3resource third problem
function assignGrade(yourGrade){
    var yourGrade = Number(prompt("What grade did you get in your class?"))
    if(yourGrade >= 90){
        alert("You got an A in the class!")
    } else if(yourGrade >= 80 && yourGrade <= 89){
        alert("You got a B in the class")
    } else if(yourGrade >= 70 && yourGrade <= 79){
        alert("You got a C in the course")
    }else if(yourGrade >= 60 && yourGrade <= 69){
        alert("You got a D in the course")
    } else{
        alert("You failed the course")
    }
}
assignGrade();

//Final practice assignment
function pluralize(noun, number){
    if(number > 1){
        console.log(number + "  " + noun + "s");
    } else if(number === 0){
        console.log("There are no " + noun);
    }else{
        console.log(number + noun)
    }
}
