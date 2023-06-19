// kernels.js


var kernels = [{
            "name": "Identity",
            "kernel": [
                  [0, 0, 0],
                  [0, 1, 0],
                  [0, 0, 0]
            ]
      },
      {
            "name": "Sharpen",
            "kernel": [
                  [0, -1, 0],
                  [-1, 5, -1],
                  [0, -1, 0]
            ]
      },
      {
            "name": "Box blur",
            "factor": 1 / 9,
            "kernel": [
                  [1, 1, 1],
                  [1, 1, 1],
                  [1, 1, 1]
            ]
      },
      {
            "name": "Gaussian blur (3 by 3)",
            "factor": 1 / 16,
            "kernel": [
                  [1, 2, 1],
                  [2, 4, 2],
                  [1, 2, 1]
            ]
      },
      {
            "name": "Gaussian blur (5 by 5)",
            "factor": 1 / 256,
            "kernel": [
                  [1, 4, 6, 4, 1],
                  [4, 16, 24, 16, 4],
                  [6, 24, 36, 24, 6],
                  [4, 16, 24, 16, 4],
                  [1, 4, 6, 4, 1]
            ]
      },
      {
            "name": "Unsharp Masking",
            "factor": -1 / 256,
            "kernel": [
                  [1, 4, 6, 4, 1],
                  [4, 16, 24, 16, 4],
                  [6, 24, -476, 24, 6],
                  [4, 16, 24, 16, 4],
                  [1, 4, 6, 4, 1]
            ]
      },
      {
            "name": "Custom",
            "kernel": [
                  [0, 0, 0],
                  [0, 1, 0],
                  [0, 0, 0]
            ]
      }
];

const find_anchor = function(kernel) {
      var anchor = {
            "x": Math.floor(kernel.kernel[Math.floor(kernel.kernel.length / 2)].length / 2),
            "y": Math.floor(kernel.kernel.length / 2)
      };
      console.log("Anchor of " + kernel.name + " filter kernel calculated: (" + anchor.x + ", " + anchor.y + ")", anchor);
      return anchor;
}

// Prepare filter kernels for use in image convolution operations; fill in missing properties
kernels.forEach(
      (kernel) => {
            // If kernel factor does not exist, set it to 1
            if (!kernel.factor) {
                  kernel.factor = 1;
            }

            // If kernel anchor coordinates are not listed, calculate them
            if (!kernel.anchor) {
                  kernel.anchor = find_anchor(kernel);
            }
      }
);

console.log("kernels.js loaded");