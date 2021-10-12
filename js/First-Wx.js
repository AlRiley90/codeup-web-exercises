mapboxgl.accessToken = mapBoxKey;

var map = new mapboxgl.Map (
    {
        container: "map",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        zoom: 10,
        center: [-98.4861, 29.4252]

    });
//Nav control
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
var button = document.getElementById("searchButton")

        //Placing marker whenever user changes location
     button.addEventListener('click', function(e) {
         e.preventDefault();
         var geoLocation = $("#search").val();
         console.log(geoLocation);
         geocode(geoLocation, mapBoxKey).then(function (result) {
             console.log(result);
             new mapboxgl.Marker()
                 .setLngLat(result)
                 .addTo(map)
             map.flyTo({center: result,
             zoom: 12
             })

             //Adding weather background
         $.get("https://api.openweathermap.org/data/2.5/onecall", {
             APPID: openWeatherKey,
             lat: result[1],
             lon: result[0],
             units: "imperial"
         }).done(function (data) {
             console.log(data);

             if(data.daily[0].weather[0].main === "Clear"){
                 $("body").attr("class","");
                 $("body").addClass("clear");
             }else if(data.daily[0].weather[0].main === "Clouds"){
                 $("body").attr("class","")
                 $("body").addClass("cloudy")
             }else if(data.daily[0].weather[0].main === "Rain"){
                 $("body").attr("class","")
                 $("body").addClass("rain")
             }else if(data.daily[0].weather[0].main === "Snow"){
                 $("body").attr("class","")
                 $("body").addClass("snow")
             }
             for(var i = 0; i < 5; i++) {
                 var dt =data.daily[i].dt;
                 function timeConverter(dt){
                     var dtInMs = dt * 1000;
                     var dateObj = new Date(dtInMs);
                     return dateObj.toLocaleString();
                 }

                 var newDt = timeConverter(dt);

                 //Populates info into cards
                 $(".card-body"+ [i]).html("<div><p>" + newDt +"</p></div>"+ "<h2>" + parseInt(data.daily[i].temp.day) + "&#8457" + "</h2><div><h6>" + "Feels like: " + parseInt(data.daily[i].feels_like.day) +"&#8457" + "</h6></div>");
                 if(data.daily[i].weather[0].main === "Clear"){
                     $(".card-body"+[i]).append("<img src='../img/WX/sky-sun.gif'>");
                     $("body").css("background-image", "<img src='../img/WX/sunny-bkgd.gif'>");
                 }else if(data.daily[i].weather[0].main === "Clouds"){
                     $(".card-body"+ [i]).append("<img src='../img/WX/cloudy-skies.jpeg'>");
                 }else if(data.daily[i].weather[0].main === "Rain"){
                     $(".card-body"+[i]).append("<img src='../img/WX/rain-raining.gif'>");
                 }else if(data.daily[i].weather[0].main === "Thunderstorm"){
                     $(".card-body"+[i]).append("<img src='../img/WX/thunderstorm.gif'>")
                 }else if(data.daily[i].weather[0].main === "Snow"){
                     $(".card-body"+[i]).append("<img src='../img/WX/snow.gif'>")
                 }
                 $(".card-body"+[i]).append("<h4>"+ data.daily[i].weather[0].main + "</h4>")
                 $(".card-body"+[i]).append("<h4><div>"+ "Low: "+ parseInt(data.daily[i].temp.min) +"&#8457"+"</div>"+"High: " + parseInt(data.daily[i].temp.max)+ "&#8457"+"</div></h4>")
             }

         })
     })
})





//New get of data
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey,
    lat: 29.4241,
    lon: -98.4936,
    units: "imperial"
}).done(function (data) {
    console.log(data);
    if(data.daily[0].weather[0].main === "Clear"){
        $("body").addClass("clear");
    }else if(data.daily[0].weather[0].main === "Clouds"){
        $("body").addClass("cloudy");
    }else if(data.daily[0].weather[0].main === "Rain"){
        $("body").addClass("rain")
    }else if(data.daily[0].weather[0].main === "Snow"){
        $("body").addClass("rain")
    }
    for(var i = 0; i < 5; i++) {
        var dt =data.daily[i].dt;
        function timeConverter(dt){
            var dtInMs = dt * 1000;
            var dateObj = new Date(dtInMs);
            return dateObj.toLocaleString();
        }
        var newDt = timeConverter(dt);

        $(".card-body"+ [i]).html("<div><p>" + newDt +"</p></div>"+ "<h2>" + parseInt(data.daily[i].temp.day) + "</h2><div><h6>" + "Feels like: " + parseInt(data.daily[i].feels_like.day) + "</h6></div>");
        if(data.daily[i].weather[0].main === "Clear"){
            $(".card-body"+[i]).append("<img src='../img/WX/sky-sun.gif'>");
        }else if(data.daily[i].weather[0].main === "Clouds"){
            $(".card-body"+ [i]).append("<img src='../img/WX/cloudy-skies.jpeg'>");
        }else if(data.daily[i].weather[0].main === "Rain"){
            $(".card-body"+[i]).append("<img src='../img/WX/rain-raining.gif'>");
        }else if(data.daily[i].weather[0].main === "Thunderstorm"){
            $(".card-body"+[i]).append("<img src='../img/WX/thunderstorm.gif'>")
        }
        $(".card-body"+[i]).append("<h4>"+ data.daily[i].weather[0].main + "</h4>")
        $(".card-body"+[i]).append("<h4><div>"+ "Low: "+ parseInt(data.daily[i].temp.min) +"</div>"+"High: " + parseInt(data.daily[i].temp.max)+ "</div></h4>")
    }

})


