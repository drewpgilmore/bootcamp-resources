var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("hairData.csv").then(function(hairData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    hairData.forEach(d => {
      d.hair_length = +d.hair_length;
      d.num_hits = +d.num_hits;
    });

    // Step 2: Create scale functions
    // ==============================
    var xScale = d3.scaleLinear()
      .domain(d3.extent(hairData, d => d.hair_length))
      .range([0, width]);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(hairData, d => d.num_hits)])
      .range([height, 0]);

    // Step 3: Create axis functions
    // ==============================
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    chartGroup.append("g")
      .call(yAxis);
  
    // Step 5: Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
      .data(hairData)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.hair_length))
      .attr("cy", d => yScale(d.num_hits))
      .attr("r", "10")
      .attr("fill", "pink")
      .attr("stroke-width", "1")
      .attr("stroke", "black");

    // Step 6: Initialize tool tip
    // ==============================
    var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.hair_length} Inches of Hair`);
    });

    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("mouseover", function(d) {
      toolTip.show(d, this);
    })
      .on("mouseout", function(d) {
        toolTip.hide(d);
    });

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Number of Billboard 100 Hits");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Hair Metal Band Hair Length (inches)");
  }).catch(function(error) {
    console.log(error);
  });
