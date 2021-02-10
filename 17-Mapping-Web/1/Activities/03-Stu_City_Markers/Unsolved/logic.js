// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers

// Add code to create a marker for each city below and add it to the map
// newyork;
var newYork = L.marker([40.712776, -74.005974], {
  draggable: true,
  title: "New York"
}).addTo(myMap);

// chicago;
var chicago = L.marker([41.878113, -87.629799], {
  draggable: true,
  title: "Chicago"
}).addTo(myMap);

// houston;
var houston = L.marker([29.760427, -95.369804], {
  draggable: true,
  title: "Houston"
}).addTo(myMap);

// la;
var losAngeles = L.marker([34.052235, -118.243683], {
  draggable: true,
  title: "Los Angeles"
}).addTo(myMap);

// omaha;
var omaha = L.marker([41.256538, -95.934502], {
  draggable: true,
  title: "Omaha"
}).addTo(myMap);

//newYork.bindPopup("New York").openPopup();
//chicago.bindPopup("Chicago").openPopup();
//houston.bindPopup("Houston").openPopup();

