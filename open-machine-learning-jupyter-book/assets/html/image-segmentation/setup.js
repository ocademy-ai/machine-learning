// setup.js


var dialogs = $("dialog");
for (var p = 0; p < dialogs.length; p++) {
      dialogPolyfill.registerDialog(dialogs[p]);
}

update_filters();

set_resolution(set_filter);
// Load random image and apply convolutional filter
load_image({
      // Select a random image from the list of demo images
      url: random_image = images[Math.floor(Math.random() * images.length)],
      // After loading image, apply sharpen filter
      callback: () => set_filter(1)
});

// Update element dimensions when window is resized
$(window).resize(resize);
// Or when page is loaded
$(window).ready(resize);

console.log("setup.js loaded");