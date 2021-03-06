(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(this.radius, 2);
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var area;

            if(doRounding){
               area = Math.round(this.getArea());
            } else {
                area = this.getArea();

            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    //Can be accomplished without writing extra code using circle.radius = 5
var circle = {
    radius: 5,
    getArea: function (){
        var area = Math.PI * Math.pow(this.radius, 2);
        return area;
    },
    logInfo: function (doRounding) {
        var area;

        if(doRounding){
            area = Math.round(this.getArea());
        } else {
            area = this.getArea();

        }
        console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
    }
}
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
