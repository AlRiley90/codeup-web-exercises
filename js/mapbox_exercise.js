mapboxgl.accessToken = mapBoxKey;

var map = new mapboxgl.Map (
    {
        container: "map",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        zoom: 10,
        center: [-98.4861, 29.4252]

    });

geocode("4712 Richmond Ave, Houston, TX 77027", mapBoxKey).then(function(results){

    console.log(results);
    var popUp = new mapboxgl.Popup()
        .setHTML("<h4>Me & wifey's first date/Fav. Restaurant (Bayou City Seafood)</h4>")
    new mapboxgl.Marker()
        .setLngLat(results)
        .setPopup(popUp)
        .addTo(map)

    map.flyTo({center: results})


})

//Marker Animation
// const marker = new mapboxgl.Marker({
//     color: '#F84C4C' // color it red
// });
//
// // Define the animation.
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
//         29.4252 + Math.sin(timestamp / 1000) * radius
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