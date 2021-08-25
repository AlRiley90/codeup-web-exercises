"use strict"

function rollSixSided(rolls){

var i = 1;
do {
    var theRoll = Math.floor(Math.random()*6+1);
    console.log("You rolled a " + theRoll);
    i++;

}while(i <= rolls)

// for (var i =1; i == rolls; i++){
//
//     console.log("You rolled a " + theRoll)
// }
}
rollSixSided(5);