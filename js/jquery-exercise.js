"use strict";

var content = $("#title2").html();

    // alert(content);

$(".codeup").css("border", "1px solid red");

$("div").css("background", "red").css("color", "white");

$("#title2").css("color", "black").css("text-align", "center");

$("main").css("background", "lightgrey");

$("#title").css("text-align", "center")

$(".sked").css("font-size", "30px").css("list-style", "none").css("border", "2px solid black");

$("html").css("border", "20px solid black");

$(".sked").css("text-align", "center");

$("img").css("padding-left", "30px");

$("span").css("display", "none");

$("h1").click(function(){
    // if("background-color"=== "red") {
        $(this).css("background-color", "black")
    // }else{
    //     $(this).css("background-color", "red")
    // }
});

$("li").click(function(){
        $(this).css("color", "black").css("font-size", "40px");
        $("span").css("display", "inherit");
});

// $("h1").click(function(){
//     $(this).css("background-color", "red")
// });
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