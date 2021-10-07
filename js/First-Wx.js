
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherKey,
    q:     "San Antonio, US",
    units: "imperial" //Allows for conversion to fahrenheit instead of Kelvin
}).done(function(data) {
    console.log(data);
    var currentTemp = data.main.temp;
    $(".weather-main").append(parseInt(currentTemp)+ "&deg" + "<br><h5>" + " Feels like " + parseInt(data.main.feels_like) +"&deg" +"</h5>");
    $(".card-header").append("<br>"+ data.name)
    if(data.weather[0].main === "Clear"){
        $(".weather-pic").append("<img src='../img/WX/sky-sun.gif'>")
    }else if(data.weather[0].main === "Clouds"){
        $(".weather-pic").append("<img src='../img/WX/cloudy-skies.jpeg'>")
    }else if(data.list[0].weather[0].main === "Rain"){
        $(".weather-pic5").append("<img src='../img/WX/rain-raining.gif'>")
    }//Add more else ifs for other weather conditions
    $(".weather-status").append("<h2>"+ data.weather[0].main+ "</h2>")
    $(".card-bottom").append("<h4>"+"Low: " + parseInt(data.main.temp_min) + "&deg" +  "<br>" +"High: "+ parseInt(data.main.temp_max) +"&deg"+ "</h4>");
});

$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: openWeatherKey,
    q: "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
    //Card 2
    $(".weather-main2").append("<h6>" + data.list[4].dt_txt + "</h6><div>" + parseInt(data.list[4].main.temp) + "&deg" + "</div><div>" + "</div>")
    if (data.list[4].weather[0].main === "Clouds") {
        $(".weather-pic2").append("<img src='../img/WX/cloudy-skies.jpeg'>")
    } else if (data.list[4].weather[0].main === "Clear") {
        $(".weather-pic2").append("<img src='../img/WX/sky-sun.gif'>")
    }else if(data.list[4].weather[0].main === "Rain"){
        $(".weather-pic5").append("<img src='../img/WX/rain-raining.gif'>")
    }
    $(".weather-status2").append("<h2>" + data.list[4].weather[0].main + "</h2>")
    $(".card-bottom2").append("<h4><div>" + "Low: " + parseInt(data.list[5].main.temp) + "&deg" + "</div><div>" + "High: " + parseInt(data.list[8].main.temp) + "&deg" + "</div>")
})

    //Card 3
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: openWeatherKey,
    q: "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    $(".weather-main3").append("<h6>" + data.list[12].dt_txt + "</h6><div>" + parseInt(data.list[12].main.temp)+ "&deg"+"</div><div>" + "</div>")
    if(data.list[12].weather[0].main === "Clouds"){
        $(".weather-pic3").append("<img src='../img/WX/cloudy-skies.jpeg'>")
    }else if(data.list[12].weather[0].main === "Clear"){
        $(".weather-pic3").append("<img src='../img/WX/sky-sun.gif'>")
    }else if(data.list[12].weather[0].main === "Rain"){
        $(".weather-pic5").append("<img src='../img/WX/rain-raining.gif'>")
    }
    $(".weather-status3").append("<h2>" + data.list[12].weather[0].main + "</h2>")
    $(".card-bottom3").append("<h4><div>"+ "Low: "+ parseInt(data.list[13].main.temp)+ "&deg"+"</div><div>" + "High: " + parseInt(data.list[15].main.temp) + "&deg"+ "</div>")
})


//Card 4
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: openWeatherKey,
    q: "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    $(".weather-main4").append("<h6>" + data.list[20].dt_txt + "</h6><div>" + parseInt(data.list[20].main.temp)+ "&deg"+"</div><div>" + "</div>")
    if(data.list[20].weather[0].main === "Clouds"){
        $(".weather-pic4").append("<img src='../img/WX/cloudy-skies.jpeg'>")
    }else if(data.list[20].weather[0].main === "Clear"){
        $(".weather-pic4").append("<img src='../img/WX/sky-sun.gif'>")
    }else if(data.list[20].weather[0].main === "Rain"){
        $(".weather-pic5").append("<img src='../img/WX/rain-raining.gif'>")
    }
    $(".weather-status4").append("<h2>" + data.list[20].weather[0].main + "</h2>")
    $(".card-bottom4").append("<h4><div>"+ "Low: "+ parseInt(data.list[20].main.temp)+ "&deg"+"</div><div>" + "High: " + parseInt(data.list[24].main.temp) + "&deg"+ "</div>")
})

//Card 5
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: openWeatherKey,
    q: "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    $(".weather-main5").append("<h6>" + data.list[28].dt_txt + "</h6><div>" + parseInt(data.list[28].main.temp)+ "&deg"+"</div><div>" + "</div>")
    if(data.list[28].weather[0].main === "Clouds"){
        $(".weather-pic5").append("<img src='../img/WX/cloudy-skies.jpeg'>")
    }else if(data.list[28].weather[0].main === "Clear"){
        $(".weather-pic5").append("<img src='../img/WX/sky-sun.gif'>")
    }else if(data.list[28].weather[0].main === "Rain"){
        $(".weather-pic5").append("<img src='../img/WX/rain-raining.gif'>")
    }
    $(".weather-status5").append("<h2>" + data.list[28].weather[0].main + "</h2>")
    $(".card-bottom5").append("<h4><div>"+ "Low: "+ parseInt(data.list[28].main.temp)+ "&deg"+"</div><div>" + "High: " + parseInt(data.list[32].main.temp) + "&deg"+ "</div>")
})

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey,
    lat: 29.4241,
    lon: -98.4936,
    // q: "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
})