mapboxgl.accessToken = mapBoxKey;

var map = new mapboxgl.Map (
    {
        container: "map",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        zoom: 10,
        center: [-98.4861, 29.4252]

    });

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


geocode("4712 Richmond Ave, Houston, TX 77027", mapBoxKey).then(function(results){

    console.log(results);
    var popUp = new mapboxgl.Popup()
        .setHTML("<h4>Me & wifey's first date/Fav. Restaurant (Bayou City Seafood)</h4><img src='img/bayou-city-seafood-pasta.jpeg'>")
    new mapboxgl.Marker()
        .setLngLat(results)
        .setPopup(popUp)
        .addTo(map)

    map.flyTo({center: results})
})

geocode("7115 Stonebrook Cove, Lithonia, GA 30058", mapBoxKey).then(function(results2){
    console.log(results2);
    var homePopUp = new mapboxgl.Popup()
        .setHTML("<h4>House I grew up in</h4><img src='img/Old_house.png'>")
    new mapboxgl.Marker()

        .setLngLat(results2)
        .setPopup(homePopUp)
        .addTo(map)
    map.flyTo({center: results2})
})

geocode("1 Munro Ave, Cape May, NJ 08204", mapBoxKey).then(function(results3){
    console.log(results3);
    var bootCampPopUp = new mapboxgl.Popup()
        .setHTML("<h4>Coast Guard Bootcamp</h4><img src='img/CG.jpeg'>")

    new mapboxgl.Marker({color: 'orange'})
        .setLngLat(results3)
        .setPopup(bootCampPopUp)
        .addTo(map)

    map.flyTo({center: results3})
})

geocode("476-498 Hanover St Exd, Boston, MA 02109", mapBoxKey).then(function(station1){
    console.log(station1);
    var firstCgStop = new mapboxgl.Popup()
        .setHTML("<h4>CGC Spencer/First duty station</h4><img src='img/cgc_spencer.jpeg'>")

    new mapboxgl.Marker({color: "orange"})
        .setLngLat(station1)
        .setPopup(firstCgStop)
        .addTo(map)
})

geocode("1001 Lycoming Ave, McKinleyville, CA 95519", mapBoxKey).then(function(station2){
    console.log(station2);
     var secondCgStop = new mapboxgl.Popup()
         .setHTML("<h4>CG Sector Humboldt Bay</h4><img src='img/humboldt_helo.jpeg'>")

    new mapboxgl.Marker({color: "orange"})
        .setLngLat(station2)
        .setPopup(secondCgStop)
        .addTo(map)
})

geocode("13411 Hillard St, Houston, TX 77034", mapBoxKey).then(function(station3){
    console.log(station3);
    var thirdCgStop = new mapboxgl.Popup()
        .setHTML("<h4>CG Sector Houston-Galveston</h4><img src='img/sector_houston.jpeg'>")

    new mapboxgl.Marker({color: "orange"})
        .setLngLat(station3)
        .setPopup(thirdCgStop)
        .addTo(map)
})

// var arrRest = [
//     {name: ,address: }
//     {}
//     {}
// ]


// geocode(arrRest[0].address, mapBoxKey).then(function(result){
//     map.setCenter(result);
//     var marker = new mapboxgl.Marker()
//         .setLngLat(result)
//         .addTo(map);
//     var restaurant = new mapboxgl.Popup()
//         .setHTML("<h3>" + arrRest[0].name + "</h3>")
//     marker.setPopup(restaurant)
// })

arrRest.forEach(function(input){
    geocode(input.address, mapBoxKey).then(function(){
        var marker = new mapboxgl.Marker()
            .setLngLat(result)
        .addTo(map);
    var restaurant = new mapboxgl.Popup()
        .setHTML("<h3>" + input.name + "</h3>")
    marker.setPopup(restaurant)

        })
    })

// Marker Animation
// const marker = new mapboxgl.Marker({
//     color: '#F84C4C' // color it red
// });

// Define the animation.
// function animateMarker(timestamp) {
//     const radius = 20;
//
//     /*
//     Update the data to a new position
//     based on the animation timestamp.
//     The divisor in the expression `timestamp / 1000`
//     controls the animation speed.
//     */
//     marker.setLngLat([
//         // Math.cos(timestamp / 1000) * radius,
//         -98.4861,
//         29.4252
//         // + Math.sin(timestamp / 1000) * radius
//     ]);
//
//     /*
//     Ensure the marker is added to the map.
//     This is safe to call if it's already added.
//     */
//     marker.addTo(map);
//
// // Request the next frame of the animation.
//     requestAnimationFrame(animateMarker);
// }
//
// // Start the animation.
// requestAnimationFrame(animateMarker);