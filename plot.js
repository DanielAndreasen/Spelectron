var d3 = require('d3');


d3.select("body")
  .append("p")
  .style("color", "blue")
  .text("Hello there, I'm a plot.")


var dataArray = d3.shuffle([10, 40, 50, 70]);
var width = 300;
var height = 300;


d3.csv("data.csv", function (data) {

    console.log(data[0]);

    var maxValue = 26;
    // console.log(data.columns)
    // var maxValue = d3.max(data.age);
    var widthScale = d3.scaleLinear()
                       .domain([20, maxValue])
                       .range([0, width]);

    var color = d3.scaleLinear()
                  .domain([0, maxValue])
                  .range(["red", "blue"])

    var axis = d3.axisBottom(widthScale)
                 .ticks(5);

    var canvas = d3.select("body").append("svg")
                   .attr("width", width)
                   .attr("height", height);
                   .append("g")
                   .attr("transform", "translate(10, 0)");

    var bars = canvas.selectAll("rect")
          .data(data)
          .enter()
             .append("rect")
             .attr("width", function (d) { return d.age; })
             .attr("height", 20)
             .attr("y", function (d, i) { return i * 30; })
             .attr("fill", "blue");

    bars.transition()
        .duration(2000)
        .attr("width", function(d) { return widthScale(d.age); })
        .attr("fill", function(d) { return color(d.age); })

    canvas.append("g")
          .attr("transform", "translate(0, 120)")
          .call(axis);
 })
