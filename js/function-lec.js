//adding the function() and opening brackets around all the code prevents users from editing your code
(function () {
    console.log("Welcome to functions");

//Define named functions
    function sayHello() {
        console.log("Hello people!");
    }

//Defining anonymous functions
    var sayHowdy = function () {
        console.log("Howdy");
    }

//Arguments and parameters
    function add(x, y) {
        return x + y;
    }

    console.log(add(5, 6));

//scope
    var instructor = "Douglas";
    var day = "Friday";

    function tellTheDay() {
        return "Tell " + instructor + " it's " + day;
    }

    function greeting() {
        var username = "Kenneth";
        return "Hi, " + username;
    }

    console.log(greeting());
})();