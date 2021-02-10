var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;

// Create the createMap function
function createMap(bikeStations) {
  // Create the tile layer that will be the background of our map
  var light = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    Light: light
  };

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    bikeStations: bikeStations
  };

  // Create the map object with options
  var myMap = L.map("map-id", { 
    center: newYorkCoords, 
    zoom: 5,
    layers: [light, bikeStations]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);

};


// Create the createMarkers function
function createMarkers(response) {  
  // Pull the "stations" property off of response.data
  var stations = response.data['stations'];
  var bikeMarkers = [];
  // Initialize an array to hold bike markers
  // Loop through the stations array
  for (var i = 0; i < stations.length; i++) {
    var stationName = stations[i].name;
    var location = [stations[i].lat, stations[i].lon]
    // For each station, create a marker and bind a popup with the station's name
    
    var marker = L.marker(location)
      .bindPopup(`${stationName}`);
    
    bikeMarkers.push(marker);
  };

  // Create a layer group made from the bike markers array, pass it into the createMap function
  var bikeStations = L.layerGroup(bikeMarkers);
  createMap(bikeStations);
};

// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'

d3.json(url, function(response) {
  createMarkers(response);
});

