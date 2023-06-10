// https://observablehq.com/@yizhe-ang/interactive-visualization-of-linear-regression@727
function _1(md){return(
md``
)}

function _resetButton(Inputs,d3,regressionPlot)
{
  const resetButton = Inputs.button("Reset");

  d3.select(resetButton).on("input", () => {

    regressionPlot.reset();
  });

  return resetButton;
}


function _viewOptions(Inputs,d3,regressionPlot)
{
  const viewOptions = Inputs.radio(
    ["None", "Absolute Error", "Squared Error"],
    { label: "View", value: "Absolute Error" }
  );

  d3.select(viewOptions).on("input", () => {
    regressionPlot.updateView(viewOptions.value);
  });

  return viewOptions;
}


function _rSquaredPlot(RSquaredPlot,width){return(
RSquaredPlot({ width: width })
)}

function _regressionPlot(RegressionPlot,data,width,d3,rSquaredPlot)
{
  const regressionPlot = RegressionPlot(data.slice(0, 1), {
    width: width,
    xDomain: [0, d3.max(data, ([x]) => x) + 5],
    yDomain: [0, d3.max(data, ([_, y]) => y) + 5],
    r: 6,
    showGrid: true
  });
  // Attach listener
  d3.select(regressionPlot).on("input", function () {
    rSquaredPlot.update(this.value, this.transition);
  });

  rSquaredPlot.update(regressionPlot.value);

  return regressionPlot;
}


function _6(tex,md){return(
md`

`
)}

function _7(md){return(
md
)}

function _width(){return(
800
)}

function _data(d3)
{
  const numPoints = 15;
  const xScale = 10;
  const xShift = 5;
  const yScale = 6;
  const yShift = 0;

  const data = d3.range(numPoints).map((i) => {
    const xCoord = xShift + xScale * d3.randomUniform()();
    const yCoord = yShift + xCoord + yScale * d3.randomUniform()();

    return [xCoord, yCoord];
  });

  return data;
}


function _animation(d3,data,regressionPlot)
{
  // Perform opening animation
  const totalTime = 6_000;
  const ease = d3.easeQuadOut;

  d3.range(1, data.length).forEach((i) => {
    setTimeout(() => {
      const [xCoord, yCoord] = data[i];

      regressionPlot.updateDatapoint(xCoord, yCoord);
    }, totalTime * ease(i / data.length));
  });
}


function _RSquaredPlot(d3){return(
function RSquaredPlot({
  data,
  marginTop = 0, // top margin, in pixels
  marginRight = 30, // right margin, in pixels
  marginBottom = 0, // bottom margin, in pixels
  marginLeft = 53, // left margin, in pixels
  width = 640, // outer width, in pixels
  height = 20, // outer height, in pixels
  barHeight = 25, // height of bar, in pixels
  titleSize = 20, // fontsize of title text
  labelSize = 12 // fontsize of label text
} = {}) {
  if (data === undefined) data = 0;

  const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([marginLeft, width - marginRight]);

  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // Draw title.
  const titleGroup = svg.append("g");

  // titleGroup
  //   .append("line")
  //   .attr("stroke", "black")
  //   .attr("x1", xScale(0))
  //   .attr("x2", xScale(0))
  //   .attr("y1", 0)
  //   .attr("y2", height);

  titleGroup
    .append("text")
    .attr("fill", "black")
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "middle")
    .attr("font-family", "serif")
    .attr("font-size", titleSize)
    .attr("x", xScale(0))
    .attr("dx", -10)
    .attr("y", height / 2)
    .text("R²");

  // Draw whole bar.
  svg
    .append("g")
    .append("rect")
    .attr("fill", "gainsboro")
    .attr("x", xScale(0))
    .attr("y", marginTop)
    .attr("width", width - marginLeft - marginRight)
    .attr("height", height - marginTop - marginBottom);

  // Draw bar.
  const bar = updateBar(svg.append("g").selectAll("rect"), 0);

  // Draw label
  const labelFormat = d3.format(".2f");
  const label = updateLabel(svg.append("g").selectAll("text"), 0);

  // Update according to data.
  update(data);

  function updateBar(rect, data, transition = true) {
    return rect.data([data]).join(
      (enter) =>
        enter
          .append("rect")
          .attr("fill", "black")
          .attr("x", xScale(0))
          .attr("y", marginTop)
          .attr("width", 0)
          .attr("height", height - marginTop - marginBottom),
      (update) =>
        update.call((update) => {
          if (transition) update = update.transition();

          update.attr("width", (d) => xScale(isNaN(d) ? 0 : d) - xScale(0));
        })
    );
  }

  function updateLabel(text, data, transition = true) {
    return text.data([data]).join(
      (enter) =>
        enter
          .append("text")
          .attr("dominant-baseline", "middle")
          .attr("font-family", "sans-serif")
          .attr("font-size", labelSize)
          .attr("font-weight", "bold")
          .attr("fill", "black")
          .attr("text-anchor", "start")
          .attr("dx", 10)
          .attr("x", xScale(0))
          .attr("y", height / 2)
          .text(labelFormat("0")),
      (update) =>
        update.call((update) => {
          // Check if bar is too short
          const check = (d) => d < 0.1;

          if (transition) update = update.transition();

          update
            .attr("x", (d) => xScale(d))
            .text((d) => labelFormat(d))
            .attr("fill", (d) => (check(d) ? "black" : "white"))
            .attr("text-anchor", (d) => (check(d) ? "start" : "end"))
            .attr("dx", (d) => (check(d) ? 10 : -10));
        })
    );
  }

  // Main function for data updates.
  function update(data, transition = true) {
    updateBar(bar, data, transition);
    updateLabel(label, data, transition);
  }

  return Object.assign(svg.node(), { update });
}
)}

function _RegressionPlot(d3){return(
function RegressionPlot(
  data,
  {
    x = ([x]) => x, // accessor function for x-coordinate
    y = ([, y]) => y, // accessor function for y-coordinate
    r = 6, // radius of dots, in pixels
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    inset = r * 2, // inset the default range, in pixels
    insetTop = inset, // inset the default y-range
    insetRight = inset, // inset the default x-range
    insetBottom = inset, // inset the default y-range
    insetLeft = inset, // inset the default x-range
    width = 640, // outer width, in pixels
    height = 500, // outer height, in pixels
    xType = d3.scaleLinear, // type of x-scale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft + insetLeft, width - marginRight - insetRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom - insetBottom, marginTop + insetTop], // [bottom, top]
    showGrid = true // whether to show grid lines
  } = {}
) {
  const errorColor = d3.schemeSet3[3];

  let errorLinesOpacity = 1;
  let errorSquaresOpacity = 0;

  // Init drag object.
  const drag = d3
    .drag()
    // .on("start", dragstarted)
    .on("drag", dragged);
  // .on("end", dragended);

  // To give each data point a unique id
  let idCounter = 0;

  // Compute data values.
  data = data.map((d) => ({
    xCoord: x(d),
    yCoord: y(d),
    id: idCounter++
  }));

  // Store copy of initial data object
  const initData = data.map((d) => ({ ...d }));

  // Compute default domains.
  // if (xDomain === undefined) xDomain = d3.extent(data, (d) => d.xCoord);
  if (xDomain === undefined) xDomain = [0, d3.max(data, (d) => d.xCoord)];
  if (yDomain === undefined) yDomain = [0, d3.max(data, (d) => d.yCoord)];

  // Init linear regressor.
  const linearRegression = d3
    .regressionLinear()
    .x((d) => d.xCoord)
    .y((d) => d.yCoord)
    .domain(xDomain);

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).ticks(width / 80);
  const yAxis = d3.axisLeft(yScale).ticks(height / 80);

  // Draw svg.
  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // Draw xAxis.
  const axisOpacity = 1;

  const xGroup = svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .attr("opacity", axisOpacity)
    .call(xAxis)
    .call((g) => g.select(".domain").remove());
  // Draw grid lines
  xGroup
    .selectAll(".tick line")
    .clone()
    .attr("y2", marginTop + marginBottom - height)
    // Draw line at origin
    .attr("stroke-opacity", (d) => {
      if (d == 0) {
        return axisOpacity;
      } else {
        return showGrid ? 0.1 : 0;
      }
    });

  // Draw yAxis.
  const yGroup = svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .attr("opacity", axisOpacity)
    .call(yAxis)
    .call((g) => g.select(".domain").remove());
  yGroup
    .selectAll(".tick line")
    .clone()
    .attr("x2", width - marginLeft - marginRight)
    // Draw line at origin
    .attr("stroke-opacity", (d) => {
      if (d == 0) {
        return axisOpacity;
      } else {
        return showGrid ? 0.1 : 0;
      }
    });

  // Draw error squares.
  let errorSquares = updateErrorSquares(
    svg.append("g").selectAll("rect"),
    data
  );

  // Draw error lines.
  let errorLines = updateErrorLines(svg.append("g").selectAll("line"), data);

  // Draw regression line.
  const regressionLineGroup = svg
    .append("g")
    .attr("stroke", "black")
    .attr("stroke-width", 2);
  // .attr("stroke-dasharray", "20,20");

  const regressionLine = updateRegressionLine(
    regressionLineGroup.selectAll("line"),
    data
  );

  // Draw space for plot interactions.
  const plotRect = svg
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("opacity", 0)
    .on("click", addDatapoint);

  // Draw data points.
  const circlesGroup = svg.append("g").attr("fill", "black");
  let circles = updateCircles(circlesGroup.selectAll("circle"), data);

  // Drag interactions for circles.
  function dragstarted(event, d) {
    d3.select(this).raise().attr("stroke", "red");
  }
  function dragged(event, d) {
    d3.select(this)
      // Update data point, as well as its position on the plot
      .attr("cx", () => {
        d.xCoord = xScale.invert(event.x);
        return event.x;
      })
      .attr("cy", () => {
        d.yCoord = yScale.invert(event.y);
        return event.y;
      });

    updateRegressionLine(regressionLine, data, false);
    errorSquares = updateErrorSquares(errorSquares, data, false);
    errorLines = updateErrorLines(errorLines, data, false);
  }
  function dragended(event, i) {
    d3.select(this).attr("stroke", null);
  }

  // Click interaction for circles.
  function removeDatapoint(event, dCurr) {
    if (event.defaultPrevented) return; // dragged

    // Remove data point; faster way to do this?
    data = data.filter((d) => d.id !== dCurr.id);

    update(data);
  }

  // Click interaction for plot.
  function addDatapoint(event) {
    const [xm, ym] = d3.pointer(event);

    updateDatapoint(xScale.invert(xm), yScale.invert(ym));
  }

  // Helper function for regression line update.
  function updateRegressionLine(line, data, transition = true) {
    const regressionData = linearRegression(data);

    // Dispatch event and R^2 value
    svg.node().value = regressionData.rSquared;
    svg.node().transition = transition;
    svg.dispatch("input", { bubbles: true });

    return line
      .data([regressionData])
      .join("line")
      .call((line) => {
        if (transition) line = line.transition();
        line
          .attr("x1", (d) => xScale(d[0][0]))
          .attr("x2", (d) => xScale(d[1][0]))
          .attr("y1", (d) => yScale(d[0][1]))
          .attr("y2", (d) => yScale(d[1][1]));
      });
  }

  // Helper function to update circles based on new data.
  function updateCircles(circles, data) {
    return circles
      .data(data, (d) => d.id)
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("cx", (d) => xScale(d.xCoord))
            .attr("cy", (d) => yScale(d.yCoord))
            // To transition from 0 radius
            .attr("r", 0)
            // Attach interactions
            .call(drag)
            .on("click", removeDatapoint)
            // Add transition
            .call((enter) =>
              enter
                .transition()
                .ease(d3.easeBackOut.overshoot(1.7))
                .attr("r", r)
            ),
        (update) =>
          update
            .transition()
            .attr("cx", (d) => xScale(d.xCoord))
            .attr("cy", (d) => yScale(d.yCoord)),
        (exit) =>
          exit
            .transition()
            .ease(d3.easeBackIn.overshoot(1.7))
            .attr("r", 0)
            .remove()
      );
  }

  // Helper function to update error lines based on new data.
  function updateErrorLines(lines, data, transition = true) {
    const regressionData = linearRegression(data);

    return lines
      .data(data, (d) => d.id)
      .join(
        (enter) =>
          enter
            .append("line")
            .attr("stroke", errorColor)
            .attr("stroke-width", 2)
            .attr("opacity", errorLinesOpacity)
            // Start at data point
            .attr("x1", (d) => xScale(d.xCoord))
            .attr("y1", (d) => yScale(d.yCoord))
            .attr("x2", (d) => xScale(d.xCoord))
            .attr("y2", (d) => yScale(d.yCoord))
            // Add transition
            .call((enter) =>
              enter
                .transition()
                .attr("y2", (d) => yScale(regressionData.predict(d.xCoord)))
            ),
        (update) =>
          update.call((update) => {
            if (transition) update = update.transition();
            update
              .attr("x1", (d) => xScale(d.xCoord))
              .attr("y1", (d) => yScale(d.yCoord))
              .attr("x2", (d) => xScale(d.xCoord))
              .attr("y2", (d) => yScale(regressionData.predict(d.xCoord)));
          }),
        (exit) =>
          exit
            .transition()
            .attr("y2", (d) => yScale(d.yCoord))
            .remove()
      );
  }

  // Helper function to update error squares based on new data.
  function updateErrorSquares(rects, data, transition = true) {
    const regressionData = linearRegression(data);

    const computeHeight = (d) => {
      const yCoordPred = regressionData.predict(d.xCoord);

      return Math.abs(yScale(yCoordPred) - yScale(d.yCoord));
    };
    // Compute which direction the box should face
    const computeTransform = (d) => {
      const yCoordPred = regressionData.predict(d.xCoord);
      const check = yScale(yCoordPred) - yScale(d.yCoord) < 0;
      const deg = check ? -90 : 90;

      return `rotate(${deg}, ${xScale(d.xCoord)}, ${yScale(d.yCoord)})`;
    };

    return rects
      .data(data, (d) => d.id)
      .join(
        (enter) =>
          enter
            .append("rect")
            .attr("stroke", "none")
            .attr("fill", errorColor)
            .attr("opacity", errorSquaresOpacity)
            .attr("transform", computeTransform)
            // Start at data point
            .attr("x", (d) => xScale(d.xCoord))
            .attr("y", (d) => yScale(d.yCoord))
            .attr("width", 0)
            .attr("height", 0)
            // Add transition
            .call((enter) => {
              enter
                .transition()
                .attr("width", computeHeight)
                .attr("height", computeHeight);
            }),
        (update) =>
          update.call((update) => {
            update.attr("transform", computeTransform);

            if (transition) update = update.transition();

            update
              .attr("x", (d) => xScale(d.xCoord))
              .attr("y", (d) => yScale(d.yCoord))
              .attr("width", computeHeight)
              .attr("height", computeHeight);
          }),
        (exit) => exit.transition().attr("width", 0).attr("height", 0).remove()
      );
  }

  // Resets the plot to the initial data
  function reset() {
    update(initData, true);
  }

  // Updates which error type to show
  function updateView(option) {
    if (option === "None") {
      errorLinesOpacity = 0;
      errorSquaresOpacity = 0;

      errorLines.transition().attr("opacity", 0);
      errorSquares.transition().attr("opacity", 0);
    } else if (option === "Absolute Error") {
      errorLinesOpacity = 1;
      errorSquaresOpacity = 0;

      errorLines.transition().attr("opacity", 1);
      errorSquares.transition().attr("opacity", 0);
    } else if (option === "Squared Error") {
      errorLinesOpacity = 0;
      errorSquaresOpacity = 0.5;

      errorLines.transition().attr("opacity", 0);
      errorSquares.transition().attr("opacity", 0.5);
    }
  }

  // Adds a new datapoint and updates the plot
  function updateDatapoint(xCoord, yCoord) {
    // Add datapoint
    data = [...data, { xCoord, yCoord, id: idCounter++ }];

    update(data);
  }

  // Main function that updates the plot based on new data
  function update(newData, transition = true) {
    // Upate local data object
    data = newData.map((d) => ({ ...d }));

    updateRegressionLine(regressionLine, data, transition);
    circles = updateCircles(circles, data);
    errorSquares = updateErrorSquares(errorSquares, data, transition);
    errorLines = updateErrorLines(errorLines, data, transition);
  }

  return Object.assign(svg.node(), {
    update,
    updateDatapoint,
    updateView,
    reset
  });
}
)}

function _d3(require){return(
require("d3-regression", "d3")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("resetButton")).define("resetButton", ["Inputs","d3","regressionPlot"], _resetButton);
  main.variable(observer("viewOptions")).define("viewOptions", ["Inputs","d3","regressionPlot"], _viewOptions);
  main.variable(observer("rSquaredPlot")).define("rSquaredPlot", ["RSquaredPlot","width"], _rSquaredPlot);
  main.variable(observer("regressionPlot")).define("regressionPlot", ["RegressionPlot","data","width","d3","rSquaredPlot"], _regressionPlot);
  main.variable(observer()).define(["tex","md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer("width")).define("width", _width);
  main.variable(observer("data")).define("data", ["d3"], _data);
  main.variable(observer("animation")).define("animation", ["d3","data","regressionPlot"], _animation);
  main.variable(observer("RSquaredPlot")).define("RSquaredPlot", ["d3"], _RSquaredPlot);
  main.variable(observer("RegressionPlot")).define("RegressionPlot", ["d3"], _RegressionPlot);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
