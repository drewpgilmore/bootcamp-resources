// Sort the data by Greek search results
var dataSet = data;
var dataSorted = dataSet.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// Slice the first 10 objects for plotting
var topTen = dataSorted.slice(0,10);

topTen.reverse();

// Trace1 for the Greek Data
var trace1 = {
    x: topTen.map((god) => god.greekSearchResults),
    y: topTen.map((god) => god.greekName), 
    type: 'bar', 
    orientation: 'h'
}
// data
var data = [trace1];

Plotly.newPlot('plot', data);
