
//New get of data
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey,
    lat: 29.4241,
    lon: -98.4936,
    // q: "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);
    console.log(data.daily[1].weather[0].main);
    console.log(data.daily[1].temp.day);
    // $(".weather-pic0").html("<img src='../img/WX/sky-sun.gif'>");

    for(var i = 0; i < 5; i++) {
        $(".card-body"+ [i]).html("<h2>" + parseInt(data.daily[i].temp.day) + "</h2><div><h6>" + "Feels like: " + data.daily[i].feels_like.day + "</h6></div>");
        if(data.daily[i].weather[0].main === "Clear"){
            $(".card-body"+[i]).append("<img src='../img/WX/sky-sun.gif'>");
        }else if(data.daily[i].weather[0].main === "Clouds"){
            $(".card-body"+ [i]).append("<img src='../img/WX/cloudy-skies.jpeg'>");
        }else if(data.daily[i].weather[0].main === "Rain"){
            $(".card-body"+[i]).append("<img src='../img/WX/rain-raining.gif'>");
        }
        $(".card-body"+[i]).append("<h4>"+ data.daily[i].weather[0].main + "</h4>")
        $(".card-body"+[i]).append("<h4><div>"+ "Low: "+ parseInt(data.daily[i].temp.min) +"</div>"+"High: " + parseInt(data.daily[i].temp.max)+ "</div></h4>")
    }

})


