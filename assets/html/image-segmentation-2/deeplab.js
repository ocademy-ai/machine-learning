/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tensorflow/tfjs-converter'), require('@tensorflow/tfjs-core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tensorflow/tfjs-converter', '@tensorflow/tfjs-core'], factory) :
    (global = global || self, factory(global.deeplab = {}, global.tf, global.tf));
}(this, function (exports, tfconv, tf) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var config = {
        BASE_PATH: 'https://tfhub.dev/tensorflow/tfjs-model/deeplab',
        CROP_SIZE: 513,
        COLORMAPS: {
            ADE20K: [
                [0, 0, 0], [120, 120, 120], [180, 120, 120], [6, 230, 230],
                [80, 50, 50], [4, 200, 3], [120, 120, 80], [140, 140, 140],
                [204, 5, 255], [230, 230, 230], [4, 250, 7], [224, 5, 255],
                [235, 255, 7], [150, 5, 61], [120, 120, 70], [8, 255, 51],
                [255, 6, 82], [143, 255, 140], [204, 255, 4], [255, 51, 7],
                [204, 70, 3], [0, 102, 200], [61, 230, 250], [255, 6, 51],
                [11, 102, 255], [255, 7, 71], [255, 9, 224], [9, 7, 230],
                [220, 220, 220], [255, 9, 92], [112, 9, 255], [8, 255, 214],
                [7, 255, 224], [255, 184, 6], [10, 255, 71], [255, 41, 10],
                [7, 255, 255], [224, 255, 8], [102, 8, 255], [255, 61, 6],
                [255, 194, 7], [255, 122, 8], [0, 255, 20], [255, 8, 41],
                [255, 5, 153], [6, 51, 255], [235, 12, 255], [160, 150, 20],
                [0, 163, 255], [140, 140, 140], [250, 10, 15], [20, 255, 0],
                [31, 255, 0], [255, 31, 0], [255, 224, 0], [153, 255, 0],
                [0, 0, 255], [255, 71, 0], [0, 235, 255], [0, 173, 255],
                [31, 0, 255], [11, 200, 200], [255, 82, 0], [0, 255, 245],
                [0, 61, 255], [0, 255, 112], [0, 255, 133], [255, 0, 0],
                [255, 163, 0], [255, 102, 0], [194, 255, 0], [0, 143, 255],
                [51, 255, 0], [0, 82, 255], [0, 255, 41], [0, 255, 173],
                [10, 0, 255], [173, 255, 0], [0, 255, 153], [255, 92, 0],
                [255, 0, 255], [255, 0, 245], [255, 0, 102], [255, 173, 0],
                [255, 0, 20], [255, 184, 184], [0, 31, 255], [0, 255, 61],
                [0, 71, 255], [255, 0, 204], [0, 255, 194], [0, 255, 82],
                [0, 10, 255], [0, 112, 255], [51, 0, 255], [0, 194, 255],
                [0, 122, 255], [0, 255, 163], [255, 153, 0], [0, 255, 10],
                [255, 112, 0], [143, 255, 0], [82, 0, 255], [163, 255, 0],
                [255, 235, 0], [8, 184, 170], [133, 0, 255], [0, 255, 92],
                [184, 0, 255], [255, 0, 31], [0, 184, 255], [0, 214, 255],
                [255, 0, 112], [92, 255, 0], [0, 224, 255], [112, 224, 255],
                [70, 184, 160], [163, 0, 255], [153, 0, 255], [71, 255, 0],
                [255, 0, 163], [255, 204, 0], [255, 0, 143], [0, 255, 235],
                [133, 255, 0], [255, 0, 235], [245, 0, 255], [255, 0, 122],
                [255, 245, 0], [10, 190, 212], [214, 255, 0], [0, 204, 255],
                [20, 0, 255], [255, 255, 0], [0, 153, 255], [0, 41, 255],
                [0, 255, 204], [41, 0, 255], [41, 255, 0], [173, 0, 255],
                [0, 245, 255], [71, 0, 255], [122, 0, 255], [0, 255, 184],
                [0, 92, 255], [184, 255, 0], [0, 133, 255], [255, 214, 0],
                [25, 194, 194], [102, 255, 0], [92, 0, 255],
            ],
            CITYSCAPES: [
                [128, 64, 128], [244, 35, 232], [70, 70, 70], [102, 102, 156],
                [190, 153, 153], [153, 153, 153], [250, 170, 30], [220, 220, 0],
                [107, 142, 35], [152, 251, 152], [70, 130, 180], [220, 20, 60],
                [255, 0, 0], [0, 0, 142], [0, 0, 70], [0, 60, 100],
                [0, 80, 100], [0, 0, 230], [119, 11, 32],
            ],
            PASCAL: [
                [0, 0, 0], [128, 0, 0], [0, 128, 0], [128, 128, 0],
                [0, 0, 128], [128, 0, 128], [0, 128, 128], [128, 128, 128],
                [64, 0, 0], [192, 0, 0], [64, 128, 0], [192, 128, 0],
                [64, 0, 128], [192, 0, 128], [64, 128, 128], [192, 128, 128],
                [0, 64, 0], [128, 64, 0], [0, 192, 0], [128, 192, 0],
                [0, 64, 128], [128, 64, 128], [0, 192, 128], [128, 192, 128],
                [64, 64, 0], [192, 64, 0], [64, 192, 0], [192, 192, 0],
                [64, 64, 128], [192, 64, 128], [64, 192, 128], [192, 192, 128],
                [0, 0, 64], [128, 0, 64], [0, 128, 64], [128, 128, 64],
                [0, 0, 192], [128, 0, 192], [0, 128, 192], [128, 128, 192],
                [64, 0, 64], [192, 0, 64], [64, 128, 64], [192, 128, 64],
                [64, 0, 192], [192, 0, 192], [64, 128, 192], [192, 128, 192],
                [0, 64, 64], [128, 64, 64], [0, 192, 64], [128, 192, 64],
                [0, 64, 192], [128, 64, 192], [0, 192, 192], [128, 192, 192],
                [64, 64, 64], [192, 64, 64], [64, 192, 64], [192, 192, 64],
                [64, 64, 192], [192, 64, 192], [64, 192, 192], [192, 192, 192],
                [32, 0, 0], [160, 0, 0], [32, 128, 0], [160, 128, 0],
                [32, 0, 128], [160, 0, 128], [32, 128, 128], [160, 128, 128],
                [96, 0, 0], [224, 0, 0], [96, 128, 0], [224, 128, 0],
                [96, 0, 128], [224, 0, 128], [96, 128, 128], [224, 128, 128],
                [32, 64, 0], [160, 64, 0], [32, 192, 0], [160, 192, 0],
                [32, 64, 128], [160, 64, 128], [32, 192, 128], [160, 192, 128],
                [96, 64, 0], [224, 64, 0], [96, 192, 0], [224, 192, 0],
                [96, 64, 128], [224, 64, 128], [96, 192, 128], [224, 192, 128],
                [32, 0, 64], [160, 0, 64], [32, 128, 64], [160, 128, 64],
                [32, 0, 192], [160, 0, 192], [32, 128, 192], [160, 128, 192],
                [96, 0, 64], [224, 0, 64], [96, 128, 64], [224, 128, 64],
                [96, 0, 192], [224, 0, 192], [96, 128, 192], [224, 128, 192],
                [32, 64, 64], [160, 64, 64], [32, 192, 64], [160, 192, 64],
                [32, 64, 192], [160, 64, 192], [32, 192, 192], [160, 192, 192],
                [96, 64, 64], [224, 64, 64], [96, 192, 64], [224, 192, 64],
                [96, 64, 192], [224, 64, 192], [96, 192, 192], [224, 192, 192],
                [0, 32, 0], [128, 32, 0], [0, 160, 0], [128, 160, 0],
                [0, 32, 128], [128, 32, 128], [0, 160, 128], [128, 160, 128],
                [64, 32, 0], [192, 32, 0], [64, 160, 0], [192, 160, 0],
                [64, 32, 128], [192, 32, 128], [64, 160, 128], [192, 160, 128],
                [0, 96, 0], [128, 96, 0], [0, 224, 0], [128, 224, 0],
                [0, 96, 128], [128, 96, 128], [0, 224, 128], [128, 224, 128],
                [64, 96, 0], [192, 96, 0], [64, 224, 0], [192, 224, 0],
                [64, 96, 128], [192, 96, 128], [64, 224, 128], [192, 224, 128],
                [0, 32, 64], [128, 32, 64], [0, 160, 64], [128, 160, 64],
                [0, 32, 192], [128, 32, 192], [0, 160, 192], [128, 160, 192],
                [64, 32, 64], [192, 32, 64], [64, 160, 64], [192, 160, 64],
                [64, 32, 192], [192, 32, 192], [64, 160, 192], [192, 160, 192],
                [0, 96, 64], [128, 96, 64], [0, 224, 64], [128, 224, 64],
                [0, 96, 192], [128, 96, 192], [0, 224, 192], [128, 224, 192],
                [64, 96, 64], [192, 96, 64], [64, 224, 64], [192, 224, 64],
                [64, 96, 192], [192, 96, 192], [64, 224, 192], [192, 224, 192],
                [32, 32, 0], [160, 32, 0], [32, 160, 0], [160, 160, 0],
                [32, 32, 128], [160, 32, 128], [32, 160, 128], [160, 160, 128],
                [96, 32, 0], [224, 32, 0], [96, 160, 0], [224, 160, 0],
                [96, 32, 128], [224, 32, 128], [96, 160, 128], [224, 160, 128],
                [32, 96, 0], [160, 96, 0], [32, 224, 0], [160, 224, 0],
                [32, 96, 128], [160, 96, 128], [32, 224, 128], [160, 224, 128],
                [96, 96, 0], [224, 96, 0], [96, 224, 0], [224, 224, 0],
                [96, 96, 128], [224, 96, 128], [96, 224, 128], [224, 224, 128],
                [32, 32, 64], [160, 32, 64], [32, 160, 64], [160, 160, 64],
                [32, 32, 192], [160, 32, 192], [32, 160, 192], [160, 160, 192],
                [96, 32, 64], [224, 32, 64], [96, 160, 64], [224, 160, 64],
                [96, 32, 192], [224, 32, 192], [96, 160, 192], [224, 160, 192],
                [32, 96, 64], [160, 96, 64], [32, 224, 64], [160, 224, 64],
                [32, 96, 192], [160, 96, 192], [32, 224, 192], [160, 224, 192],
                [96, 96, 64], [224, 96, 64], [96, 224, 64], [224, 224, 64],
                [96, 96, 192], [224, 96, 192], [96, 224, 192], [224, 224, 192],
            ]
        },
        DATASET_MAX_ENTRIES: {
            PASCAL: 256,
            CITYSCAPES: 256,
            ADE20K: 151,
        },
        LABELS: {
            PASCAL: [
                'background', 'aeroplane', 'bicycle', 'bird', 'boat',
                'bottle', 'bus', 'car', 'cat', 'chair',
                'cow', 'dining table', 'dog', 'horse', 'motorbike',
                'person', 'potted plant', 'sheep', 'sofa', 'train',
                'TV',
            ],
            CITYSCAPES: [
                'road', 'sidewalk', 'building', 'wall', 'fence',
                'pole', 'traffic light', 'traffic sign', 'vegetation', 'terrain',
                'sky', 'person', 'rider', 'car', 'truck',
                'bus', 'train', 'motorcycle', 'bicycle',
            ],
            ADE20K: [
                'background', 'wall', 'building', 'sky', 'floor',
                'tree', 'ceiling', 'road', 'bed', 'windowpane',
                'grass', 'cabinet', 'sidewalk', 'person', 'earth',
                'door', 'table', 'mountain', 'plant', 'curtain',
                'chair', 'car', 'water', 'painting', 'sofa',
                'shelf', 'house', 'sea', 'mirror', 'rug',
                'field', 'armchair', 'seat', 'fence', 'desk',
                'rock', 'wardrobe', 'lamp', 'bathtub', 'railing',
                'cushion', 'base', 'box', 'column', 'signboard',
                'chest', 'counter', 'sand', 'sink', 'skyscraper',
                'fireplace', 'refrigerator', 'grandstand', 'path', 'stairs',
                'runway', 'case', 'pool', 'pillow', 'screen',
                'stairway', 'river', 'bridge', 'bookcase', 'blind',
                'coffee', 'toilet', 'flower', 'book', 'hill',
                'bench', 'countertop', 'stove', 'palm', 'kitchen',
                'computer', 'swivel', 'boat', 'bar', 'arcade',
                'hovel', 'bus', 'towel', 'light', 'truck',
                'tower', 'chandelier', 'awning', 'streetlight', 'booth',
                'television', 'airplane', 'dirt', 'apparel', 'pole',
                'land', 'bannister', 'escalator', 'ottoman', 'bottle',
                'buffet', 'poster', 'stage', 'van', 'ship',
                'fountain', 'conveyer', 'canopy', 'washer', 'plaything',
                'swimming', 'stool', 'barrel', 'basket', 'waterfall',
                'tent', 'bag', 'minibike', 'cradle', 'oven',
                'ball', 'food', 'step', 'tank', 'trade',
                'microwave', 'pot', 'animal', 'bicycle', 'lake',
                'dishwasher', 'screen', 'blanket', 'sculpture', 'hood',
                'sconce', 'vase', 'traffic', 'tray', 'ashcan',
                'fan', 'pier', 'screen', 'plate', 'monitor',
                'bulletin', 'shower', 'radiator', 'glass', 'clock',
                'flag',
            ],
        },
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    /**
     * Returns
     *
     * @param base  :: `ModelArchitecture`
     *
     * The type of model to load (either `pascal`, `cityscapes` or `ade20k`).
     *
     * @param quantizationBytes (optional) :: `QuantizationBytes`
     *
     * The degree to which weights are quantized (either 1, 2 or 4).
     * Setting this attribute to 1 or 2 will load the model with int32 and
     * float32 compressed to 1 or 2 bytes respectively.
     * Set it to 4 to disable quantization.
     *
     * @return The URL of the TF.js model
     */
    function getURL(base, quantizationBytes) {
        var TFHUB_BASE = "" + config['BASE_PATH'];
        var TFHUB_QUERY_PARAM = 'tfjs-format=file';
        var modelPath = quantizationBytes === 4 ?
            base + "/1/default/1/model.json" :
            base + "/1/quantized/" + quantizationBytes + "/1/model.json";
        // Example of url that should be generated.
        // https://tfhub.dev/tensorflow/tfjs-model/deeplab/pascal/1/default/1/model.json?tfjs-format=file
        return TFHUB_BASE + "/" + modelPath + "?" + TFHUB_QUERY_PARAM;
    }
    /**
     * @param base  :: `ModelArchitecture`
     *
     * The type of model to load (either `pascal`, `cityscapes` or `ade20k`).
     *
     * @return colormap :: `[number, number, number][]`
     *
     * The list of colors in RGB format, represented as arrays and corresponding
     * to labels.
     */
    function getColormap(base) {
        if (base === 'pascal') {
            return config['COLORMAPS']['PASCAL'];
        }
        else if (base === 'ade20k') {
            return config['COLORMAPS']['ADE20K'];
        }
        else if (base === 'cityscapes') {
            return config['COLORMAPS']['CITYSCAPES'];
        }
        throw new Error("SemanticSegmentation cannot be constructed " +
            ("with an invalid base model " + base + ". ") +
            "Try one of 'pascal', 'cityscapes' and 'ade20k'.");
    }
    /**
     * @param base  :: `ModelArchitecture`
     *
     * The type of model to load (either `pascal`, `cityscapes` or `ade20k`).
     *
     * @return labellingScheme :: `string[]`
     *
     * The list with verbal descriptions of labels
     */
    function getLabels(base) {
        if (base === 'pascal') {
            return config['LABELS']['PASCAL'];
        }
        else if (base === 'ade20k') {
            return config['LABELS']['ADE20K'];
        }
        else if (base === 'cityscapes') {
            return config['LABELS']['CITYSCAPES'];
        }
        throw new Error("SemanticSegmentation cannot be constructed " +
            ("with an invalid base model " + base + ". ") +
            "Try one of 'pascal', 'cityscapes' and 'ade20k'.");
    }
    /**
     * @param input  ::
     * `ImageData|HTMLImageElement|HTMLCanvasElement| HTMLVideoElement|tf.Tensor3D`
     *
     * The input image to prepare for segmentation.
     *
     * @return resizedInput :: `string[]`
     *
     * The input tensor to run through the model.
     */
    function toInputTensor(input) {
        return tf.tidy(function () {
            var image = input instanceof tf.Tensor ? input : tf.browser.fromPixels(input);
            var _a = image.shape, height = _a[0], width = _a[1];
            var resizeRatio = config['CROP_SIZE'] / Math.max(width, height);
            var targetHeight = Math.round(height * resizeRatio);
            var targetWidth = Math.round(width * resizeRatio);
            return tf.expandDims(tf.image.resizeBilinear(image, [targetHeight, targetWidth]));
        });
    }
    /**
     * @param colormap :: `Color[]`
     *
     * The list of colors in RGB format, represented as arrays and corresponding
     * to labels.
     *
     * @param labellingScheme :: `string[]`
     *
     * The list with verbal descriptions of labels
     *
     * @param rawSegmentationMap :: `tf.Tensor2D`
     *
     * The segmentation map of the image
     *
     * @param canvas (optional) :: `HTMLCanvasElement`
     *
     * The canvas where to draw the output
     *
     * @returns A promise of a `DeepLabOutput` object, with four attributes:
     *
     * - **legend** :: `{ [name: string]: [number, number, number] }`
     *
     *   The legend is a dictionary of objects recognized in the image and their
     *   colors in RGB format.
     *
     * - **height** :: `number`
     *
     *   The height of the returned segmentation map
     *
     * - **width** :: `number`
     *
     *   The width of the returned segmentation map
     *
     * - **segmentationMap** :: `Uint8ClampedArray`
     *
     *   The colored segmentation map as `Uint8ClampedArray` which can be
     *   fed into `ImageData` and mapped to a canvas.
     */
    function toSegmentationImage(colormap, labelNames, rawSegmentationMap, canvas) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, height, width, segmentationImageBuffer, mapData, labels, columnIndex, rowIndex, label, segmentationImageTensor, segmentationMap, legend, _i, _b, label;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (colormap.length < labelNames.length) {
                            throw new Error('The colormap must be expansive enough to encode each label. ' +
                                ("Aborting, since the given colormap has length " + colormap.length + ", ") +
                                ("but there are " + labelNames.length + " labels."));
                        }
                        _a = rawSegmentationMap.shape, height = _a[0], width = _a[1];
                        segmentationImageBuffer = tf.buffer([height, width, 3], 'int32');
                        return [4 /*yield*/, rawSegmentationMap.array()];
                    case 1:
                        mapData = _c.sent();
                        labels = new Set();
                        for (columnIndex = 0; columnIndex < height; ++columnIndex) {
                            for (rowIndex = 0; rowIndex < width; ++rowIndex) {
                                label = mapData[columnIndex][rowIndex];
                                labels.add(label);
                                segmentationImageBuffer.set(colormap[label][0], columnIndex, rowIndex, 0);
                                segmentationImageBuffer.set(colormap[label][1], columnIndex, rowIndex, 1);
                                segmentationImageBuffer.set(colormap[label][2], columnIndex, rowIndex, 2);
                            }
                        }
                        segmentationImageTensor = segmentationImageBuffer.toTensor();
                        return [4 /*yield*/, tf.browser.toPixels(segmentationImageTensor, canvas)];
                    case 2:
                        segmentationMap = _c.sent();
                        tf.dispose(segmentationImageTensor);
                        legend = {};
                        for (_i = 0, _b = Array.from(labels); _i < _b.length; _i++) {
                            label = _b[_i];
                            legend[labelNames[label]] = colormap[label];
                        }
                        return [2 /*return*/, { legend: legend, segmentationMap: segmentationMap }];
                }
            });
        });
    }

    /** @license See the LICENSE file. */
    // This code is auto-generated, do not modify this file!
    var version = '0.2.1';

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    /**
     * Initializes the DeepLab model and returns a `SemanticSegmentation` object.
     *
     * @param input ::
     *     `ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement`
     *
     *  The input image to feed through the network.
     *
     * @param config :: `ModelConfig`
     *
     * The configuration for the model with any of the following attributes:
     *
     *   * quantizationBytes (optional) :: `QuantizationBytes`
     *
     *      The degree to which weights are quantized (either 1, 2 or 4).
     *      Setting this attribute to 1 or 2 will load the model with int32 and
     *      float32 compressed to 1 or 2 bytes respectively.
     *      Set it to 4 to disable quantization.
     *
     *   * base (optional) :: `ModelArchitecture`
     *
     *      The type of model to load (either `pascal`, `cityscapes` or `ade20k`).
     *
     *   * modelUrl (optional) :: `string`
     *
     *      The URL from which to load the TF.js GraphModel JSON.
     *      Inferred from `base` and `quantizationBytes` if undefined.
     *
     * @return The initialized `SemanticSegmentation` object
     */
    function load(modelConfig) {
        if (modelConfig === void 0) { modelConfig = {
            base: 'pascal',
            quantizationBytes: 2
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var graphModel, deeplab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (tf == null) {
                            throw new Error("Cannot find TensorFlow.js." +
                                " If you are using a <script> tag, please " +
                                "also include @tensorflow/tfjs on the page before using this model.");
                        }
                        if (modelConfig.base) {
                            if (['pascal', 'cityscapes', 'ade20k'].indexOf(modelConfig.base) === -1) {
                                throw new Error("SemanticSegmentation cannot be constructed " +
                                    ("with an invalid base model " + modelConfig.base + ". ") +
                                    "Try one of 'pascal', 'cityscapes' and 'ade20k'.");
                            }
                            if ([1, 2, 4].indexOf(modelConfig.quantizationBytes) === -1) {
                                throw new Error("Only quantization to 1, 2 or 4 bytes is supported.");
                            }
                        }
                        else if (!modelConfig.modelUrl) {
                            throw new Error("SemanticSegmentation can be constructed either by passing " +
                                "the weights URL or one of the supported base model names from " +
                                "'pascal', 'cityscapes' and 'ade20k'," +
                                "together with the degree of quantization (either 1, 2 or 4)." +
                                "Aborting, since neither has been provided.");
                        }
                        return [4 /*yield*/, tfconv.loadGraphModel(modelConfig.modelUrl ||
                                getURL(modelConfig.base, modelConfig.quantizationBytes))];
                    case 1:
                        graphModel = _a.sent();
                        deeplab = new SemanticSegmentation(graphModel, modelConfig.base);
                        return [2 /*return*/, deeplab];
                }
            });
        });
    }
    var SemanticSegmentation = /** @class */ (function () {
        function SemanticSegmentation(graphModel, base) {
            this.model = graphModel;
            this.base = base;
        }
        /**
         * Segments an arbitrary image and generates a two-dimensional tensor with
         * class labels assigned to each cell of the grid overlayed on the image ( the
         * maximum number of cells on the side is fixed to 513).
         *
         * @param input ::
         *     `ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement`
         *
         * The input image to segment.
         *
         * @return rawSegmentationMap :: `tf.Tensor2D`
         *
         * The segmentation map of the image
         */
        SemanticSegmentation.prototype.predict = function (input) {
            var _this = this;
            return tf.tidy(function () {
                var data = tf.cast(toInputTensor(input), 'int32');
                return tf.squeeze(_this.model.execute(data));
            });
        };
        /**
         * Segments an arbitrary image and generates a two-dimensional tensor with
         * class labels assigned to each cell of the grid overlayed on the image ( the
         * maximum number of cells on the side is fixed to 513).
         *
         * @param image :: `ImageData | HTMLImageElement | HTMLCanvasElement |
         * HTMLVideoElement | tf.Tensor3D`;
         *
         *   The image to segment
         *
         * @param config (optional) The configuration object for the segmentation:
         *
         * - **config.canvas** (optional) :: `HTMLCanvasElement`
         *
         *   The canvas where to draw the output
         *
         * - **config.colormap** (optional) :: `[number, number, number][]`
         *
         *   The array of RGB colors corresponding to labels
         *
         * - **config.labels** (optional) :: `string[]`
         *
         *   The array of names corresponding to labels
         *
         *   By [default](./src/index.ts#L81), `colormap` and `labels` are set
         * according to the `base` model attribute passed during initialization.
         *
         * @returns A promise of a `DeepLabOutput` object, with four attributes:
         *
         * - **legend** :: `{ [name: string]: [number, number, number] }`
         *
         *   The legend is a dictionary of objects recognized in the image and their
         *   colors in RGB format.
         *
         * - **height** :: `number`
         *
         *   The height of the returned segmentation map
         *
         * - **width** :: `number`
         *
         *   The width of the returned segmentation map
         *
         * - **segmentationMap** :: `Uint8ClampedArray`
         *
         *   The colored segmentation map as `Uint8ClampedArray` which can be
         *   fed into `ImageData` and mapped to a canvas.
         */
        SemanticSegmentation.prototype.segment = function (input, config) {
            if (config === void 0) { config = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var colormap, labels, canvas, rawSegmentationMap, _a, height, width, _b, legend, segmentationMap;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!((config.colormap && config.labels) || this.base)) {
                                throw new Error("Calling the 'segment' method requires either the 'base'" +
                                    " attribute to be defined " +
                                    "(e.g. 'pascal', 'cityscapes' or'ade20k')," +
                                    " or 'colormap' and 'labels' options to be set. " +
                                    "Aborting, since neither has been provided.");
                            }
                            else if (!(config.colormap && config.labels)) {
                                config.colormap = getColormap(this.base);
                                config.labels = getLabels(this.base);
                            }
                            colormap = config.colormap, labels = config.labels, canvas = config.canvas;
                            rawSegmentationMap = tf.tidy(function () { return _this.predict(input); });
                            _a = rawSegmentationMap.shape, height = _a[0], width = _a[1];
                            return [4 /*yield*/, toSegmentationImage(colormap, labels, rawSegmentationMap, canvas)];
                        case 1:
                            _b = _c.sent(), legend = _b.legend, segmentationMap = _b.segmentationMap;
                            tf.dispose(rawSegmentationMap);
                            return [2 /*return*/, { legend: legend, height: height, width: width, segmentationMap: segmentationMap }];
                    }
                });
            });
        };
        /**
         * Dispose of the tensors allocated by the model.
         * You should call this when you are done with the model.
         */
        SemanticSegmentation.prototype.dispose = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.model) {
                        this.model.dispose();
                    }
                    return [2 /*return*/];
                });
            });
        };
        return SemanticSegmentation;
    }());

    exports.SemanticSegmentation = SemanticSegmentation;
    exports.getColormap = getColormap;
    exports.getLabels = getLabels;
    exports.getURL = getURL;
    exports.load = load;
    exports.toSegmentationImage = toSegmentationImage;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
