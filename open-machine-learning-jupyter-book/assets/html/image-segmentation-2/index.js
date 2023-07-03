let model, prediction;
const chooseFiles = document.getElementById('chooseFiles');
const modelNameSelect = document.getElementById("modelNameSelect");
const segmentImageButton = document.getElementById("segmentImage");
const removeSelectedObjectsButton = document.getElementById("removeSelectedObjects");
const restoreSelectedObjectsButton = document.getElementById("restoreSelectedObjects");
const loadModelButton = document.getElementById("loadModel");
const legendsDiv = document.getElementById("legends");
const imageWrapperDiv = document.getElementById("imgWrapper");
const legendLabel = document.getElementById("legendLabel");
const removeOrRestoreSelectedObjectsLabel = document.getElementById("removeOrRestoreSelectedObjectsLabel");

//File Input onchange event handler to handle the files uploaded by the user
chooseFiles.onchange = () => {
    
    //Get the reference to the image files chosen by the user
    const [file] = chooseFiles.files
    if (file) {
        //Remove the previously displayed image & output canvas
        while(imageWrapperDiv.firstChild) {
            imageWrapperDiv.removeChild(imageWrapperDiv.firstChild);
        }
        
        //Create a new image element to display the user uploaded image 
        image = new Image();

        //Set only the image width to display it to a specific image width
        image.width = "500";

        //Set the image source to that of the uploaded image file
        image.src = URL.createObjectURL(file);

        //Append the image element to imgWrapper div element
        imageWrapperDiv.appendChild(image);

        //Hide the legend label and displayed legends for any previous outputs
        legendLabel.style.visibility = "hidden";
        legendsDiv.style.visibility = "hidden";
        removeOrRestoreSelectedObjectsLabel.style.visibility = "hidden";
        removeSelectedObjectsButton.style.visibility = "hidden";
        restoreSelectedObjectsButton.style.visibility = "hidden";
    }
};

//Invoke predict() function on click of "Segment Image" button
segmentImageButton.onclick = predict;

//Invoke removeOrRestoreSelectedObjects() function on click of "Remove Selected Objects" button
removeSelectedObjectsButton.onclick = removeOrRestoreSelectedObjects;

//Invoke removeOrRestoreSelectedObjects() function on click of "Restore Selected Objects" button
restoreSelectedObjectsButton.onclick = removeOrRestoreSelectedObjects;

//Inline async function to be executed on click of "Load Model" button
loadModelButton.onclick = async () => {
    //Disable the "Segment Image" button as the model is not yet loaded
    segmentImageButton.disabled = true;
    updateModelLoadStatus("Model Loading...");

    //Get the selected model from the model's dropdown on the UI
    const modelName = modelNameSelect.options[modelNameSelect.selectedIndex].value;
    
    //Invoke async loadModel() function to load the model selected by user
    await loadModel(modelName);
    updateModelLoadStatus(modelName + " model loaded!");

    //Enable the "Segment Image" button
    segmentImageButton.disabled = false;
};

//Function to load the deeplab model based on user selection
async function loadModel(modelName) {
    //Load the deeplab model using the modelName passed in input. The quantizationBytes 
    //parameter refers to the degree to which weights are quantized. The possible options 
    //are 1, 2 or 4. Setting this parameter to 1 or 2 will load the model 
    //with int32 and float32 compressed to 1 or 2 bytes respectively. 
    //Setting it to 4 will disable quantization. 
    model = await deeplab.load({ "base": modelName, "quantizationBytes": 2 });
}

function updateModelLoadStatus(status) {
    document.getElementById("modelLoadedStatus").innerHTML = status;
}

//Function to perform the semantic image segmentation
async function predict() {
    //Perform the inference (segmentation) by passing the image to the model.segment() function
    prediction = await model.segment(image);

    //Pass the prediction output to renderPrediction() method to display the segmented image
    renderPrediction(prediction);
}

//Function to display the segmented image using the model's prediction output
function renderPrediction(prediction) {
    
    //Retrieve the objects from the output prediction object
    //Segmentation map contains the pixel wise color information (rgba) for the output image
    //Height and width are the output image's height and width
    //Legend contains the list of objects and their associated color in the output image
    const { legend, height, width, segmentationMap } = prediction;

    //Create a new ImageData using the pixel wise rgb color information of the output image
    const segmentationMapData = new ImageData(segmentationMap, width, height);
    
    //Create a new Canvas element to display the output image
    canvas = document.createElement('canvas');
    //Get the 2d context object from the canvas
    ctx = canvas.getContext('2d');

    //Set the canvas' width and height to that of the output image obtained from prediction
    canvas.width = width;
    canvas.height = height;

    //Display the image data created from the segmentationMap object
    ctx.putImageData(segmentationMapData, 0, 0);

    //The output image is slightly different from the original source image. 
    //So, update the source image size to match the output image size. This way, we can map 
    //the pixel wise information of the output image on the source image to do further processing.
    image.width = width;
    image.height = height;

    //Display the canvas
    displayCanvas(canvas);

    //Display the legends
    displayLegends(legend);
}

//Function to remove any objects from the image based on user selection on the legends
function removeOrRestoreSelectedObjects(e) {
    //Get the button object whose click event invoked this function
    let target = (e.target) ? e.target : e.srcElement;
    
    //Retrieve the objects from the output prediction object
    const { legend, height, width, segmentationMap } = prediction;
        
    //Create a new Canvas element to display the image after the objects are removed
    canvas = document.createElement('canvas');
    //Get the 2d context object from the canvas
    ctx = canvas.getContext('2d');
    //Set the canvas' width and height to that of the output image obtained from prediction
    canvas.width = width;
    canvas.height = height;
    //Draw the source image on the canvas
    ctx.drawImage(image, 0, 0, width, height);

    //Get the imageData object to get pixel wise information (rgba) of the source image displayed in the canvas 
    const imgData = ctx.getImageData(0, 0, width, height);

    //Set 0 (transparent) or 255 (visible) as alpha value based on remove or restore button click respectively
    const alphaValueToSet = (target.id == 'removeSelectedObjects') ? 0 : 255;
    
    //Loop through the segmentationMap object to get the rgba data for every pixel. 
    //Using this rgba information, we will match it against the rgb information of the selected object, 
    //to set the corresponding pixel's alpha value to 0 to make it invisible (transparent).
    for(let i = 0; i < segmentationMap.length; i += 4) {
        //Loop through each object to remove
        Object.keys(objectColors).forEach((objectColor) => {
            //Get the rgb color (represented in 1D array with 3 elements) 
            //to match against the rgb color data from segmentation map.
            let color = objectColors[objectColor];
            //Check if the pixel's rgb color matches with the object's rgb color.
            if(segmentationMap[i] == color[0] 
                && segmentationMap[i+1] == color[1] 
                && segmentationMap[i+2] == color[2]) {
                    //Set the alpha value of the pixel to 0
                    imgData.data[i+3] = alphaValueToSet;
            }
        });
    }

    //Display the processed image data on the canvas
    ctx.putImageData(imgData, 0, 0);

    //Display the canvas
    displayCanvas(canvas);
};

//Function to display the canvas
function displayCanvas(canvas) {
    //Remove any existing canvas in the imgWrapper div element
    if(imageWrapperDiv.childNodes.length > 1) {
        imageWrapperDiv.removeChild(imageWrapperDiv.childNodes[1]);
    }
    //Append the canvas obtained in input as a child to the imgWrapper div element
    imageWrapperDiv.appendChild(canvas);
}

//Function to display the legends data from the prediction output
function displayLegends(legendObj) {
    //Remove the legends displayed for any previous prediction output
    while(legendsDiv.firstChild) {
        legendsDiv.removeChild(legendsDiv.firstChild);
    }

    //Loop through the keys (each identified object in the prediction output) in the legend object
    Object.keys(legendObj).forEach((legend) => {
        //Get the rgb color information for each legend
        const [red, green, blue] = legendObj[legend];

        //Create a new span element for each identified object
        const span = document.createElement('span');
        //Set the span element's text to each of the object key
        span.innerHTML = legend;
        //Set the background color of the span element
        span.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        //Set other styles
        span.style.padding = '10px';
        span.style.marginRight = '10px';
        span.style.color = '#ffffff';
        //Set storeObjectName() as the function to be invoked on click of the span element
        span.onclick = storeObjectColor;

        //Append each of the span element to the legends div wrapper element
        legendsDiv.appendChild(span);
    });

    //Make the legend label and the legend wrapper visible
    legendLabel.style.visibility = "visible";
    legendsDiv.style.visibility = "visible";

    //Make the "Remove or Restore Selected Objects" label and button visible
    removeOrRestoreSelectedObjectsLabel.style.visibility = "visible";
    removeSelectedObjectsButton.style.visibility = "visible";
    restoreSelectedObjectsButton.style.visibility = "visible";  
}

//Object to hold the color of each legend
let objectColors = {};
//Function to store the color for each selected object
function storeObjectColor(e) {
    //Get the selected span from the user click event on any of the legend
    let target = (e.target) ? e.target : e.srcElement;
    
    //Get the legend name from the text of the span element
    let objectName = target.textContent;
    //Get the legend color from the background color of the span element
    let objectColor = window.getComputedStyle(target).backgroundColor;
    //Convert the obtained color to an number array
    objectColor = objectColor.replace('rgb(', '').replace(')', '').split(',').map(Number);
    //Set the legend name and its color in the objectColors object.
    objectColors[objectName] = objectColor;

    //Draw a border on the legend that is click to make it appear as selected
    target.style.border = "5px solid green";
}
