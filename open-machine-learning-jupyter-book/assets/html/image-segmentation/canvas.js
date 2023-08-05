// Get canvas elements
const input_canvas = $("canvas#input")[0];
const output_canvas = $("canvas#output")[0];
// Default canvas width
var canvas_width = 64;
// Default canvas height
var canvas_height = 64;
// Set width of input canvas
input_canvas.width = canvas_width;
// Set height of input canvas
input_canvas.height = canvas_height;
// Set width of output canvas
output_canvas.width = canvas_width;
// Set height of output canvas
output_canvas.height = canvas_height;
// Get input canvas context
const input_context = input_canvas.getContext("2d");
// Get output canvas context
const output_context = output_canvas.getContext("2d");

console.log("canvas.js loaded");