// Functions specific to kmeans

function choose_init_method(callback) {
    var choices = [{name: "I'll Choose", choice: "user", txtpos_x: -13.2},
                   {name: "Randomly", choice: "random", txtpos_x: -3.2},
                   {name: "Farthest Point", choice: "farthest", txtpos_x: 6.2}
                  ];

    var title = {text: "How to pick the initial centroids?", x: -14, y: 9};

    display_choice(choices, title, callback);
}

function reassign_points() {
    for(var j = 0; j < data.length; j++){
        var ibest = 0;
        var dbest = Infinity;
        for(var i = 1; i < centroids.length; i++) {
            var d = dist(data[j], centroids[i]);
            if(d < dbest) {
                dbest = d;
                ibest = i;
            }
        }
        data[j].cluster = ibest;
    }

    svg.selectAll(".dot")
    .transition()
    .style("fill", function(d) { return color(d.cluster); })
    .each("end", function() {
        d3.select("#next_button")
        .attr("value", "Update Centroids")
        .on("click", update_centroids);
    });
}

function update_centroids() {
    var new_centroids = new Array(centroids.length);
    var cent_counts = new Array(centroids.length);
    for(var i = 1; i < new_centroids.length; i++) {
        new_centroids[i] = {x: 0.0, y: 0.0, cluster: i};
        cent_counts[i] = 0;
    }
    for(var j = 0; j < data.length; j++) {
        z = data[j];
        cent_counts[z.cluster] += 1;
        new_centroids[z.cluster].x += z.x;
        new_centroids[z.cluster].y += z.y;
    }
    
    for(var i = 1; i < new_centroids.length; i++) {
        if(cent_counts[i] == 0) {
            // No change
            new_centroids[i].x = centroids[i].x;
            new_centroids[i].y = centroids[i].y;
        }
        else {
            new_centroids[i].x /= cent_counts[i];
            new_centroids[i].y /= cent_counts[i];
        }
    }

    for(var i = 1; i < new_centroids.length; i++) {
        centroids[i].x = new_centroids[i].x;
        centroids[i].y = new_centroids[i].y;
    }

    svg.selectAll(".centroid")
    .transition()
    .duration(250)
    .attr("cx", function(d) { return x(d.x); })
    .attr("cy", function(d) { return y(d.y); })
    .each("end", function() {
        draw_voronoi();
        d3.select("#next_button")
        .attr("value", "Reassign Points")
        .on("click", reassign_points);
    });
}

function add_go_button() {
    d3.select("#button_area").append("input")
    .attr("id", "next_button")
    .attr("name", "updateButton")
    .attr("type", "button")
    .attr("value", "   GO!   ")
    .on("click", function() {
        svg.selectAll(".cursor").remove();
        d3.select(".target_rect").remove();

        draw_voronoi();
        reassign_points();
    });
}

function add_next_centroid_button(callback) {
    d3.select("#button_area").append("input")
    .attr("id", "next_centroid")
    .attr("name", "nextCentroidButton")
    .attr("type", "button")
    .attr("value", "Add Centroid")
    .on("click", callback);
}

function rm_next_centroid_button() {
    d3.select("#next_centroid")
    .remove();
}

function draw_voronoi() {

    var bounds = d3.geom.polygon([
    [-100, -100],
    [-100, height + 100],
    [width + 100, height + 100],
    [width + 100, -100]
    ]);

    var polys = d3.geom.voronoi()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); })
    (centroids.slice(1, centroids.length))
    .map(function(d) { return bounds.clip(d); });

    svg.select(".own_region").selectAll("path").remove();
    svg.select(".own_region").selectAll("path")
    .data(polys)
    .enter().append("path")
    .style("fill", function(d, i) { return color(d.point.cluster); })
    .attr("d", function(d) { return "M" + d.join("L") + "Z"; });
}

function get_centroids() {
    var centroids = new Array(0);
    centroids.push({x: -30, y: -30});  /* -30 for better animation in furthest */
    var centcount = 0;

    if (kmeans_init == "random") {

        function drop_random() {

            centcount += 1;
            var chosen = data[Math.floor(Math.random() * data.length)];
            centroids[centcount] = {x: chosen.x, y: chosen.y, cluster: centcount};

            svg.selectAll(".centroid").data(centroids.slice(1, centroids.length))
            .enter().append("circle")
            .attr("class", "centroid")
            .attr("r", 10.0)
            .style("fill", function(d) { return color(d.cluster); })
            .attr("cx", x(-20.0))
            .attr("cy", x(-20.0))
            .transition()
            .attr("cx", function(d) { return x(d.x); })
            .attr("cy", function(d) { return y(d.y); });

            draw_voronoi();

            if (centcount == 2) {
                add_go_button();
            }

            if (centcount >= 10) {
                rm_next_centroid_button();
            }
        }

        add_next_centroid_button(drop_random);

        return centroids;

    } else if (kmeans_init == "farthest") {

        function drop_furthest() {

            centcount += 1;

            /* Choose first centroid randomly */
            if (centcount == 1) {
                var chosen = data[Math.floor(Math.random() * data.length)];
                centroids[1] = {x: chosen.x, y: chosen.y, cluster: 1};
            } else {
                /* Choose rest as furthest from others */
                var best_length = 0;
                var best_centroid = null;
                for (var i = 0; i < data.length; i++) {
                    var inner_best_length = Infinity;
                    for (var j = 1; j < centcount; j++) {
                        inner_best_length = Math.min(inner_best_length, dist(data[i], centroids[j]));
                    }
                    if (inner_best_length > best_length) {
                        best_length = inner_best_length;
                        best_centroid = data[i];
                    }
                }
                centroids[centcount] = {x: best_centroid.x, y: best_centroid.y, cluster: centcount};
            }

            svg.selectAll(".centroid").data(centroids.slice(1, centroids.length))
            .enter().append("circle")
            .attr("class", "centroid")
            .attr("r", 10.0)
            .style("fill", function(d) { return color(d.cluster); })
            .attr("cx", x(centroids[centcount-1].x))
            .attr("cy", y(centroids[centcount-1].y))
            .transition()
            .attr("cx", function(d) { return x(d.x); })
            .attr("cy", function(d) { return y(d.y); });

            draw_voronoi();

            if (centcount == 2) {
                add_go_button();
            }

            if (centcount >= 10) {
                rm_next_centroid_button();
            }
        }

        add_next_centroid_button(drop_furthest);

        return centroids;

    } else if (kmeans_init == "user") {

        var cursor = d3.select("svg").append("circle")
            .attr("r", 10.0)
            .attr("transform", "translate(-100,-100)")
            .attr("class", "cursor")
            .style("fill", color(1));

        function mousemove() {
            cursor.attr("transform", "translate(" + d3.mouse(this) + ")");
        }

        function mouseout() {
            cursor.attr("opacity", 0.0);
        }

        function mouseover() {
            cursor.attr("opacity", 1.0);
        }

        function click(d) {
            if (centcount >= 10) {
                return;
            }

            centcount += 1;

            cursor.transition()
            .style("fill", color(centcount + 1));

            var coords = d3.mouse(this);
            var xi = x.invert(coords[0] - margin.left);
            var yi = y.invert(coords[1] - margin.right);
            
            var cent = {x: xi, y: yi, cluster: centcount};
            centroids.push(cent);

            svg.selectAll(".centroid").data(centroids.slice(1, centroids.length))
            .enter().append("circle")
            .attr("class", "centroid")
            .attr("r", 10.0)
            .attr("cx", function(d) { return x(d.x); })
            .attr("cy", function(d) { return y(d.y); })
            .style("fill", function(d) { return color(d.cluster); });

            draw_voronoi();

            if (centcount == 2) {
                add_go_button();
            }

            if (centcount >= 10) {
                cursor.remove();
                d3.select(".target_rect").remove();
            }
        }

        var rect = d3.select("svg")
            .append("rect")
            .attr("class", "target_rect")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("opacity", 0.0)
            .on("mousedown", click)
            .on("mousemove", mousemove)
            .on("mouseout", mouseout)
            .on("mouseover", mouseover);

        return centroids;
    }
}
