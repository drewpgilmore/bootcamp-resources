// @TODO: YOUR CODE HERE

var dataSet = data;

var stomach = [];
var bronchus = [];
var colon = [];
var breast = [];

for (var i = 0; i < dataSet.survival.length; i++) {
    if (data.organ[i] == 'Stomach') {
        stomach.push(data.survival[i]);
    }
    else if (data.organ[i] == 'Bronchus') {
        bronchus.push(data.survival[i]);
    }
    else if (data.organ[i] == 'Colon') {
        colon.push(data.survival[i]);
    }
    else {breast.push(data.survival[i])}
}

var trace1 = {
    y: stomach,
    type: 'box'
}

var trace2 = {
    y: bronchus,
    type: 'box'
}

var trace3 = {
    y: colon,
    type: 'box'
}

var trace4 = {
    y: breast,
    type: 'box'
}

var data = [
    trace1,
    trace2, 
    trace3, 
    trace4
]

var layout = {
    title: 'Survival'
}

Plotly.newPlot("plot", data, layout);