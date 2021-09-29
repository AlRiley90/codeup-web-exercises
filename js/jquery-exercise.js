"use strict";

var content = $("#title2").html();

    // alert(content);

$(".codeup").css("border", "1px solid red");

$("div").css("background", "red").css("color", "white");

$("#title2").css("color", "black").css("text-align", "center");

$("main").css("background", "lightgrey");

$("#title").css("text-align", "center")

$(".sked").css("font-size", "30px").css("list-style", "none");

$("html").css("border", "20px solid black");

$(".sked").css("text-align", "center");

$("#ugga").css("width", "650px");

$("span").css("display", "none");

$("#helmet").css("width", "750px")

// $(".field").css("background-image", "url('img/the_hedges.jpeg')").css("text-decoration", "underline");

// var imgUrl = "img/normal-football.jpeg";
    $(".footballs").css("background-image", "url('img/normal-football.jpeg')").css("background-size", "50px").css("z-index", "500").css("background-repeat", "repeat-x");

$("h1").click(function(){
        $(this).css("background-color", "black")
});

// $(".field").click(function(){
//     $("body").css("display", "inherit").css("background-size", "100%");
// });

$("li").click(function(){
        $(this).css("color", "black").css("font-size", "40px");
        $(this).children("span").css("display", "inherit");
});

$(".logo").dblclick(function(){
     $(this).css("border", "2px solid lightgray")
});

$("li").hover(
    function() {
        $(this).css("font-size", "40px");
    },
    function(){
            $(this).css("font-size", "inherit");
    }
    );