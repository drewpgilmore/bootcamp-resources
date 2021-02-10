// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// @ADD YOUR CODE HERE

// Initializes the page with a default plot
function init() {
    data = [{
      values: us,
      labels: ['Spotify', 'Souncloud', 'Pandora', 'Itunes'],
      type: 'pie'
    }];
  
    Plotly.newPlot("pie", data);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataSet").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var data = [];
  
    if (dataset === 'us') {
      data = us;
    }
  
    if (dataset === 'uk') {
      data = uk;
    }

    if (dataset === 'canada') {
        data = canada;
    }
  
    updatePlotly(data);
}
// Note the extra brackets around 'x' and 'y'
function updatePlotly(newData) {
    Plotly.restyle("pie", "values", [newData]);
}

  
init();
