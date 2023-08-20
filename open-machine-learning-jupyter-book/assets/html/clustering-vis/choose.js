// choose.js
// Functions for making choice buttons

var choice = null; // global variable indicating user choice

function make_choice(d, next_fn) {
    svg.selectAll(".choice_rect").remove();
    svg.selectAll(".choice_text").remove();
    svg.selectAll(".choice_title").remove();

    choice = d.choice;
    next_fn();
}

function display_choice(choices, title, next_fn) {
    choice = null;

    // Make the rectangles
    var choice_rects = svg.selectAll(".choice_rect")
    .data(choices)
    .enter().append("rect")
    .attr("class", "choice_rect")
    .attr("x", function(d, i) { return x(-15 + 30 / 3 * (i % 3)); })
    .attr("y", function(d, i) { return y(5 - 5 * Math.floor(i / 3)); })
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("width", x(8) - x(0))
    .attr("height", -(y(8) - y(4.2)))
    .style("stroke", "black")
    .style("stroke-width", 3)
    .style("fill", "white")
    .style("cursor", "pointer")
    .on("click", function(d) { make_choice(d, next_fn); } );

    // Make the choice text
    svg.selectAll(".choice_text")
    .data(choices)
    .enter().append("text")
    .attr("class", "choice_text")
    .style("font-size", 20)
    .text(function(d) { return d.name; })
    .attr("x", function(d, i) { return x(d.txtpos_x); })
    .attr("y", function(d, i) { return y(3 - 5 * Math.floor(i / 3)); })
    .style("cursor", "pointer")
    .on("click", function(d) { make_choice(d, next_fn); } );

    // Make the title
    svg.append("text")
    .attr("class", "choice_title")
    .style("font-size", 40)
    .text(title.text)
    .attr("x", x(title.x))
    .attr("y", y(title.y));
}

// Returns a slider
function make_slider(x1, y1, y2, onClick) {
    var slider = svg.append("g")
    .attr("class", "slider");

    slider.append("line")
    .attr("x1", x(x1))
    .attr("y1", y(y1))
    .attr("x2", x(x1))
    .attr("y2", y(y2))
    .style("stroke", "#555555")
    .style("stroke-width", "8px");

    var mover = slider.append("rect")
    .attr("x", x(x1 - 1))
    .attr("y", y((y1 + y2) / 2))
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("width", x(2) - x(0))
    .attr("height", -(y(1) - y(0)))
    .style("fill", "black")
    .style("cursor", "pointer")
    .on("click", onClick);

    return slider;
}
