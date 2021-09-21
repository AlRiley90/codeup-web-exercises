var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

// button1.addEventListener('click', function(){
//     // alert("Hello Quasar!");
//
//    var listItems = document.getElementsByTagName("li");
//
//    for(var i = 0; i < listItems.length; i++){
//         listItems[i].style.backgroundColor = "blue";
//
//     }
// })








var removal = function() {
    var listItems = document.getElementsByTagName("li");

    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.backgroundColor = "blue";

    }
}


button1.addEventListener('click', removal)
//folowing step takes away the capability for button 1 to change the background
button2.addEventListener('click', function() {

    button1.removeEventListener('click', removal)

})
