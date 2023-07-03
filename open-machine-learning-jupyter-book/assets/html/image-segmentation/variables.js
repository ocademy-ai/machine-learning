// variables.js


// URL of currently loaded image
var image_url = "";
// Current filter kernel to apply to image
// Default filter is 1 (sharpen)
var filter;
var iterations = 1;
var automatic_update = true;
// Coordinates of selected filter kernel weight
var selected_weight = {
      x: undefined,
      y: undefined
}

console.log("variables.js loaded");