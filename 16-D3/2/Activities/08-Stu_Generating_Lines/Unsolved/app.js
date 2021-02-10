var svgWidth = 1000;
var svgHeight = 500;

// create an SVG element
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Load csv data
d3.csv("NCHS_life_expectancy_at_birth.csv").then(function(lifeData) {

  //console.log(lifeData);

  // cast the data from the csv as numbers
  lifeData.forEach(function(data) {
    data.year = +data.year;
    data.lifeExpectancy = +data.lifeExpectancy;
  });

  // Create a scale for your independent (x) coordinates
  var xScale = d3.scaleLinear()
    .domain([d3.min(lifeData, d => d.year), d3.max(lifeData, d => d.year)])
    .range([0, 1000]);

  // Create a scale for your dependent (y) coordinates
  var yScale = d3.scaleLinear()
    .domain([d3.min(lifeData, d => d.lifeExpectancy), d3.max(lifeData, d => d.lifeExpectancy)])
    .range([0, 500]);

  // create a line generator function and store as a variable
  // use the scale functions for x and y data
  var lineGenerator = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.lifeExpectancy));

  // Append a path element to the svg, make sure to set the stroke, stroke-width, and fill attributes.
  //var svg = d3.select("#path-3");

  svg.append("path")
    .attr("fill", "none")
    .attr("stroke", "orange")
    .attr("stroke-width", 5)
    .attr("d", lineGenerator(lifeData));

}).catch(function(error) {
  console.log(error);
});
