"use strict"

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


console.log("There are " + allCones + " to sell");
    do {
        var conesInSale = Math.floor(Math.random() * 5) + 1;
        var conesLeft = allCones - conesInSale;
        console.log(conesInSale + " cones sold");
        if (conesInSale > allCones) {
            console.log("Cannot sell you " + conesInSale + "cones. I only have " + allCones + "left")
        }
    } while (conesLeft > 0);
console.log("Yay! I sold them all")




//Get clarification on getting this out of an infinite loop
