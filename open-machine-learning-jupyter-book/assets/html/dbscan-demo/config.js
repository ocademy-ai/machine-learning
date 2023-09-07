var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

y.domain([-10, 10]);
var xlim = 10 * width / height;
x.domain([-xlim, xlim]);

var clr = ["white", "red", "blue", "green", "yellow", "black", "purple", "grey", "brown", "orange", "pink"];
function color(i) {
    if(i == 0) {
        return clr[0];
    }
    else {
        return clr[1 + (i - 1) % (clr.length - 1)];
    }
}

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

function dist(w, z) {
    return Math.sqrt(Math.pow(w.x - z.x, 2) + Math.pow(w.y - z.y, 2));
}

function setup() {
    // Initialize the svg
    d3.select("svg").remove();

    svg = d3.select("#svg_area").append("svg")
    .attr("width", "100%")
    .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.select("#svg_area").select("svg")
    .insert("rect", ":first-child")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", "100%")
    .attr("height", "100%")
    .style("fill", "white");

    // Initialize the buttons
    d3.select("#button_area").selectAll("input").remove();

    d3.select("#button_area")
    .append("input")
    .attr("class", "restart_button")
    .attr("name", "restart_button")
    .attr("type", "button")
    .attr("value", "Restart")
    .on("click", restart);
}

function draw(data) {
    var points = svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d, i) { return x(30 * Math.cos(i / 5)); })
      .attr("cy", function(d, i) { return y(30 * Math.sin(i / 5)); })
      .style("fill", function(d) { return color(d.cluster); })
      .style("stroke", "black")
      .style("stroke-width", "1px");

    points.transition()
    .duration(500)
    .attr("cx", function(d) { return x(d.x); })
    .attr("cy", function(d) { return y(d.y); });
}

function choose_data(callback) {
    algo = choice;

    var smiley_dat = function() { return smiley(500); };
    var unif_dat  = function() { return uniform(250); };
    var threenorm_dat = function() { return threenorm(250); };
    var pimples_dat = function() { return pimples(500); };
    var circles = function() { return circle_pack(500); };
    var density = function() { return density_bars(500); };
    var dbscan_dat = function() { return dbscan_all(); };
    var dbscan_nonunique = function() { return dbscan_borders(); };

    var choices = [
        {name: "Uniform Points", choice: unif_dat, txtpos_x: -14.0},
        {name: "Gaussian Mixture", choice: threenorm_dat, txtpos_x: -4.5},
        {name: "Smiley Face", choice: smiley_dat, txtpos_x: 6.6},
        {name: "Density Bars", choice: density, txtpos_x: -13.6},
        {name: "Packed Circles", choice: circles, txtpos_x: -3.9},
        {name: "Pimpled Smiley", choice: pimples_dat, txtpos_x: 5.8},
        {name: "DBSCAN Rings", choice: dbscan_dat, txtpos_x: -14.0},
        {name: "Example A", choice: dbscan_nonunique, txtpos_x: -3.2}
    ];

    var title = {text: "What kind of data would you like?", x: -14, y: 9};

    display_choice(choices, title, callback);
}
