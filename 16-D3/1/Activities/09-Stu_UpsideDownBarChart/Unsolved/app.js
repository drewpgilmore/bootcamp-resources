// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Append an SVG wrapper to the page and set a variable equal to a reference to it
// YOUR CODE HERE


// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("height", "600")
  .attr("width", "400");

// Append a rectangle and set its height in relation to the booksReadThisYear value
booksReadThisYear.forEach(function(num) {
svg.append("rect")
  .classed("bar", true) // for bonus
  .data(booksReadThisYear)
  .attr("width", 100)
  .attr("height", function(num) {
    return num * 10;
  })
  .attr("x", 0)
  .attr("y", 0);
})





// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
