// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// TODO:

// Store API query variables
var baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
// Add the dates in the ISO formats
var date = "$where=created_date_between'01/01/2016 00:00:00AM'and'01/01/2017 00:00:00AM'";
// Add the complaint type
var complaint = "&complaint_type=Rodent";
// Add a limit
var limit = "&$limit=10000";


// Assemble API query URL
var searchURL = baseURL+complaint+limit;

var markers = L.markerClusterGroup();


// Grab the data with d3
d3.json(baseURL, function(response) {
  // Create a new marker cluster group

  // Loop through data
  for (var i = 0; i < response.length; i++) {
    //console.log(response);
    // Set the data location property to a variable
    var location = response[i].location;
    // Check for location property
      if (location) {
      // Add a new marker to the cluster group and bind a pop-up
      var title = 'placeholder'
      var lat = location.coordinates[1];
      var lng = location.coordinates[0];
      var marker = L.marker(new L.LatLng(lat, lng), { 'title' : title });
      //marker.bindPopup(title);
      markers.addLayer(marker);  
      } 
    }
});

// Add our marker cluster layer to the map
myMap.addLayer(markers);