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
//Tuesday August 2 practice assignments
//Need more refactoring
// function generations(x, y){
//     var x = generations.toString(prompt("Enter a positive number between 0 and 3 for descendents or a number between 0 and -3 for ancestors"))
//     var y = generations.toString(prompt("Enter an 'm' for male or an 'f' for female"))
//     if(y ==="f" || y === "F"){
//      if (x === -1) {
//             alert("This would be my mother")
//         } else if (x === -2) {
//             alert("This would be my grandmother")
//         } else if (x === -3) {
//             alert("This would be my great Grandmother")
//         } else if (x === 1) {
//             alert("This would be my daughter")
//         } else if (x === 2) {
//             alert("This would be my granddaughter")
//         } else if (x === 3) {
//             alert("This would be my great granddaughter")
//         }
//     else if(y === "m" || "M"){
//         if(x === -1){
//             alert("This would be my father")
//         }else if(x === -2){
//             alert("This would be my grandfather")
//         }else if(x === -3){
//             alert("This would be my great grandfather")
//         }else if(x === 1){
//             alert("This would be my son")
//         }else if(x === 2){
//             alert("This would be my grandson")
//         }else if(x === 3){
//             alert("This would be my great grandson")
//         }else{
//             alert("Me! Me!")
//         }
//         }
//     }
// }
// generations();