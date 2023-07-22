// Functions specific to dbscan

// Returns all points within distance eps of x,
// (including x itself if it is a point).
function region_query(data, x, eps) {
    var res = new Array();
    for(var i = 0; i < data.length; i++) {
        if(dist(data[i], x) < eps) {
            res.push(data[i]);
        }
    }
    return res;
}

// Makes an epsilon ball animation around z
function eps_ball(z, keep) {
    var ball = svg.append("circle")
    .attr("class", "eps_ball")
    .attr("cx", x(z.x))
    .attr("cy", y(z.y))
    .attr("r", 0.0)
    .style("stroke", z.cluster == 0 ? "black" : color(z.cluster)) // no white borders
    .style("stroke-width", 2)
    .style("fill", "none");

    ball.transition()
    .duration(500)
    .attr("r", x(dbscan_state.eps) - x(0));

    if(keep) {
        ball.transition()
        .delay(1000)
        .attr("opacity", 0.5)
        .remove();

        var new_ball = svg.select(".own_region")
        .append("circle")
        .attr("class", "eps_ball")
        .attr("cx", x(z.x))
        .attr("cy", y(z.y))
        .attr("r", x(dbscan_state.eps) - x(0))
        .style("stroke", z.cluster == 0 ? "black" : color(z.cluster))
        .style("stroke-width", 2)
        .style("fill", z.cluster == 0 ? "black" : color(z.cluster))
        .attr("opacity", 0.0)
        .transition()
        .delay(1000)
        .attr("opacity", 1.0);

    }
    else {
        ball.transition()
        .delay(1000)
        .attr("opacity", 0.0)
        .remove();
    }
}

function dbscan_iter(data) {
    // Not expanding a cluster
    if(dbscan_state.neigh.length == 0) {
        var index = dbscan_state.index;
        while(index < data.length && data[index].cluster != 0) {
            index += 1;
        }
        if(index == data.length) {
            dbscan_state.index = index;
            clearInterval(process);  // stop wasteful computation
            process = null;
            dbscan_state.phase = "done";
            d3.select("#next_button").remove()
            d3.select("#eps_select").remove();
            d3.select("#minPoints_select").remove();
            d3.select("#pause").remove();
            return;
        }
        dbscan_state.index = index + 1;
        var z = data[index];

        var neigh = region_query(data, z, dbscan_state.eps);
        if(neigh.length >= dbscan_state.minPoints) {
            dbscan_state.cluster += 1;
            for(var j = 0; j < neigh.length; j++) {
                neigh[j].cluster = dbscan_state.cluster;
                if(neigh[j] != z) {
                    dbscan_state.neigh.push(neigh[j]);
                }
            }
            eps_ball(z, true);
        }
        else {
            eps_ball(z, false);
        }
    }
    // In the middle of expanding a cluster
    else {
        var z = dbscan_state.neigh.shift();

        var neigh = region_query(data, z, dbscan_state.eps);
        if(neigh.length >= dbscan_state.minPoints) {
            for(var j = 0; j < neigh.length; j++) {
                if(neigh[j].cluster != dbscan_state.cluster) {
                    neigh[j].cluster = dbscan_state.cluster;
                    dbscan_state.neigh.push(neigh[j]);
                }
            }
            eps_ball(z, true);
        }
        else {
            eps_ball(z, false);
        }
    }
}

function update_eps(value) {
    dbscan_state.eps = value;
    d3.select("#eps_value").text("epsilon = " + twodecs(dbscan_state.eps));
    if (dbscan_state.phase == "postchoose") {
        draw_eps_balls();
    }
}


function update_minPoints(value) {
    dbscan_state.minPoints = value;
    d3.select("#minPoints_value").text("minPoints = " + dbscan_state.minPoints);
    if (dbscan_state.phase == "postchoose") {
        draw_eps_balls();
    }
}

function draw_eps_balls() {

    var centers = dbscan_rings().centers;
    var eps = dbscan_state.eps;
    var minPoints = dbscan_state.minPoints;

    function fill_color(d) {
        if (region_query(data, d, eps).length >= minPoints) {
            return color(1);
        } else {
            return "none";
        }
    }

    var balls = svg.selectAll(".choose_eps_ball");
    if (balls.empty()) {
        balls
        .data(centers)
        .enter()
        .append("circle")
        .attr("class", "choose_eps_ball")
        .attr("cx", function(d) { return x(d.x); })
        .attr("cy", function(d) { return y(d.y); })
        .attr("r", x(eps) - x(0))
        .style("stroke", color(1))
        .style("stroke-width", 2)
        .style("opacity", 0.5)
        .style("fill", fill_color);
    } else {
        balls.attr("r", x(eps) - x(0))
        .style("fill", fill_color);
    }
}
