// Some global variables
var svg;
var data;
var dbscan_state;
var algo_delay;
var process = null; // For setInterval

function twodecs(x) {
    return parseFloat(Math.round(x*100)/100).toFixed(2);
}

function go() {
    dbscan_state.phase = "inprogress";
    d3.selectAll(".choose_eps_ball").remove()
    //d3.select("#eps_select").remove();
    //d3.select("#minPoints_select").remove();
    
    d3.select("#next_button").remove();

    process = setInterval(function() {
        dbscan_iter(data);
        svg.selectAll(".dot")
        .transition()
        .style("fill", function(d) { return color(d.cluster); });
    }, algo_delay);

    d3.select("#button_area").append("input")
    .attr("id", "pause")
    .attr("name", "pause_button")
    .attr("type", "button")
    .attr("value", "Pause")
    .on("click", function() {
        d3.select("#pause").remove();

        clearInterval(process);

        d3.select("#button_area").append("input")
        .attr("id", "next_button")
        .attr("name", "updateButton")
        .attr("type", "button")
        .attr("value", "   GO!   ")
        .on("click", go);
    });
}

function restart() {
    /* Reset global variables */
    data = [];

    dbscan_state = {eps: 1.0, minPoints: 4, cluster: 0, index: 0, neigh: [], phase: "choose"};
    algo_delay = 100;
    clearInterval(process);
    process = null;

    setup();

    svg.append("g")
    .attr("class", "own_region")
    .attr("opacity", 0.5);

    choose_data(function(){
        dbscan_state.phase = "postchoose";
        data = choice();
        draw(data);

        svg.append("text")
        .attr("id", "eps_value")
        .attr("x", x(-20))
        .attr("y", y(-9.5))
        .text("epsilon = " + twodecs(dbscan_state.eps));

        svg.append("text")
        .attr("id", "minPoints_value")
        .attr("x", x(-20))
        .attr("y", y(-10.5))
        .text("minPoints = " + dbscan_state.minPoints);

        d3.select("#button_area").append("input")
        .attr("id", "eps_select")
        .attr("name", "eps_select")
        .attr("type", "range")
        .attr("min", 0.102920)  // lots of decimals to prevent ties in initial animation... :-(
        .attr("max", 2.0)
        .attr("step", 0.02)
        .attr("value", dbscan_state.eps)
        .style("width", "20%")
        .attr("onchange", "update_eps(parseFloat(this.value));")
        .attr("oninput", "update_eps(parseFloat(this.value));");

        d3.select("#button_area").append("input")
        .attr("id", "minPoints_select")
        .attr("name", "minPoints_select")
        .attr("type", "range")
        .attr("min", 1)
        .attr("max", 6)
        .attr("step", 1)
        .attr("value", dbscan_state.minPoints)
        .style("width", "20%")
        .attr("onchange", "update_minPoints(parseInt(this.value));")
        .attr("oninput", "update_minPoints(parseInt(this.value));");

        d3.select("#button_area").append("input")
        .attr("id", "next_button")
        .attr("name", "updateButton")
        .attr("type", "button")
        .attr("value", "   GO!   ")
        .on("click", go);

        setTimeout(draw_eps_balls, 500);
    });
}
