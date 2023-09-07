// script.js


const update_settings = function() {
      automatic_update = $("input#automatic-update")[0].checked;
      console.log("Automatic update setting updated");
      if (automatic_update) {
            set_filter();
      }
}

// Set weight of filter kernel
const set_weight = function() {
      var custom = kernels.findIndex(x => x.name == "Custom");
      // Clone current filter to custom filter
      kernels[custom] = clone(kernels[filter]);
      // Reset name of filter
      kernels[custom].name = "Custom";

      var weight = round(parseFloat($("#kernel-weight").val()), 1);
      // Check that weight is defined and is a number
      if (!isNaN(weight) && weight != undefined) {
            // Assign weight to kernel
            kernels[custom].kernel[selected_weight.x][selected_weight.y] = weight;
      }
      // Apply custom filter to image
      set_filter(custom);
}

const select_weight = function(x, y, deselect) {
      // Get ID of appropriate weight element in filter kernel visualization
      var id = selected_weight.x + "-" + selected_weight.y;
      // Reset border-radius property of previously selected weight
      $("#" + id).css("border-radius", "");
      // Display filter name
      $("#kernel-name").text(kernels[filter].name);

      // This seems to be the most efficient way to organize the logic. I spent an hour and a half on a Saturday night playing around with it, and it works, so don't mess it up.

      // Deselect weight
      if (
            // Filter kernel weight is reselected; deselect weight
            (x == selected_weight.x && y == selected_weight.y && deselect != false) ||
            // No kernel weight has been selected
            (x == undefined || y == undefined)
      ) {
            // Set kernel weight coordinates to undefined
            selected_weight.x = undefined;
            selected_weight.y = undefined;
      }
      // Check that corresponding weight exists in filter kernel
      else if (kernels[filter].kernel[x] != undefined) {
            if (kernels[filter].kernel[x][y] != undefined) {
                  selected_weight.x = x;
                  selected_weight.y = y;
            }
      }
      // Assign anchor coordinates to selected weight
      else {
            selected_weight.x = kernels[filter].anchor.x;
            selected_weight.y = kernels[filter].anchor.y;
      }

      // No weight is selected
      if (selected_weight.x == undefined || selected_weight.y == undefined) {
            // Hide kernel weight information when no weight is selected
            $("#kernel-weight-position").hide();
            $("#kernel-weight-container").hide();
            $("#kernel-weight-label").text("Edit Kernel");
            console.log("Kernel information updated");
      } else {
            id = selected_weight.x + "-" + selected_weight.y;
            $("#" + id).css("border-radius", "25%");

            $("#kernel-weight").val(kernels[filter].kernel[selected_weight.x][selected_weight.y]);
            $("#kernel-weight-container").addClass("is-dirty");

            // Display kernel weight information because a weight is selected
            $("#kernel-weight-position").show();
            $("#kernel-weight-container").show();
            $("#kernel-weight-label").text("Edit Kernel Weights");

            $("#kernel-weight-container.mdl-textfield__label").text("Kernel weight at " + selected_weight.x + ", " + selected_weight.y);
            // Display kernel weight coordinates
            $("#kernel-weight-position").text("(" + selected_weight.x + ", " + selected_weight.y + ")");
            console.log("Kernel weight information updated");
      }
}

// Find a kernel given its name
const find_kernel = function(kernel_name) {
      return kernels.find(x => x.name == kernel_name);
}

// Randomize values of custom kernel
const randomize = function() {
      // Get index of custom kernel
      custom = kernels.findIndex(x => x.name == "Custom");
      kernels[custom].kernel = clone(kernels[filter].kernel);
      // Loop through rows of the kernel
      for (var p = 0; p < kernels[custom].kernel.length; p++) {
            // Loop through weights in each row of kernel
            for (var q = 0; q < kernels[custom].kernel[p].length; q++) {
                  // Set weight to a random value between -3 and 3 (not inclusive), rounded to 1 decimal place
                  kernels[custom].kernel[p][q] = round(Math.random() * 6 - 3, 1);
            }
      }
      // Reset kernel factor to 1
      kernels[custom].factor = 1;
      // Apply custom filter kernel to image
      set_filter(custom);
      console.log("Kernel weight values randomized", kernels[custom]);
}

const download_canvas = function(canvas) {
      var data = canvas.toDataURL("image/png");
      download(data, "image.png", "image/png");
}

// Change resolution of images
const set_resolution = function(func) {
      // Get resolution from slider element
      var resolution = $("input#resolution")[0].value;

      // Update resolution indicator text
      $("p#resolution-display").text("Resolution - " + resolution + " pixels");
      // Update resolution tooltip with area of image
      $("#resolution-tooltip").text("Resolution set to " + resolution + " pixels by " + resolution + " pixels, for a total image area of " + (resolution ** 2) + " square pixels.");
      console.log("Resolution information updated", $("#resolution-tooltip")[0]);

      canvas_width = resolution;
      canvas_height = resolution;
      // Set input canvas width and height
      input_canvas.width = canvas_width;
      input_canvas.height = canvas_height;
      // Set output canvas width and height
      output_canvas.width = canvas_width;
      output_canvas.height = canvas_height;
      load_image({
            callback: func
      });
      console.log("Image resolution updated");
}

// Sample images to load by default when the program is opened (flowers)
var images = [
      "https://i.imgur.com/svViHqm.jpg",
      "https://i.imgur.com/uAhjMNd.jpg",
      "https://i.imgur.com/u5OUfBF.jpg",
      "https://i.imgur.com/PT3Nh7B.jpg",
      "https://i.imgur.com/EtXIdFP.jpg"
];

var saved_url;
// Undo function for snackbar action button
var undo = function(event) {
      // Replace stored image onto canvas
      load_image({
            url: saved_url,
            // Apply current filter to image
            callback: set_filter
      });
      display_snackbar("Action undone.", 2.5);
      console.log("Image load undone. Saved URL loaded", saved_url);
};
// Display a snackbar notification given a message string
const display_snackbar = function(message, time) {
      var data = {
            "message": message,
            "timeout": (time * 1000),
            "actionHandler": undo,
            "actionText": "Undo"
      };
      var snackbarContainer = $("#snackbar");
      snackbarContainer[0].MaterialSnackbar.showSnackbar(data);
}
$("dialog#load-image-url .confirm").click(
      () => {
            load_image({
                  url: $("dialog#load-image-url input")[0].value,
                  callback: set_filter
            });
            display_snackbar("Image loaded.", 5);
      }
);
$("#save-input").click(
      () => download_canvas($("canvas#input")[0])
);
$("#save-output").click(
      () => download_canvas($("canvas#output")[0])
);

// Adapted from https://stackoverflow.com/a/22369599
const read_file = function() {
      // Get file from file upload element
      var file = $("input#load-image-upload")[0].files[0];
      // Create new FileReader object
      var reader = new FileReader();

      // Set function to execute when file has been read
      reader.onloadend = function() {
            // Display image upload confirmation snackbar message
            display_snackbar("Image uploaded: " + file.name);
            // Load image to canvas and apply convolutional filter
            load_image({
                  url: reader.result,
                  callback: set_filter
            });
      }

      // Check if a file has been uploaded
      if (file) {
            // Read image data as a data URL
            reader.readAsDataURL(file);
      }
      console.log("Image file information read", file);
}

const update_filters = function() {
      $("ul#kernels").empty();
      // Loop through each kernel and add it to the dropdown menu
      for (var j = 0; j < kernels.length; j++) {
            // Create new list item element
            var item = $("<li class='mdl-menu__item'></li>");
            // Set name of list item to match kernel
            item.text(kernels[j].name);
            // Set onclick function for list item
            item.attr("onclick", "set_filter(" + j + ")");
            // Add list item to dropdown
            $("ul#kernels").append(item);
      }
}

// Apply a filter kernel to the currently loadked image and display the result on the canvas
const set_filter = function(kernel_id) {
      var iterations_field = $("input#repeat-filter")[0];
      if (iterations_field.value == undefined || iterations_field.value == "") {
            iterations = 1;
      } else if (parseInt(iterations_field.value) < 1 || parseInt(iterations_field.value) > 100) {
            //  || /-?[0-9]*(\.[0-9]+)?/.test(iterations_field.value) == false
            iterations_field.value = 1;
            iterations = parseInt(iterations_field.value);
      } else {
            iterations = parseInt(iterations_field.value);
      }

      // Check to see if a filter kernel ID has been provided
      if (kernel_id != undefined) {
            // Set the filter to the provided filter kernel ID
            filter = kernel_id;
            // If a filter was not provided, use the currently set kernel
      }

      // Display filter kernel visualization
      // Clear HTML of visualization <div>
      $("#kernel-vis").empty();
      for (var k = 0; k < kernels[filter].kernel.length; k++) {
            // Create row div element
            var row = $("<div></div>");
            // Add row css class to row element
            row.addClass("row");
            row.css("height", Math.round((100 / kernels[filter].kernel.length) - 2) + "%");
            for (var l = 0; l < kernels[filter].kernel[k].length; l++) {
                  // Abbreviations
                  var kernel = kernels[filter].kernel;
                  var weight = kernel[k][l];

                  var block = $("<button>" + weight + "</button>");
                  block.css("min-width", Math.round((100 / kernels[filter].kernel[k].length) - 2) + "%");
                  block.attr("id", k + "-" + l);

                  // Get maximum weight value of filter kernel
                  // https://stackoverflow.com/a/39342975
                  var maxRow = kernel.map(function(row) {
                        return Math.max.apply(Math, row);
                  });
                  var max = Math.max.apply(null, maxRow);

                  // Get minimum weight value
                  var minRow = kernel.map(function(row) {
                        return Math.min.apply(Math, row);
                  });
                  var min = Math.min.apply(null, maxRow);

                  // Map filter kernel weight range to color saturation range
                  var saturation = map(weight, min, max, 25, 75);
                  if (isNaN(saturation)) {
                        saturation = 50;
                  }
                  // Create color string in hsla format
                  var color = "hsla(200, 100%, " + saturation + "%, 1)";
                  // Set background color of block
                  block.css("background-color", color);
                  // Add relevant css classes to block
                  block.addClass("block mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored");
                  block.attr("onclick", "select_weight(" + k + "," + l + ");");
                  // Add block to row
                  row.append(block);
            }
            // Add row element to visualization div element
            $("#kernel-vis").append(row);
      }

      // if (selected_weight.x != undefined && selected_weight.y != undefined) {
      select_weight(selected_weight.x, selected_weight.y, false);
      // }

      // Update filter select dropdown button to display name of current filter
      $("button#select-filter").html(kernels[filter].name + '<i class="material-icons">arrow_drop_down</i>');

      // Update "apply filter" button to reflect currently selected filter kernel and filter repetitions
      var button_text = "Apply " + kernels[filter].name;
      if (iterations > 1) {
            button_text += " " + iterations + " times";
      }
      $("button#apply-filter").text(button_text);

      // Update all MDL components in DOM
      componentHandler.upgradeDom();

      if (automatic_update) {
            apply_filter();
      }
}

// Apply convolutional filter to image and display image on output canvas
const apply_filter = function() {
      // Get image data from canvas
      var canvas_data = input_context.getImageData(0, 0, canvas_width, canvas_height);
      // Run convolution operation on image data from canvas with given kernel
      var processed_data = canvas_data;
      for (var o = 0; o < iterations; o++) {
            processed_data = convolute(processed_data, kernels[filter]);
      }
      // Draw processed image data to canvas
      output_context.putImageData(processed_data, 0, 0);
}

// Load an image into memory using a URL and draw it to the canvas
const load_image = function(config) {
      // Store image URL in saved_url in case the user undoes the image load operation
      saved_url = image_url;
      if (config) {
            if (config.url) {
                  image_url = config.url;
            }
      }
      // Create a new image object
      var image = new Image();
      // Set onload function for image to execute once the image has loaded
      image.onload = function() {
            // Draw image to canvas
            input_context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas_width, canvas_height);
            // Execute callback function
            if (config) {
                  if (config.callback) {
                        config.callback();
                  }
            }
      };
      // Set crossOrigin property of image object to "Anonymous" to allow loading images from other domains (when permitted)
      image.crossOrigin = "Anonymous";
      // Set image source to url
      image.src = image_url;

      console.log("Image loaded", image_url);
}

var load_image_url_dialog = $("dialog#load-image-url")[0];
$("button#load-image-url").click(() => {
      $("dialog#load-image-url input")[0].value = "";
      load_image_url_dialog.showModal();
});
$("dialog#load-image-url button").click(() => load_image_url_dialog.close());

// Spread 1D image vector to a 3D array given width, height, and number of color channels
const spread = function(image_data, width, height, channels) {
      // Create variable to store processed image data in
      var spread_data = [];
      // Loop through each row (y) of image
      for (var h = 0; h < height; h++) {
            // Create new array inside of main array to store color channels of pixel
            spread_data.push([]);
            // Loop through each pixel (x) in row of image
            for (var i = 0; i < width; i++) {
                  // Generate index of pixel in original image data array from x and y position of pixel, and width and color channels of image
                  var index = ((h * width) + i) * channels;
                  // Add pixel data to spread array
                  spread_data[h].push(
                        // Convert data from Uint8ClampedArray to standard Array
                        Array.prototype.slice.call(
                              // Slice color channels of pixel from main array using index value
                              image_data.slice(
                                    index, index + channels
                              )
                        )
                  );
            }
      }
      console.log("Image data spread", image_data, spread_data);
      // Return 3D image data array
      return spread_data;
}

// Apply convolution operation to image data given image and filter kernel
const convolute = function(image, kernel) {
      // Convert 1-dimensional canvas pixel data array into a 3-dimensional array using spread()
      var canvas_data = spread(image.data, canvas_width, canvas_height, 4);
      // Create a new array, processed_data, as a clone of canvas_data to store output image
      var processed_data = JSON.parse(JSON.stringify(canvas_data));

      // Current pixel x
      for (var a = 0; a < canvas_data.length; a++) {
            // Current pixel y
            for (var g = 0; g < canvas_data[a].length; g++) {
                  // Current color channel
                  for (var e = 0; e < 4; e++) {
                        processed_data[a][g][e] = 0;
                        // Current kernel x
                        for (var b = 0; b < kernel.kernel.length; b++) {
                              // Current kernel y
                              for (var c = 0; c < kernel.kernel[b].length; c++) {
                                    // Where the magic happens
                                    // Check if pixel exists
                                    var pix;
                                    // If it does not, set placeholder value to 0
                                    if (canvas_data[x] == undefined || canvas_data[x][y] == undefined) {
                                          pix = 0;
                                    }
                                    // If it does, use actual pixel value
                                    else {
                                          pix = canvas_data[x][y][e];
                                    }
                                    // Calculate x coordinate of pixel relative to anchor pixel; original coordinate + filter kernel offset - relative kernel anchor position
                                    var x = a + b - kernel.anchor.x;
                                    // Calculate y coordinate of pixel
                                    var y = g + c - kernel.anchor.y;
                                    // Multiply pixel value by kernel value, then add to anchor pixel value
                                    processed_data[a][g][e] += kernel.kernel[b][c] * pix;
                              }
                        }
                        // Multiply pixel color channel by kernel factor
                        processed_data[a][g][e] *= kernel.factor;
                  }
            }
      }
      // Flatted processed image data into a 1-dimensional array and convert to a Uint8ClampedArray so that it can be made into an ImageData object
      processed_data = new Uint8ClampedArray(processed_data.flat().flat());
      // Create new ImageData object from processed image data
      processed_data = new ImageData(processed_data, canvas_width, canvas_height);
      console.log("Image convolution operation complete", processed_data);
      // Return filtered image data as ImageData object
      return processed_data;
}

const resize = function() {
      // https://stackoverflow.com/a/5445536
      var cw = $('#kernel-vis').width();
      $('#kernel-vis').css({
            'height': cw + 'px'
      });
      console.log("Elements resized");
}

console.log("script.js loaded");