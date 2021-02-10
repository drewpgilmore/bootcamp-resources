var svgWidth = 1000;
var svgHeight = 750;

var margin = {
    top: 40, 
    right: 40, 
    bottom: 40, 
    left: 40
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
    .select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("data.csv").then(data => {
    var parseTime = d3.timeParse("%d-%b");

    data.forEach(d => {
        d.date = parseTime(d.date);
        d.dow_index = +d.dow_index;
        d.smurf_sightings = +d.smurf_sightings;
    });

    var xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
        .range([0, width]);

    var yScale1 = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.dow_index)])
        .range([height, 0]);

    var yScale2 = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.smurf_sightings)])
        .range([height, 0]);

    var bottomAxis = d3.axisBottom(xScale)
        .tickFormat(d3.timeFormat("%d-%b"));
    var leftAxis = d3.axisLeft(yScale1);
    var rightAxis = d3.axisRight(yScale2);

    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .attr("stroke", "green")
        .call(leftAxis);

    chartGroup.append("g")
        .attr("transform", `translate(${width}, 0)`)
        .attr("stroke", "blue")
        .call(rightAxis);
    
    var line1 = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale1(d.dow_index));
    var line2 = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale1(d.smurf_sightings));

    chartGroup.append("path")
        .data([data])
        .attr("d", line1)
        .classed("line green", true);

    chartGroup.append("path")
        .data([data])
        .attr("d", line2)
        .classed("line blue", true);

    chartGroup.append("text")
        // Position the text
        // Center the text:
        // (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "green")
        .text("Dow Index");
    
    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 37})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "blue")
        .text("Smurf Sightings");

}).catch(function(error) {
    console.log(error);
});