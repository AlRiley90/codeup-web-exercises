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
        .setHTML("<em>Me & wifey's first date/Fav. Restaurant (Bayou City Seafood)</em>")
    new mapboxgl.Marker()
        .setLngLat(results)
        .setPopup(popUp)
        .addTo(map)

    map.flyTo({center: results})


})