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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tensorflow/tfjs-core'), require('@tensorflow/tfjs-core/dist/ops/ops_for_converter')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tensorflow/tfjs-core', '@tensorflow/tfjs-core/dist/ops/ops_for_converter'], factory) :
    (global = global || self, factory(global.tf = global.tf || {}, global.tf, global.tf));
}(this, (function (exports, tfc, tfOps) { 'use strict';

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

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

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
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
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

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
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
     *
     * =============================================================================
     */
    /** DataType enum. */
    var DataType;
    (function (DataType) {
        DataType[DataType["DT_INVALID"] = 0] = "DT_INVALID";
        DataType[DataType["DT_FLOAT"] = 1] = "DT_FLOAT";
        DataType[DataType["DT_DOUBLE"] = 2] = "DT_DOUBLE";
        DataType[DataType["DT_INT32"] = 3] = "DT_INT32";
        DataType[DataType["DT_UINT8"] = 4] = "DT_UINT8";
        DataType[DataType["DT_INT16"] = 5] = "DT_INT16";
        DataType[DataType["DT_INT8"] = 6] = "DT_INT8";
        DataType[DataType["DT_STRING"] = 7] = "DT_STRING";
        DataType[DataType["DT_COMPLEX64"] = 8] = "DT_COMPLEX64";
        DataType[DataType["DT_INT64"] = 9] = "DT_INT64";
        DataType[DataType["DT_BOOL"] = 10] = "DT_BOOL";
        DataType[DataType["DT_QINT8"] = 11] = "DT_QINT8";
        DataType[DataType["DT_QUINT8"] = 12] = "DT_QUINT8";
        DataType[DataType["DT_QINT32"] = 13] = "DT_QINT32";
        DataType[DataType["DT_BFLOAT16"] = 14] = "DT_BFLOAT16";
        DataType[DataType["DT_FLOAT_REF"] = 101] = "DT_FLOAT_REF";
        DataType[DataType["DT_DOUBLE_REF"] = 102] = "DT_DOUBLE_REF";
        DataType[DataType["DT_INT32_REF"] = 103] = "DT_INT32_REF";
        DataType[DataType["DT_UINT8_REF"] = 104] = "DT_UINT8_REF";
        DataType[DataType["DT_INT16_REF"] = 105] = "DT_INT16_REF";
        DataType[DataType["DT_INT8_REF"] = 106] = "DT_INT8_REF";
        DataType[DataType["DT_STRING_REF"] = 107] = "DT_STRING_REF";
        DataType[DataType["DT_COMPLEX64_REF"] = 108] = "DT_COMPLEX64_REF";
        DataType[DataType["DT_INT64_REF"] = 109] = "DT_INT64_REF";
        DataType[DataType["DT_BOOL_REF"] = 110] = "DT_BOOL_REF";
        DataType[DataType["DT_QINT8_REF"] = 111] = "DT_QINT8_REF";
        DataType[DataType["DT_QUINT8_REF"] = 112] = "DT_QUINT8_REF";
        DataType[DataType["DT_QINT32_REF"] = 113] = "DT_QINT32_REF";
        DataType[DataType["DT_BFLOAT16_REF"] = 114] = "DT_BFLOAT16_REF";
    })(DataType || (DataType = {}));
    var SaverDef;
    (function (SaverDef) {
        /** CheckpointFormatVersion enum. */
        var CheckpointFormatVersion;
        (function (CheckpointFormatVersion) {
            CheckpointFormatVersion[CheckpointFormatVersion["LEGACY"] = 0] = "LEGACY";
            CheckpointFormatVersion[CheckpointFormatVersion["V1"] = 1] = "V1";
            CheckpointFormatVersion[CheckpointFormatVersion["V2"] = 2] = "V2";
        })(CheckpointFormatVersion = SaverDef.CheckpointFormatVersion || (SaverDef.CheckpointFormatVersion = {}));
    })(SaverDef || (SaverDef = {}));

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
    var CUSTOM_OPS = {};
    /**
     * Register an Op for graph model executor. This allow you to register
     * TensorFlow custom op or override existing op.
     *
     * Here is an example of registering a new MatMul Op.
     * ```js
     * const customMatmul = (node) =>
     *    tf.matMul(
     *        node.inputs[0], node.inputs[1],
     *        node.attrs['transpose_a'], node.attrs['transpose_b']);
     *
     * tf.registerOp('MatMul', customMatmul);
     * ```
     * The inputs and attrs of the node object is based on the TensorFlow op
     * registry.
     *
     * @param name The Tensorflow Op name.
     * @param opFunc An op function which is called with the current graph node
     * during execution and needs to return a tensor or a list of tensors. The node
     * has the following attributes:
     *    - attr: A map from attribute name to its value
     *    - inputs: A list of input tensors
     *
     * @doc {heading: 'Models', subheading: 'Op Registry'}
     */
    function registerOp(name, opFunc) {
        var opMapper = {
            tfOpName: name,
            category: 'custom',
            inputs: [],
            attrs: [],
            customExecutor: opFunc
        };
        CUSTOM_OPS[name] = opMapper;
    }
    /**
     * Retrieve the OpMapper object for the registered op.
     *
     * @param name The Tensorflow Op name.
     *
     * @doc {heading: 'Models', subheading: 'Op Registry'}
     */
    function getRegisteredOp(name) {
        return CUSTOM_OPS[name];
    }
    /**
     * Deregister the Op for graph model executor.
     *
     * @param name The Tensorflow Op name.
     *
     * @doc {heading: 'Models', subheading: 'Op Registry'}
     */
    function deregisterOp(name) {
        delete CUSTOM_OPS[name];
    }

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    function getParamValue(paramName, node, tensorMap, context, resourceManager) {
        var inputParam = node.inputParams[paramName];
        if (inputParam && inputParam.inputIndexStart !== undefined) {
            var start = inputParam.inputIndexStart;
            var end = inputParam.inputIndexEnd === 0 ?
                undefined :
                (inputParam.inputIndexEnd === undefined ? start + 1 :
                    inputParam.inputIndexEnd);
            if (inputParam.type === 'tensor') {
                return getTensor(node.inputNames[inputParam.inputIndexStart], tensorMap, context, resourceManager);
            }
            if (inputParam.type === 'tensors') {
                var inputs = node.inputNames.slice(start, end);
                return inputs.map(function (name) { return getTensor(name, tensorMap, context, resourceManager); });
            }
            var tensor = getTensor(node.inputNames.slice(start)[0], tensorMap, context, resourceManager);
            var data = tensor.dataSync();
            return inputParam.type === 'number' ?
                data[0] :
                tfc.util.toNestedArray(tensor.shape, data);
        }
        var attrParam = node.attrParams[paramName];
        return attrParam && attrParam.value;
    }
    /**
     * Retrieve the tensor from tensorsMap based on input name.
     * @param name Node input name
     * @param tensorsMap Tensors map keyed by the node
     * @param context contains tensors and information for running the current node.
     * @param resourceManager Optional. Contains global resources of the model.
     */
    function getTensor(name, tensorsMap, context, resourceManager) {
        var _a = __read(parseNodeName(name), 2), nodeName = _a[0], index = _a[1];
        if (resourceManager != null) {
            var tensor = resourceManager.getHashTableHandleByName(nodeName);
            if (tensor != null) {
                return tensor;
            }
        }
        var contextId = context.currentContextIds.find(function (contextId) {
            return !!tensorsMap[getNodeNameWithContextId(nodeName, contextId)];
        });
        return contextId !== undefined ?
            tensorsMap[getNodeNameWithContextId(nodeName, contextId)][index] :
            undefined;
    }
    /**
     * Retrieve the tensors based on input name for current context.
     * @param name Node input name
     * @param tensorsMap Tensors map keyed by the node
     */
    function getTensorsForCurrentContenxt(name, tensorsMap, context) {
        return tensorsMap[getNodeNameWithContextId(name, context.currentContextId)];
    }
    /**
     * Returns the node name and index from the Node input name.
     * @param inputName The input name of the node, in format of
     * node_name:output_index, i.e. MatMul:0, if the output_index is not set, it is
     * default to 0.
     */
    function getNodeNameAndIndex(inputName, context) {
        var _a = __read(parseNodeName(inputName), 2), nodeName = _a[0], index = _a[1];
        return [
            getNodeNameWithContextId(nodeName, context && context.currentContextId),
            index
        ];
    }
    function getNodeNameWithContextId(name, contextId) {
        return !!contextId ? name + "-" + contextId : name;
    }
    function parseNodeName(name) {
        var parts = name.split(':');
        if (parts.length === 1) {
            return [name, 0];
        }
        var nodeName = parts[0];
        return [nodeName, Number(parts[parts.length - 1])];
    }
    function getPadding(node, tensorMap, context) {
        var pad = getParamValue('pad', node, tensorMap, context);
        if (pad === 'explicit') {
            // This is 1d array, we need to convert it to 2d array
            pad = getParamValue('explicitPaddings', node, tensorMap, context);
            var explicitPadding = [[0, 0], [0, 0], [0, 0], [0, 0]];
            for (var i = 0; i < 4; i++) {
                explicitPadding[i][0] = pad[i * 2];
                explicitPadding[i][1] = pad[i * 2 + 1];
            }
            return explicitPadding;
        }
        return pad;
    }
    /**
     *  Reuse the tensor if it is marked as keep, otherwise clone the tensor to
     *  avoid disposal. This is important for TensorArray and TensorList ops, since
     *  internally they use a tensor as the id for TensorArray and TensorList, and
     * to simplify lookup, they also use Tensor.id as the key to the internal map.
     * These id tensors have been marked as kept in the backend, we need avoid clone
     * them in order to create new Tensor.id.
     * @param tensor
     */
    function cloneTensor(tensor) {
        return tensor.kept ? tensor : tfc.clone(tensor);
    }

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json = [
        {
            'tfOpName': 'Add',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'AddV2',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'AddN',
            'category': 'arithmetic',
            'inputs': [{ 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' }]
        },
        {
            'tfOpName': 'BiasAdd',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'Sub',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'RealDiv',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Div',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'DivNoNan',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'FloorDiv',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Mul',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Maximum',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' }
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Minimum',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' }
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Pow',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'SquaredDifference',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Mod',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'FloorMod',
            'category': 'arithmetic',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [{
                    'tfName': 'T',
                    'name': 'dtype',
                    'type': 'dtype',
                    'notSupported': true
                }]
        }
    ];

    var arithmetic = {
        __proto__: null,
        json: json
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$1 = [
        {
            'tfOpName': 'Abs',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Acos',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Asin',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Atan',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Atan2',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'y', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Ceil',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'ClipByValue',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'clipValueMin', 'type': 'number' },
                { 'start': 2, 'name': 'clipValueMax', 'type': 'number' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Complex',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'real', 'type': 'tensor' },
                { 'start': 1, 'name': 'imag', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'ComplexAbs',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Cos',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Cosh',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Elu',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Exp',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Floor',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Log',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Imag',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'Tout',
                    'name': 'outputType',
                    'type': 'dtype',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'Neg',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Real',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'Tout',
                    'name': 'outputType',
                    'type': 'dtype',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'Prelu',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'alpha', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Relu',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Relu6',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Selu',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Sigmoid',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Sin',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Sinh',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Sqrt',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Rsqrt',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Square',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Tan',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Tanh',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Sign',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Round',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Expm1',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Log1p',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Reciprocal',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Softplus',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Asinh',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Acosh',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Atanh',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Erf',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Prod',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axes', 'type': 'number[]' },
            ],
            'attrs': [
                {
                    'tfName': 'keep_dims',
                    'name': 'keepDims',
                    'type': 'bool',
                    'notSupported': true
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'LeakyRelu',
            'category': 'basic_math',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'alpha',
                    'name': 'alpha',
                    'type': 'number',
                    'defaultValue': 0.2
                },
                {
                    'tfName': 'T',
                    'name': 'dtype',
                    'type': 'dtype',
                    'notSupported': true
                }
            ]
        }
    ];

    var basicMath = {
        __proto__: null,
        json: json$1
    };

    var json$2 = [
        {
            'tfOpName': 'EmptyTensorList',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'elementShape', 'type': 'shape' },
                { 'start': 1, 'name': 'maxNumElements', 'type': 'number' },
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'LoopCond',
            'category': 'control',
            'inputs': [{ 'start': 0, 'name': 'pred', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'Switch',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'data', 'type': 'tensor' },
                { 'start': 1, 'name': 'pred', 'type': 'tensor' }
            ]
        },
        {
            'tfOpName': 'Merge',
            'category': 'control',
            'inputs': [{ 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' }]
        },
        {
            'tfOpName': 'Enter',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
                { 'tfName': 'frame_name', 'name': 'frameName', 'type': 'string' },
                { 'tfName': 'is_constant', 'name': 'isConstant', 'type': 'bool' }
            ]
        },
        {
            'tfOpName': 'Exit',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'NextIteration',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'TensorArrayV3',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'size', 'type': 'number' },
            ],
            'attrs': [
                { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
                { 'tfName': 'element_shape', 'name': 'elementShape', 'type': 'shape' },
                { 'tfName': 'dynamic_size', 'name': 'dynamicSize', 'type': 'bool' },
                { 'tfName': 'clear_after_read', 'name': 'clearAfterRead', 'type': 'bool' },
                {
                    'tfName': 'identical_element_shapes',
                    'name': 'identicalElementShapes',
                    'type': 'bool'
                },
                { 'tfName': 'tensor_array_name', 'name': 'name', 'type': 'string' }
            ]
        },
        {
            'tfOpName': 'TensorArrayWriteV3',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
                { 'start': 1, 'name': 'index', 'type': 'number' },
                { 'start': 2, 'name': 'tensor', 'type': 'tensor' },
                { 'start': 3, 'name': 'flowIn', 'type': 'number' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'TensorArrayReadV3',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
                { 'start': 1, 'name': 'index', 'type': 'number' },
                { 'start': 2, 'name': 'flowIn', 'type': 'number' },
            ],
            'attrs': [{
                    'tfName': 'dtype',
                    'name': 'dtype',
                    'type': 'dtype',
                    'notSupported': true
                }]
        },
        {
            'tfOpName': 'TensorArrayGatherV3',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
                { 'start': 1, 'name': 'indices', 'type': 'number[]' },
                { 'start': 2, 'name': 'flowIn', 'type': 'number' },
            ],
            'attrs': [
                { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
                { 'tfName': 'element_shape', 'name': 'elementShape', 'type': 'shape' }
            ]
        },
        {
            'tfOpName': 'TensorArrayScatterV3',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
                { 'start': 1, 'name': 'indices', 'type': 'number[]' },
                { 'start': 2, 'name': 'tensor', 'type': 'tensor' },
                { 'start': 3, 'name': 'flowIn', 'type': 'number' },
            ],
            'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorArrayConcatV3',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
                { 'start': 1, 'name': 'flowIn', 'type': 'number' },
            ],
            'attrs': [
                { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }, {
                    'tfName': 'element_shape_except0',
                    'name': 'elementShapeExcept0',
                    'type': 'shape',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'TensorArraySplitV3',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
                { 'start': 1, 'name': 'tensor', 'type': 'tensor' },
                { 'start': 2, 'name': 'lengths', 'type': 'number[]' },
                { 'start': 3, 'name': 'flowIn', 'type': 'number' },
            ],
            'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorArraySizeV3',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
                { 'start': 1, 'name': 'flowIn', 'type': 'number' }
            ]
        },
        {
            'tfOpName': 'TensorArrayCloseV3',
            'category': 'control',
            'inputs': [{ 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'StatelessIf',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'cond', 'type': 'tensor' },
                { 'start': 1, 'end': 0, 'name': 'args', 'type': 'tensors' }
            ],
            'attrs': [
                { 'tfName': 'then_branch', 'name': 'thenBranch', 'type': 'func' },
                { 'tfName': 'else_branch', 'name': 'elseBranch', 'type': 'func' }
            ]
        },
        {
            'tfOpName': 'If',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'cond', 'type': 'tensor' },
                { 'start': 1, 'end': 0, 'name': 'args', 'type': 'tensors' }
            ],
            'attrs': [
                { 'tfName': 'then_branch', 'name': 'thenBranch', 'type': 'func' },
                { 'tfName': 'else_branch', 'name': 'elseBranch', 'type': 'func' }
            ]
        },
        {
            'tfOpName': 'StatelessWhile',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'end': 0, 'name': 'args', 'type': 'tensors' },
            ],
            'attrs': [
                { 'tfName': 'cond', 'name': 'cond', 'type': 'func' },
                { 'tfName': 'body', 'name': 'body', 'type': 'func' }
            ]
        },
        {
            'tfOpName': 'While',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'end': 0, 'name': 'args', 'type': 'tensors' },
            ],
            'attrs': [
                { 'tfName': 'cond', 'name': 'cond', 'type': 'func' },
                { 'tfName': 'body', 'name': 'body', 'type': 'func' }
            ]
        },
        {
            'tfOpName': 'TensorListScatter',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
                { 'start': 1, 'name': 'indices', 'type': 'number[]' },
                { 'start': 2, 'name': 'elementShape', 'type': 'shape' }
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListScatterV2',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
                { 'start': 1, 'name': 'indices', 'type': 'number[]' },
                { 'start': 2, 'name': 'elementShape', 'type': 'shape' },
                { 'start': 3, 'name': 'numElements', 'type': 'number' },
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListGather',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
                { 'start': 1, 'name': 'indices', 'type': 'number[]' },
                { 'start': 2, 'name': 'elementShape', 'type': 'shape' },
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListGetItem',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
                { 'start': 1, 'name': 'index', 'type': 'number' },
                { 'start': 2, 'name': 'elementShape', 'type': 'shape' },
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListSetItem',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
                { 'start': 1, 'name': 'index', 'type': 'number' },
                { 'start': 2, 'name': 'tensor', 'type': 'tensor' },
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListReserve',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'elementShape', 'type': 'shape' },
                { 'start': 1, 'name': 'numElements', 'type': 'number' },
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListFromTensor',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
                { 'start': 1, 'name': 'elementShape', 'type': 'shape' }
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListStack',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
                { 'start': 1, 'name': 'elementShape', 'type': 'shape' },
            ],
            'attrs': [
                { 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' },
                { 'tfName': 'num_elements', 'name': 'numElements', 'type': 'dtype' }
            ]
        },
        {
            'tfOpName': 'TensorListSplit',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
                { 'start': 1, 'name': 'elementShape', 'type': 'shape' },
                { 'start': 2, 'name': 'lengths', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListConcat',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'element_shape', 'name': 'elementShape', 'type': 'shape' },
                { 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }
            ]
        },
        {
            'tfOpName': 'TensorListPopBack',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
                { 'start': 1, 'name': 'elementShape', 'type': 'shape' },
            ],
            'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TensorListPushBack',
            'category': 'control',
            'inputs': [
                { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
                { 'start': 1, 'name': 'tensor', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }
            ]
        }
    ];

    var control = {
        __proto__: null,
        json: json$2
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
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
    var json$3 = [
        {
            'tfOpName': 'AvgPool',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                },
                { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'MaxPool',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                },
                { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' }, {
                    'tfName': 'explicit_paddings',
                    'name': 'explicitPaddings',
                    'type': 'number[]',
                    'defaultValue': [],
                    'notSupported': true
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'MaxPoolWithArgmax',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' },
                { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' }, {
                    'tfName': 'include_batch_in_index',
                    'name': 'includeBatchInIndex',
                    'type': 'bool'
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'AvgPool3D',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                },
                { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'MaxPool3D',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                },
                { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Conv1D',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'stride', 'name': 'stride', 'type': 'number' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'defaultValue': 'NWC'
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'dilation',
                    'name': 'dilation',
                    'type': 'number',
                    'defaultValue': 1
                }
            ]
        },
        {
            'tfOpName': 'Conv2D',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' },
                { 'tfName': 'useCudnnOnGpu', 'name': 'useCudnnOnGpu', 'type': 'bool' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'defaultValue': 'NHWC'
                },
                {
                    'tfName': 'explicit_paddings',
                    'name': 'explicitPaddings',
                    'type': 'number[]',
                    'defaultValue': []
                },
                { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': '_FusedConv2D',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
                { 'start': 2, end: 0, 'name': 'args', 'type': 'tensors' },
            ],
            'attrs': [
                { 'tfName': 'num_args', 'name': 'numArgs', 'type': 'number' },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'explicit_paddings',
                    'name': 'explicitPaddings',
                    'type': 'number[]',
                    'defaultValue': []
                },
                {
                    'tfName': 'use_cudnn_on_gpu',
                    'name': 'useCudnnOnGpu',
                    'type': 'bool',
                    'defaultValue': true
                },
                {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'defaultValue': 'NHWC'
                },
                {
                    'tfName': 'dilations',
                    'name': 'dilations',
                    'type': 'number[]',
                    'defaultValue': [1, 1, 1, 1]
                },
                {
                    'tfName': 'fused_ops',
                    'name': 'fusedOps',
                    'type': 'string[]',
                    'defaultValue': []
                },
                {
                    'tfName': 'epsilon',
                    'name': 'epsilon',
                    'type': 'number',
                    'defaultValue': 0.0001
                },
                {
                    'tfName': 'leakyrelu_alpha',
                    'name': 'leakyreluAlpha',
                    'type': 'number'
                }
            ]
        },
        {
            'tfOpName': 'Conv2DBackpropInput',
            'category': 'convolution',
            'inputs': [
                { 'start': 2, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
                { 'start': 0, 'name': 'outputShape', 'type': 'number[]' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                },
                {
                    'tfName': 'explicit_paddings',
                    'name': 'explicitPaddings',
                    'type': 'number[]',
                    'defaultValue': []
                },
                {
                    'tfName': 'dilations',
                    'name': 'dilations',
                    'type': 'number[]',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'DepthwiseConv2d',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'input', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'defaultValue': 'NHWC'
                },
                {
                    'tfName': 'explicit_paddings',
                    'name': 'explicitPaddings',
                    'type': 'number[]',
                    'defaultValue': []
                },
                { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'DepthwiseConv2dNative',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'input', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'defaultValue': 'NHWC'
                },
                {
                    'tfName': 'explicit_paddings',
                    'name': 'explicitPaddings',
                    'type': 'number[]',
                    'defaultValue': []
                },
                { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'FusedDepthwiseConv2dNative',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
                { 'start': 2, end: 0, 'name': 'args', 'type': 'tensors' },
            ],
            'attrs': [
                { 'tfName': 'num_args', 'name': 'numArgs', 'type': 'number' },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'defaultValue': 'NHWC'
                },
                {
                    'tfName': 'dilations',
                    'name': 'dilations',
                    'type': 'number[]',
                    'defaultValue': [1, 1, 1, 1]
                },
                {
                    'tfName': 'fused_ops',
                    'name': 'fusedOps',
                    'type': 'string[]',
                    'defaultValue': []
                },
                {
                    'tfName': 'explicit_paddings',
                    'name': 'explicitPaddings',
                    'type': 'number[]',
                    'defaultValue': []
                }
            ]
        },
        {
            'tfOpName': 'Conv3D',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'defaultValue': 'NHWC'
                },
                { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
            ],
        },
        {
            'tfOpName': 'Dilation2D',
            'category': 'convolution',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
                { 'tfName': 'rates', 'name': 'dilations', 'type': 'number[]' },
                { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }
            ]
        }
    ];

    var convolution = {
        __proto__: null,
        json: json$3
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$4 = [
        {
            'tfOpName': 'Fill',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'shape', 'type': 'number[]' },
                { 'start': 1, 'name': 'value', 'type': 'number' },
            ],
            'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'LinSpace',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'start', 'type': 'number' },
                { 'start': 1, 'name': 'stop', 'type': 'number' },
                { 'start': 2, 'name': 'num', 'type': 'number' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'OneHot',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'indices', 'type': 'tensor' },
                { 'start': 1, 'name': 'depth', 'type': 'number' },
                { 'start': 2, 'name': 'onValue', 'type': 'number', 'defaultValue': 1 },
                { 'start': 3, 'name': 'offValue', 'type': 'number', 'defaultValue': 0 },
            ],
            'attrs': [
                {
                    'tfName': 'axis',
                    'name': 'axis',
                    'type': 'number',
                    'notSupported': true
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Ones',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'shape', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'OnesLike',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [{ 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'RandomUniform',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'shape', 'type': 'number[]' },
            ],
            'attrs': [
                {
                    'tfName': 'minval',
                    'name': 'minval',
                    'type': 'number',
                    'defaultValue': 0
                },
                {
                    'tfName': 'maxval',
                    'name': 'maxval',
                    'type': 'number',
                    'defaultValue': 1
                },
                { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
                { 'tfName': 'seed', 'name': 'seed', 'type': 'number', 'defaultValue': 0 }, {
                    'tfName': 'seed2',
                    'name': 'seed2',
                    'type': 'number',
                    'defaultValue': 0,
                    'notSupported': true
                },
                { 'tfName': 'T', 'name': 'T', 'type': 'number', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Range',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'start', 'type': 'number' },
                { 'start': 1, 'name': 'stop', 'type': 'number' },
                { 'start': 2, 'name': 'step', 'type': 'number', 'defaultValue': 0 },
            ],
            'attrs': [{ 'tfName': 'Tidx', 'name': 'dtype', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'TruncatedNormal',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'shape', 'type': 'number[]' },
            ],
            'attrs': [
                {
                    'tfName': 'means',
                    'name': 'mean',
                    'type': 'number',
                    'defaultValue': 0.0
                },
                {
                    'tfName': 'stddev',
                    'name': 'stdDev',
                    'type': 'number',
                    'defaultValue': 1.0
                },
                { 'tfName': 'seed', 'name': 'seed', 'type': 'number' }, {
                    'tfName': 'seed2',
                    'name': 'seed2',
                    'type': 'number',
                    'defaultValue': 0,
                    'notSupported': true
                },
                { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
                { 'tfName': 'T', 'name': 'T', 'type': 'number', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Zeros',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'shape', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'ZerosLike',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
        },
        {
            'tfOpName': 'Multinomial',
            'category': 'creation',
            'inputs': [
                { 'start': 0, 'name': 'logits', 'type': 'tensor' },
                { 'start': 1, 'name': 'numSamples', 'type': 'number' },
            ],
            'attrs': [
                { 'tfName': 'seed', 'name': 'seed', 'type': 'number' },
                { 'tfName': 'seed2', 'name': 'seed2', 'type': 'number' },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' },
                { 'tfName': 'output_dtype', 'name': 'output_dtype', 'type': 'dtype' }
            ]
        }
    ];

    var creation = {
        __proto__: null,
        json: json$4
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$5 = [
        {
            'tfOpName': 'NonMaxSuppressionV2',
            'category': 'dynamic',
            'inputs': [
                { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
                { 'start': 1, 'name': 'scores', 'type': 'tensor' },
                { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
                { 'start': 3, 'name': 'iouThreshold', 'type': 'number' }
            ]
        },
        {
            'tfOpName': 'NonMaxSuppressionV3',
            'category': 'dynamic',
            'inputs': [
                { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
                { 'start': 1, 'name': 'scores', 'type': 'tensor' },
                { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
                { 'start': 3, 'name': 'iouThreshold', 'type': 'number' },
                { 'start': 4, 'name': 'scoreThreshold', 'type': 'number' }
            ]
        },
        {
            'tfOpName': 'NonMaxSuppressionV4',
            'category': 'dynamic',
            'inputs': [
                { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
                { 'start': 1, 'name': 'scores', 'type': 'tensor' },
                { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
                { 'start': 3, 'name': 'iouThreshold', 'type': 'number' },
                { 'start': 4, 'name': 'scoreThreshold', 'type': 'number' }
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'T_threshold',
                    'name': 'threshold',
                    'type': 'dtype',
                    'notSupported': true
                },
                {
                    'tfName': 'pad_to_max_output_size',
                    'name': 'padToMaxOutputSize',
                    'type': 'bool'
                }
            ]
        },
        {
            'tfOpName': 'NonMaxSuppressionV5',
            'category': 'dynamic',
            'inputs': [
                { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
                { 'start': 1, 'name': 'scores', 'type': 'tensor' },
                { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
                { 'start': 3, 'name': 'iouThreshold', 'type': 'number' },
                { 'start': 4, 'name': 'scoreThreshold', 'type': 'number' },
                { 'start': 5, 'name': 'softNmsSigma', 'type': 'number' }
            ]
        },
        {
            'tfOpName': 'Where',
            'category': 'dynamic',
            'inputs': [
                { 'start': 0, 'name': 'condition', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'ListDiff',
            'category': 'dynamic',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'y', 'type': 'tensor' },
            ],
            'attrs': [{
                    'tfName': 'T',
                    'name': 'dtype',
                    'type': 'dtype',
                    'notSupported': true
                }]
        }
    ];

    var dynamic = {
        __proto__: null,
        json: json$5
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$6 = [
        {
            'tfOpName': 'TopKV2',
            'category': 'evaluation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'k', 'type': 'number' },
            ],
            'attrs': [{ 'tfName': 'sorted', 'name': 'sorted', 'type': 'bool' }]
        },
        {
            'tfOpName': 'Unique',
            'category': 'evaluation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
        },
        {
            'tfOpName': 'UniqueV2',
            'category': 'evaluation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number' },
            ],
        },
    ];

    var evaluation = {
        __proto__: null,
        json: json$6
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$7 = [
        {
            'tfOpName': 'PlaceholderWithDefault',
            'category': 'graph',
            'inputs': [
                { 'start': 0, 'name': 'default', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'shape', 'name': 'shape', 'type': 'shape' },
                { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }
            ]
        },
        {
            'tfOpName': 'Placeholder',
            'category': 'graph',
            'attrs': [
                { 'tfName': 'shape', 'name': 'shape', 'type': 'shape' },
                { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }
            ]
        },
        { 'tfOpName': 'Const', 'category': 'graph' }, {
            'tfOpName': 'Identity',
            'category': 'graph',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'IdentityN',
            'category': 'graph',
            'inputs': [{ 'start': 0, 'end': 0, 'name': 'x', 'type': 'tensors' }]
        },
        {
            'tfOpName': 'Snapshot',
            'category': 'graph',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'Rank',
            'category': 'graph',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'Size',
            'category': 'graph',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'Shape',
            'category': 'graph',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'ShapeN',
            'category': 'graph',
            'inputs': [{ 'start': 0, 'end': 0, 'name': 'x', 'type': 'tensors' }]
        },
        {
            'tfOpName': 'Print',
            'category': 'graph',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'data', 'type': 'tensors' },
            ],
            'attrs': [
                { 'tfName': 'message', 'name': 'message', 'type': 'string' }, {
                    'tfName': 'first_n',
                    'name': 'firstN',
                    'type': 'number',
                    'notSupported': true
                },
                {
                    'tfName': 'summarize',
                    'name': 'summarize',
                    'type': 'number',
                    'defaultValue': 3
                }
            ]
        },
        { 'tfOpName': 'NoOp', 'category': 'graph', 'inputs': [] }, {
            'tfOpName': 'StopGradient',
            'category': 'graph',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'FakeQuantWithMinMaxVars',
            'category': 'graph',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'min', 'name': 'min', 'type': 'number' },
                { 'tfName': 'max', 'name': 'max', 'type': 'number' }
            ]
        }
    ];

    var graph = {
        __proto__: null,
        json: json$7
    };

    var json$8 = [
        {
            'tfOpName': 'HashTable',
            'category': 'hash_table',
            'inputs': [],
            'attrs': [
                { 'tfName': 'shared_name', 'name': 'sharedName', 'type': 'string' },
                {
                    'tfName': 'use_node_name_sharing',
                    'name': 'useNodeNameSharing',
                    'type': 'bool'
                },
                { 'tfName': 'key_dtype', 'name': 'keyDType', 'type': 'dtype' },
                { 'tfName': 'value_dtype', 'name': 'valueDType', 'type': 'dtype' },
            ]
        },
        {
            'tfOpName': 'HashTableV2',
            'category': 'hash_table',
            'inputs': [],
            'attrs': [
                { 'tfName': 'shared_name', 'name': 'sharedName', 'type': 'string' },
                {
                    'tfName': 'use_node_name_sharing',
                    'name': 'useNodeNameSharing',
                    'type': 'bool'
                },
                { 'tfName': 'key_dtype', 'name': 'keyDType', 'type': 'dtype' },
                { 'tfName': 'value_dtype', 'name': 'valueDType', 'type': 'dtype' },
            ]
        },
        {
            'tfOpName': 'LookupTableImport',
            'category': 'hash_table',
            'inputs': [
                { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' },
                { 'start': 1, 'name': 'keys', 'type': 'tensor' },
                { 'start': 2, 'name': 'values', 'type': 'tensor' }
            ],
            'attrs': [
                { 'tfName': 'Tin', 'name': 'tIn', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'Tout',
                    'name': 'tOut',
                    'type': 'dtype',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'LookupTableImportV2',
            'category': 'hash_table',
            'inputs': [
                { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' },
                { 'start': 1, 'name': 'keys', 'type': 'tensor' },
                { 'start': 2, 'name': 'values', 'type': 'tensor' }
            ],
            'attrs': [
                { 'tfName': 'Tin', 'name': 'tIn', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'Tout',
                    'name': 'tOut',
                    'type': 'dtype',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'LookupTableFind',
            'category': 'hash_table',
            'inputs': [
                { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' },
                { 'start': 1, 'name': 'keys', 'type': 'tensor' },
                { 'start': 2, 'name': 'defaultValue', 'type': 'tensor' }
            ],
            'attrs': [
                { 'tfName': 'Tin', 'name': 'tIn', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'Tout',
                    'name': 'tOut',
                    'type': 'dtype',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'LookupTableFindV2',
            'category': 'hash_table',
            'inputs': [
                { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' },
                { 'start': 1, 'name': 'keys', 'type': 'tensor' },
                { 'start': 2, 'name': 'defaultValue', 'type': 'tensor' }
            ],
            'attrs': [
                { 'tfName': 'Tin', 'name': 'tIn', 'type': 'dtype', 'notSupported': true }, {
                    'tfName': 'Tout',
                    'name': 'tOut',
                    'type': 'dtype',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'LookupTableSize',
            'category': 'hash_table',
            'inputs': [
                { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' }
            ]
        },
        {
            'tfOpName': 'LookupTableSizeV2',
            'category': 'hash_table',
            'inputs': [
                { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' }
            ]
        }
    ];

    var hashTable = {
        __proto__: null,
        json: json$8
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$9 = [
        {
            'tfOpName': 'ResizeBilinear',
            'category': 'image',
            'inputs': [
                { 'start': 0, 'name': 'images', 'type': 'tensor' },
                { 'start': 1, 'name': 'size', 'type': 'number[]' },
            ],
            'attrs': [
                { 'tfName': 'align_corners', 'name': 'alignCorners', 'type': 'bool' }, {
                    'tfName': 'half_pixel_centers',
                    'name': 'halfPixelCenters',
                    'type': 'bool'
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'ResizeNearestNeighbor',
            'category': 'image',
            'inputs': [
                { 'start': 0, 'name': 'images', 'type': 'tensor' },
                { 'start': 1, 'name': 'size', 'type': 'number[]' },
            ],
            'attrs': [
                { 'tfName': 'align_corners', 'name': 'alignCorners', 'type': 'bool' }, {
                    'tfName': 'half_pixel_centers',
                    'name': 'halfPixelCenters',
                    'type': 'bool'
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'CropAndResize',
            'category': 'image',
            'inputs': [
                { 'start': 0, 'name': 'image', 'type': 'tensor' },
                { 'start': 1, 'name': 'boxes', 'type': 'tensor' },
                { 'start': 2, 'name': 'boxInd', 'type': 'tensor' },
                { 'start': 3, 'name': 'cropSize', 'type': 'number[]' },
            ],
            'attrs': [
                { 'tfName': 'method', 'name': 'method', 'type': 'string' }, {
                    'tfName': 'extrapolation_value',
                    'name': 'extrapolationValue',
                    'type': 'number'
                }
            ]
        }
    ];

    var image = {
        __proto__: null,
        json: json$9
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$a = [
        {
            'tfOpName': 'Equal',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'NotEqual',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Greater',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'GreaterEqual',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Less',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'LessEqual',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'LogicalAnd',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'LogicalNot',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'LogicalOr',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Select',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'condition', 'type': 'tensor' },
                { 'start': 1, 'name': 'a', 'type': 'tensor' },
                { 'start': 2, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'SelectV2',
            'category': 'logical',
            'inputs': [
                { 'start': 0, 'name': 'condition', 'type': 'tensor' },
                { 'start': 1, 'name': 'a', 'type': 'tensor' },
                { 'start': 2, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [{
                    'tfName': 'T',
                    'name': 'dtype',
                    'type': 'dtype',
                    'notSupported': true
                }]
        }
    ];

    var logical = {
        __proto__: null,
        json: json$a
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$b = [
        {
            'tfOpName': '_FusedMatMul',
            'category': 'matrices',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
                { 'start': 2, end: 0, 'name': 'args', 'type': 'tensors' },
            ],
            'attrs': [
                { 'tfName': 'num_args', 'name': 'numArgs', 'type': 'number' }, {
                    'tfName': 'fused_ops',
                    'name': 'fusedOps',
                    'type': 'string[]',
                    'defaultValue': []
                },
                {
                    'tfName': 'epsilon',
                    'name': 'epsilon',
                    'type': 'number',
                    'defaultValue': 0.0001
                },
                {
                    'tfName': 'transpose_a',
                    'name': 'transposeA',
                    'type': 'bool',
                    'defaultValue': false
                },
                {
                    'tfName': 'transpose_b',
                    'name': 'transposeB',
                    'type': 'bool',
                    'defaultValue': false
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'MatMul',
            'category': 'matrices',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'transpose_a',
                    'name': 'transposeA',
                    'type': 'bool',
                    'defaultValue': false
                },
                {
                    'tfName': 'transpose_b',
                    'name': 'transposeB',
                    'type': 'bool',
                    'defaultValue': false
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'BatchMatMul',
            'category': 'matrices',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'adj_x',
                    'name': 'transposeA',
                    'type': 'bool',
                    'defaultValue': false
                },
                {
                    'tfName': 'adj_y',
                    'name': 'transposeB',
                    'type': 'bool',
                    'defaultValue': false
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'BatchMatMulV2',
            'category': 'matrices',
            'inputs': [
                { 'start': 0, 'name': 'a', 'type': 'tensor' },
                { 'start': 1, 'name': 'b', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'adj_x',
                    'name': 'transposeA',
                    'type': 'bool',
                    'defaultValue': false
                },
                {
                    'tfName': 'adj_y',
                    'name': 'transposeB',
                    'type': 'bool',
                    'defaultValue': false
                },
                { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
            ]
        },
        {
            'tfOpName': 'Transpose',
            'category': 'matrices',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'perm', 'type': 'number[]' },
            ],
            'attrs': [{
                    'tfName': 'T',
                    'name': 'dtype',
                    'type': 'dtype',
                    'notSupported': true
                }]
        }
    ];

    var matrices = {
        __proto__: null,
        json: json$b
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$c = [
        {
            'tfOpName': 'FusedBatchNorm',
            'category': 'normalization',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'scale', 'type': 'tensor' },
                { 'start': 2, 'name': 'offset', 'type': 'tensor' },
                { 'start': 3, 'name': 'mean', 'type': 'tensor' },
                { 'start': 4, 'name': 'variance', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'epsilon',
                    'name': 'epsilon',
                    'type': 'number',
                    'defaultValue': 0.001
                },
                {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'FusedBatchNormV2',
            'category': 'normalization',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'scale', 'type': 'tensor' },
                { 'start': 2, 'name': 'offset', 'type': 'tensor' },
                { 'start': 3, 'name': 'mean', 'type': 'tensor' },
                { 'start': 4, 'name': 'variance', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'epsilon',
                    'name': 'epsilon',
                    'type': 'number',
                    'defaultValue': 0.001
                },
                {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'FusedBatchNormV3',
            'category': 'normalization',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'scale', 'type': 'tensor' },
                { 'start': 2, 'name': 'offset', 'type': 'tensor' },
                { 'start': 3, 'name': 'mean', 'type': 'tensor' },
                { 'start': 4, 'name': 'variance', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'epsilon',
                    'name': 'epsilon',
                    'type': 'number',
                    'defaultValue': 0.001
                },
                {
                    'tfName': 'data_format',
                    'name': 'dataFormat',
                    'type': 'string',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'LRN',
            'category': 'normalization',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'depth_radius',
                    'name': 'radius',
                    'type': 'number',
                    'defaultValue': 5
                },
                { 'tfName': 'bias', 'name': 'bias', 'type': 'number', 'defaultValue': 1.0 },
                {
                    'tfName': 'alpha',
                    'name': 'alpha',
                    'type': 'number',
                    'defaultValue': 1.0
                },
                {
                    'tfName': 'beta',
                    'name': 'beta',
                    'type': 'number',
                    'defaultValue': 0.5
                }
            ]
        },
        {
            'tfOpName': 'Softmax',
            'category': 'normalization',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'LogSoftmax',
            'category': 'normalization',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'SparseToDense',
            'category': 'normalization',
            'inputs': [
                { 'start': 0, 'name': 'sparseIndices', 'type': 'tensor' },
                { 'start': 1, 'name': 'outputShape', 'type': 'number[]' },
                { 'start': 2, 'name': 'sparseValues', 'type': 'tensor' },
                { 'start': 3, 'name': 'defaultValue', 'type': 'tensor' },
            ],
            'attrs': [{
                    'tfName': 'validate_indices',
                    'name': 'validateIndices',
                    'type': 'bool',
                    'defaultValue': true,
                    'notSupported': true
                }]
        }
    ];

    var normalization = {
        __proto__: null,
        json: json$c
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$d = [
        {
            'tfOpName': 'Bincount',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'size', 'type': 'number' },
                { 'start': 2, 'name': 'weights', 'type': 'tensor' }
            ]
        },
        {
            'tfOpName': 'DenseBincount',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'size', 'type': 'number' },
                { 'start': 2, 'name': 'weights', 'type': 'tensor' }
            ],
            'attrs': [{ 'tfName': 'binary_output', 'name': 'binaryOutput', 'type': 'bool' }]
        },
        {
            'tfOpName': 'Max',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
        },
        {
            'tfOpName': 'Mean',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
        },
        {
            'tfOpName': 'Min',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
        },
        {
            'tfOpName': 'Sum',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
        },
        {
            'tfOpName': 'All',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
        },
        {
            'tfOpName': 'Any',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
        },
        {
            'tfOpName': 'ArgMax',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number' }
            ]
        },
        {
            'tfOpName': 'ArgMin',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number' }
            ]
        },
        {
            'tfOpName': 'Prod',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
        },
        {
            'tfOpName': 'Cumsum',
            'category': 'reduction',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number' },
            ],
            'attrs': [
                { 'tfName': 'exclusive', 'name': 'exclusive', 'type': 'bool' },
                { 'tfName': 'reverse', 'name': 'reverse', 'type': 'bool' }
            ]
        }
    ];

    var reduction = {
        __proto__: null,
        json: json$d
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$e = [
        {
            'tfOpName': 'ConcatV2',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'end': -1, 'name': 'tensors', 'type': 'tensors' },
                { 'start': -1, 'name': 'axis', 'type': 'number' }
            ],
            'attrs': [{ 'tfName': 'N', 'name': 'n', 'type': 'number', 'defaultValue': 2 }]
        },
        {
            'tfOpName': 'Concat',
            'category': 'slice_join',
            'inputs': [
                { 'start': 1, 'end': 0, 'name': 'tensors', 'type': 'tensors' },
                { 'start': 0, 'name': 'axis', 'type': 'number' }
            ],
            'attrs': [{ 'tfName': 'N', 'name': 'n', 'type': 'number', 'defaultValue': 2 }]
        },
        {
            'tfOpName': 'GatherV2',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'indices', 'type': 'tensor' },
                { 'start': 2, 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
            ],
            'attrs': [{
                    'tfName': 'batch_dims',
                    'name': 'batchDims',
                    'type': 'number',
                    'defaultValue': 0
                }]
        },
        {
            'tfOpName': 'Gather',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'indices', 'type': 'tensor' },
            ],
            'attrs': [{
                    'tfName': 'validate_indices',
                    'name': 'validateIndices',
                    'type': 'bool',
                    'notSupported': true
                }]
        },
        {
            'tfOpName': 'Reverse',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'dims', 'type': 'bool[]' }
            ]
        },
        {
            'tfOpName': 'ReverseV2',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'Slice',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'begin', 'type': 'number[]' },
                { 'start': 2, 'name': 'size', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'StridedSlice',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'begin', 'type': 'number[]' },
                { 'start': 2, 'name': 'end', 'type': 'number[]' },
                { 'start': 3, 'name': 'strides', 'type': 'number[]' },
            ],
            'attrs': [
                {
                    'tfName': 'begin_mask',
                    'name': 'beginMask',
                    'type': 'number',
                    'defaultValue': 0
                },
                {
                    'tfName': 'end_mask',
                    'name': 'endMask',
                    'type': 'number',
                    'defaultValue': 0
                },
                {
                    'tfName': 'new_axis_mask',
                    'name': 'newAxisMask',
                    'type': 'number',
                    'defaultValue': 0
                },
                {
                    'tfName': 'ellipsis_mask',
                    'name': 'ellipsisMask',
                    'type': 'number',
                    'defaultValue': 0
                },
                {
                    'tfName': 'shrink_axis_mask',
                    'name': 'shrinkAxisMask',
                    'type': 'number',
                    'defaultValue': 0
                }
            ]
        },
        {
            'tfOpName': 'Pack',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' },
            ],
            'attrs': [
                { 'tfName': 'axis', 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
            ]
        },
        {
            'tfOpName': 'Unpack',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'axis', 'name': 'axis', 'type': 'number', 'defaultValue': 0 }, {
                    'tfName': 'num',
                    'name': 'num',
                    'type': 'number',
                    'defaultValue': 0,
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'Tile',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'reps', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'Split',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'axis', 'type': 'number', 'defaultValue': 0 },
                { 'start': 1, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [{
                    'tfName': 'num_split',
                    'name': 'numOrSizeSplits',
                    'type': 'number',
                    'defaultValue': 1
                }]
        },
        {
            'tfOpName': 'SplitV',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'numOrSizeSplits', 'type': 'number[]' },
                { 'start': 2, 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
            ]
        },
        {
            'tfOpName': 'ScatterNd',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'indices', 'type': 'tensor' },
                { 'start': 1, 'name': 'values', 'type': 'tensor' },
                { 'start': 2, 'name': 'shape', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'GatherNd',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'indices', 'type': 'tensor' }
            ]
        },
        {
            'tfOpName': 'SparseToDense',
            'category': 'slice_join',
            'inputs': [
                { 'start': 0, 'name': 'sparseIndices', 'type': 'tensor' },
                { 'start': 1, 'name': 'outputShape', 'type': 'number[]' },
                { 'start': 2, 'name': 'sparseValues', 'type': 'tensor' },
                { 'start': 3, 'name': 'defaultValue', 'type': 'tensor' },
            ],
            'attrs': [{
                    'tfName': 'validate_indices',
                    'name': 'validateIndices',
                    'type': 'bool',
                    'defaultValue': false,
                    'notSupported': true
                }]
        }
    ];

    var sliceJoin = {
        __proto__: null,
        json: json$e
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$f = [
        {
            'tfOpName': 'FFT',
            'category': 'spectral',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'IFFT',
            'category': 'spectral',
            'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
        },
        {
            'tfOpName': 'RFFT',
            'category': 'spectral',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' }, {
                    'start': 1,
                    'name': 'fft_length',
                    'type': 'number',
                    'notSupported': true
                }
            ]
        },
        {
            'tfOpName': 'IRFFT',
            'category': 'spectral',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' }, {
                    'start': 1,
                    'name': 'fft_length',
                    'type': 'number',
                    'notSupported': true
                }
            ]
        }
    ];

    var spectral = {
        __proto__: null,
        json: json$f
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var json$g = [
        {
            'tfOpName': 'Cast',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                {
                    'tfName': 'SrcT',
                    'name': 'sdtype',
                    'type': 'dtype',
                    'notSupported': true
                },
                { 'tfName': 'DstT', 'name': 'dtype', 'type': 'dtype' }
            ]
        },
        {
            'tfOpName': 'ExpandDims',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'axis', 'type': 'number' }
            ]
        },
        {
            'tfOpName': 'MirrorPad',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'padding', 'type': 'number[]' },
            ],
            'attrs': [{ 'tfName': 'mode', 'name': 'mode', 'type': 'string' }]
        },
        {
            'tfOpName': 'Pad',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'padding', 'type': 'number[]' },
            ],
            'attrs': [{
                    'tfName': 'constant_value',
                    'name': 'constantValue',
                    'type': 'number',
                    'defaultValue': 0
                }]
        },
        {
            'tfOpName': 'PadV2',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'padding', 'type': 'number[]' }, {
                    'start': 2,
                    'name': 'constantValue',
                    'type': 'number',
                    'defaultValue': 0
                }
            ]
        },
        {
            'tfOpName': 'Reshape',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'shape', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'Squeeze',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [{
                    'tfName': 'axis',
                    'tfDeprecatedName': 'squeeze_dims',
                    'name': 'axis',
                    'type': 'number[]'
                }]
        },
        {
            'tfOpName': 'SpaceToBatchND',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'blockShape', 'type': 'number[]' },
                { 'start': 2, 'name': 'paddings', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'BatchToSpaceND',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'blockShape', 'type': 'number[]' },
                { 'start': 2, 'name': 'crops', 'type': 'number[]' }
            ]
        },
        {
            'tfOpName': 'DepthToSpace',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
            ],
            'attrs': [
                { 'tfName': 'block_size', 'name': 'blockSize', 'type': 'number' },
                { 'tfName': 'data_format', 'name': 'dataFormat', 'type': 'string' }
            ]
        },
        {
            'tfOpName': 'BroadcastTo',
            'category': 'transformation',
            'inputs': [
                { 'start': 0, 'name': 'x', 'type': 'tensor' },
                { 'start': 1, 'name': 'shape', 'type': 'number[]' },
            ],
            'attrs': []
        }
    ];

    var transformation = {
        __proto__: null,
        json: json$g
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var OperationMapper = /** @class */ (function () {
        // Loads the op mapping from the JSON file.
        function OperationMapper() {
            var ops = [
                arithmetic, basicMath, control, convolution, creation, dynamic,
                evaluation, logical, image, graph, matrices, normalization, reduction,
                sliceJoin, spectral, transformation, hashTable
            ];
            var mappersJson = [].concat.apply([], __spread(ops.map(function (op) { return op.json; })));
            this.opMappers = mappersJson.reduce(function (map, mapper) {
                map[mapper.tfOpName] = mapper;
                return map;
            }, {});
        }
        Object.defineProperty(OperationMapper, "Instance", {
            // Singleton instance for the mapper
            get: function () {
                return this._instance || (this._instance = new this());
            },
            enumerable: true,
            configurable: true
        });
        // Converts the model inference graph from Tensorflow GraphDef to local
        // representation for TensorFlow.js API
        OperationMapper.prototype.transformGraph = function (graph, signature) {
            var _this = this;
            if (signature === void 0) { signature = {}; }
            var tfNodes = graph.node;
            var placeholders = [];
            var weights = [];
            var initNodes = [];
            var nodes = tfNodes.reduce(function (map, node) {
                map[node.name] = _this.mapNode(node);
                if (node.op.startsWith('Placeholder')) {
                    placeholders.push(map[node.name]);
                }
                else if (node.op === 'Const') {
                    weights.push(map[node.name]);
                }
                else if (node.input == null || node.input.length === 0) {
                    initNodes.push(map[node.name]);
                }
                return map;
            }, {});
            var inputs = [];
            var outputs = [];
            var inputNodeNameToKey = {};
            var outputNodeNameToKey = {};
            if (signature != null) {
                inputNodeNameToKey = this.mapSignatureEntries(signature.inputs);
                outputNodeNameToKey = this.mapSignatureEntries(signature.outputs);
            }
            var allNodes = Object.keys(nodes);
            allNodes.forEach(function (key) {
                var node = nodes[key];
                node.inputNames.forEach(function (name) {
                    var _a = __read(getNodeNameAndIndex(name), 1), nodeName = _a[0];
                    node.inputs.push(nodes[nodeName]);
                    nodes[nodeName].children.push(node);
                });
            });
            // if signature has not outputs set, add any node that does not have
            // outputs.
            if (Object.keys(outputNodeNameToKey).length === 0) {
                allNodes.forEach(function (key) {
                    var node = nodes[key];
                    if (node.children.length === 0) {
                        outputs.push(node);
                    }
                });
            }
            else {
                Object.keys(outputNodeNameToKey).forEach(function (name) {
                    var _a = __read(getNodeNameAndIndex(name), 1), nodeName = _a[0];
                    var node = nodes[nodeName];
                    if (node != null) {
                        node.signatureKey = outputNodeNameToKey[name];
                        outputs.push(node);
                    }
                });
            }
            if (Object.keys(inputNodeNameToKey).length > 0) {
                Object.keys(inputNodeNameToKey).forEach(function (name) {
                    var _a = __read(getNodeNameAndIndex(name), 1), nodeName = _a[0];
                    var node = nodes[nodeName];
                    if (node) {
                        node.signatureKey = inputNodeNameToKey[name];
                        inputs.push(node);
                    }
                });
            }
            else {
                inputs = placeholders;
            }
            var functions = {};
            if (graph.library != null && graph.library.function != null) {
                functions = graph.library.function.reduce(function (functions, func) {
                    functions[func.signature.name] = _this.mapFunction(func);
                    return functions;
                }, {});
            }
            var result = { nodes: nodes, inputs: inputs, outputs: outputs, weights: weights, placeholders: placeholders, signature: signature, functions: functions };
            if (initNodes.length > 0) {
                result.initNodes = initNodes;
            }
            return result;
        };
        OperationMapper.prototype.mapSignatureEntries = function (entries) {
            return Object.keys(entries || {})
                .reduce(function (prev, curr) {
                prev[entries[curr].name] = curr;
                return prev;
            }, {});
        };
        OperationMapper.prototype.mapNode = function (node) {
            // Unsupported ops will cause an error at run-time (not parse time), since
            // they may not be used by the actual execution subgraph.
            var mapper = getRegisteredOp(node.op) || this.opMappers[node.op] || {};
            if (node.attr == null) {
                node.attr = {};
            }
            var newNode = {
                name: node.name,
                op: node.op,
                category: mapper.category,
                inputNames: (node.input ||
                    []).map(function (input) { return input.startsWith('^') ? input.substr(1) : input; }),
                inputs: [],
                children: [],
                inputParams: {},
                attrParams: {},
                rawAttrs: node.attr
            };
            if (mapper.inputs != null) {
                newNode.inputParams =
                    mapper.inputs.reduce(function (map, param) {
                        map[param.name] = {
                            type: param.type,
                            inputIndexStart: param.start,
                            inputIndexEnd: param.end
                        };
                        return map;
                    }, {});
            }
            if (mapper.attrs != null) {
                newNode.attrParams =
                    mapper.attrs.reduce(function (map, param) {
                        var type = param.type;
                        var value = undefined;
                        switch (param.type) {
                            case 'string':
                                value = getStringParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getStringParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'string[]':
                                value = getStringArrayParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getStringArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'number':
                                value = getNumberParam(node.attr, param.tfName, (param.defaultValue || 0));
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getNumberParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'number[]':
                                value = getNumericArrayParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getNumericArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'bool':
                                value = getBoolParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getBoolParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'bool[]':
                                value = getBoolArrayParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getBoolArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'shape':
                                value = getTensorShapeParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getTensorShapeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'shape[]':
                                value = getTensorShapeArrayParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getTensorShapeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'dtype':
                                value = getDtypeParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getDtypeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'dtype[]':
                                value = getDtypeArrayParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getDtypeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'func':
                                value = getFuncParam(node.attr, param.tfName, param.defaultValue);
                                if (value === undefined && !!param.tfDeprecatedName) {
                                    value = getFuncParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                                }
                                break;
                            case 'tensor':
                            case 'tensors':
                                break;
                            default:
                                throw new Error("Unsupported param type: " + param.type + " for op: " + node.op);
                        }
                        map[param.name] = { value: value, type: type };
                        return map;
                    }, {});
            }
            return newNode;
        };
        // map the TFunctionDef to TFJS graph object
        OperationMapper.prototype.mapFunction = function (functionDef) {
            var _this = this;
            var tfNodes = functionDef.nodeDef;
            var placeholders = [];
            var weights = [];
            var nodes = {};
            if (tfNodes != null) {
                nodes = tfNodes.reduce(function (map, node) {
                    map[node.name] = _this.mapNode(node);
                    if (node.op === 'Const') {
                        weights.push(map[node.name]);
                    }
                    return map;
                }, {});
            }
            var inputs = [];
            var outputs = [];
            functionDef.signature.inputArg.forEach(function (arg) {
                var _a = __read(getNodeNameAndIndex(arg.name), 1), nodeName = _a[0];
                var node = {
                    name: nodeName,
                    op: 'Placeholder',
                    inputs: [],
                    inputNames: [],
                    category: 'graph',
                    inputParams: {},
                    attrParams: { dtype: { value: parseDtypeParam(arg.type), type: 'dtype' } },
                    children: []
                };
                node.signatureKey = arg.name;
                inputs.push(node);
                nodes[nodeName] = node;
            });
            var allNodes = Object.keys(nodes);
            allNodes.forEach(function (key) {
                var node = nodes[key];
                node.inputNames.forEach(function (name) {
                    var _a = __read(getNodeNameAndIndex(name), 1), nodeName = _a[0];
                    node.inputs.push(nodes[nodeName]);
                    nodes[nodeName].children.push(node);
                });
            });
            var returnNodeMap = functionDef.ret;
            functionDef.signature.outputArg.forEach(function (output) {
                var _a = __read(getNodeNameAndIndex(returnNodeMap[output.name]), 2), nodeName = _a[0], index = _a[1];
                var node = nodes[nodeName];
                if (node != null) {
                    node.defaultOutput = index;
                    outputs.push(node);
                }
            });
            var signature = this.mapArgsToSignature(functionDef);
            return { nodes: nodes, inputs: inputs, outputs: outputs, weights: weights, placeholders: placeholders, signature: signature };
        };
        OperationMapper.prototype.mapArgsToSignature = function (functionDef) {
            var _this = this;
            return {
                methodName: functionDef.signature.name,
                inputs: functionDef.signature.inputArg.reduce(function (map, arg) {
                    map[arg.name] = _this.mapArgToTensorInfo(arg);
                    return map;
                }, {}),
                outputs: functionDef.signature.outputArg.reduce(function (map, arg) {
                    map[arg.name] = _this.mapArgToTensorInfo(arg, functionDef.ret);
                    return map;
                }, {}),
            };
        };
        OperationMapper.prototype.mapArgToTensorInfo = function (arg, nameMap) {
            var name = arg.name;
            if (nameMap != null) {
                name = nameMap[name];
            }
            return { name: name, dtype: arg.type };
        };
        return OperationMapper;
    }());
    function decodeBase64(text) {
        var global = tfc.env().global;
        if (typeof global.atob !== 'undefined') {
            return global.atob(text);
        }
        else if (typeof Buffer !== 'undefined') {
            return new Buffer(text, 'base64').toString();
        }
        else {
            throw new Error('Unable to decode base64 in this environment. ' +
                'Missing built-in atob() or Buffer()');
        }
    }
    function parseStringParam(s, keepCase) {
        var value = Array.isArray(s) ? String.fromCharCode.apply(null, s) : decodeBase64(s);
        return keepCase ? value : value.toLowerCase();
    }
    function getStringParam(attrs, name, def, keepCase) {
        if (keepCase === void 0) { keepCase = false; }
        var param = attrs[name];
        if (param != null) {
            return parseStringParam(param.s, keepCase);
        }
        return def;
    }
    function getBoolParam(attrs, name, def) {
        var param = attrs[name];
        return param ? param.b : def;
    }
    function getNumberParam(attrs, name, def) {
        var param = attrs[name] || {};
        var value = param['i'] != null ? param['i'] : (param['f'] != null ? param['f'] : def);
        return (typeof value === 'number') ? value : parseInt(value, 10);
    }
    function parseDtypeParam(value) {
        if (typeof (value) === 'string') {
            // tslint:disable-next-line:no-any
            value = DataType[value];
        }
        switch (value) {
            case DataType.DT_FLOAT:
                return 'float32';
            case DataType.DT_INT32:
            case DataType.DT_INT64:
            case DataType.DT_INT8:
            case DataType.DT_UINT8:
                return 'int32';
            case DataType.DT_BOOL:
                return 'bool';
            case DataType.DT_DOUBLE:
                return 'float32';
            case DataType.DT_STRING:
                return 'string';
            default:
                // Unknown dtype error will happen at runtime (instead of parse time),
                // since these nodes might not be used by the actual subgraph execution.
                return null;
        }
    }
    function getFuncParam(attrs, name, def) {
        var param = attrs[name];
        if (param && param.func) {
            return param.func.name;
        }
        return def;
    }
    function getDtypeParam(attrs, name, def) {
        var param = attrs[name];
        if (param && param.type) {
            return parseDtypeParam(param.type);
        }
        return def;
    }
    function getDtypeArrayParam(attrs, name, def) {
        var param = attrs[name];
        if (param && param.list && param.list.type) {
            return param.list.type.map(function (v) { return parseDtypeParam(v); });
        }
        return def;
    }
    function parseTensorShapeParam(shape) {
        if (shape.unknownRank) {
            return undefined;
        }
        if (shape.dim != null) {
            return shape.dim.map(function (dim) {
                return (typeof dim.size === 'number') ? dim.size : parseInt(dim.size, 10);
            });
        }
        return [];
    }
    function getTensorShapeParam(attrs, name, def) {
        var param = attrs[name];
        if (param && param.shape) {
            return parseTensorShapeParam(param.shape);
        }
        return def;
    }
    function getNumericArrayParam(attrs, name, def) {
        var param = attrs[name];
        if (param) {
            return ((param.list.f && param.list.f.length ? param.list.f :
                param.list.i) ||
                [])
                .map(function (v) { return (typeof v === 'number') ? v : parseInt(v, 10); });
        }
        return def;
    }
    function getStringArrayParam(attrs, name, def, keepCase) {
        if (keepCase === void 0) { keepCase = false; }
        var param = attrs[name];
        if (param && param.list && param.list.s) {
            return param.list.s.map(function (v) {
                return parseStringParam(v, keepCase);
            });
        }
        return def;
    }
    function getTensorShapeArrayParam(attrs, name, def) {
        var param = attrs[name];
        if (param && param.list && param.list.shape) {
            return param.list.shape.map(function (v) {
                return parseTensorShapeParam(v);
            });
        }
        return def;
    }
    function getBoolArrayParam(attrs, name, def) {
        var param = attrs[name];
        if (param && param.list && param.list.b) {
            return param.list.b;
        }
        return def;
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
    /**
     * Helper class for lookup inputs and params for nodes in the model graph.
     */
    var NodeValueImpl = /** @class */ (function () {
        function NodeValueImpl(node, tensorMap, context) {
            var _this = this;
            this.node = node;
            this.tensorMap = tensorMap;
            this.context = context;
            this.inputs = [];
            this.attrs = {};
            this.inputs = node.inputNames.map(function (name) { return _this.getInput(name); });
            if (node.rawAttrs != null) {
                this.attrs = Object.keys(node.rawAttrs)
                    .reduce(function (attrs, key) {
                    attrs[key] = _this.getAttr(key);
                    return attrs;
                }, {});
            }
        }
        /**
         * Return the value of the attribute or input param.
         * @param name String: name of attribute or input param.
         */
        NodeValueImpl.prototype.getInput = function (name) {
            return getTensor(name, this.tensorMap, this.context);
        };
        /**
         * Return the value of the attribute or input param.
         * @param name String: name of attribute or input param.
         */
        NodeValueImpl.prototype.getAttr = function (name, defaultValue) {
            var value = this.node.rawAttrs[name];
            if (value.tensor != null) {
                return getTensor(name, this.tensorMap, this.context);
            }
            if (value.i != null || value.f != null) {
                return getNumberParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.s != null) {
                return getStringParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.b != null) {
                return getBoolParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.shape != null) {
                return getTensorShapeParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.type != null) {
                return getDtypeParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.list != null) {
                if (value.list.i != null || value.list.f != null) {
                    return getNumericArrayParam(this.node.rawAttrs, name, defaultValue);
                }
                if (value.list.s != null) {
                    return getStringArrayParam(this.node.rawAttrs, name, defaultValue);
                }
                if (value.list.shape != null) {
                    return getTensorShapeArrayParam(this.node.rawAttrs, name, defaultValue);
                }
                if (value.list.b != null) {
                    return getBoolArrayParam(this.node.rawAttrs, name, defaultValue);
                }
                if (value.list.type != null) {
                    return getDtypeArrayParam(this.node.rawAttrs, name, defaultValue);
                }
            }
            return defaultValue;
        };
        return NodeValueImpl;
    }());

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp = function (node, tensorMap, context) {
        switch (node.op) {
            case 'BiasAdd':
            case 'AddV2':
            case 'Add': {
                return [tfOps.add(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'AddN': {
                return [tfOps.addN(getParamValue('tensors', node, tensorMap, context))];
            }
            case 'FloorMod':
            case 'Mod':
                return [tfOps.mod(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            case 'Mul':
                return [tfOps.mul(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            case 'RealDiv':
            case 'Div': {
                return [tfOps.div(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'DivNoNan': {
                return [tfOps.divNoNan(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'FloorDiv': {
                return [tfOps.floorDiv(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'Sub': {
                return [tfOps.sub(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'Minimum': {
                return [tfOps.minimum(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'Maximum': {
                return [tfOps.maximum(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'Pow': {
                return [tfOps.pow(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'SquaredDifference': {
                return [tfOps.squaredDifference(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$1 = function (node, tensorMap, context) {
        switch (node.op) {
            case 'Abs':
            case 'ComplexAbs':
                return [tfOps.abs(getParamValue('x', node, tensorMap, context))];
            case 'Acos':
                return [tfOps.acos(getParamValue('x', node, tensorMap, context))];
            case 'Acosh':
                return [tfOps.acosh(getParamValue('x', node, tensorMap, context))];
            case 'Asin':
                return [tfOps.asin(getParamValue('x', node, tensorMap, context))];
            case 'Asinh':
                return [tfOps.asinh(getParamValue('x', node, tensorMap, context))];
            case 'Atan':
                return [tfOps.atan(getParamValue('x', node, tensorMap, context))];
            case 'Atan2':
                return [tfOps.atan2(getParamValue('x', node, tensorMap, context), getParamValue('y', node, tensorMap, context))];
            case 'Atanh':
                return [tfOps.atanh(getParamValue('x', node, tensorMap, context))];
            case 'Ceil':
                return [tfOps.ceil(getParamValue('x', node, tensorMap, context))];
            case 'Complex':
                return [tfOps.complex(getParamValue('real', node, tensorMap, context), getParamValue('imag', node, tensorMap, context))];
            case 'Cos':
                return [tfOps.cos(getParamValue('x', node, tensorMap, context))];
            case 'Cosh':
                return [tfOps.cosh(getParamValue('x', node, tensorMap, context))];
            case 'Elu':
                return [tfOps.elu(getParamValue('x', node, tensorMap, context))];
            case 'Erf':
                return [tfOps.erf(getParamValue('x', node, tensorMap, context))];
            case 'Exp':
                return [tfOps.exp(getParamValue('x', node, tensorMap, context))];
            case 'Expm1': {
                return [tfOps.expm1(getParamValue('x', node, tensorMap, context))];
            }
            case 'Floor':
                return [tfOps.floor(getParamValue('x', node, tensorMap, context))];
            case 'Log':
                return [tfOps.log(getParamValue('x', node, tensorMap, context))];
            case 'Log1p': {
                return [tfOps.log1p(getParamValue('x', node, tensorMap, context))];
            }
            case 'Imag':
                return [tfOps.imag(getParamValue('x', node, tensorMap, context))];
            case 'Neg':
                return [tfOps.neg(getParamValue('x', node, tensorMap, context))];
            case 'Reciprocal': {
                return [tfOps.reciprocal(getParamValue('x', node, tensorMap, context))];
            }
            case 'Real':
                return [tfOps.real(getParamValue('x', node, tensorMap, context))];
            case 'Relu':
                return [tfOps.relu(getParamValue('x', node, tensorMap, context))];
            case 'Round': {
                return [tfOps.round(getParamValue('x', node, tensorMap, context))];
            }
            case 'Selu':
                return [tfOps.selu(getParamValue('x', node, tensorMap, context))];
            case 'Sigmoid':
                return [tfOps.sigmoid(getParamValue('x', node, tensorMap, context))];
            case 'Sin':
                return [tfOps.sin(getParamValue('x', node, tensorMap, context))];
            case 'Sign': {
                return [tfOps.sign(getParamValue('x', node, tensorMap, context))];
            }
            case 'Sinh': {
                return [tfOps.sinh(getParamValue('x', node, tensorMap, context))];
            }
            case 'Softplus': {
                return [tfOps.softplus(getParamValue('x', node, tensorMap, context))];
            }
            case 'Sqrt': {
                return [tfOps.sqrt(getParamValue('x', node, tensorMap, context))];
            }
            case 'Square': {
                return [tfOps.square(getParamValue('x', node, tensorMap, context))];
            }
            case 'Tanh': {
                return [tfOps.tanh(getParamValue('x', node, tensorMap, context))];
            }
            case 'Tan':
                return [tfOps.tan(getParamValue('x', node, tensorMap, context))];
            case 'ClipByValue':
                return [tfOps.clipByValue(getParamValue('x', node, tensorMap, context), getParamValue('clipValueMin', node, tensorMap, context), getParamValue('clipValueMax', node, tensorMap, context))];
            case 'Relu6':
                return [tfOps.relu6(getParamValue('x', node, tensorMap, context))];
            case 'Rsqrt':
                return [tfOps.rsqrt(getTensor(node.inputNames[0], tensorMap, context))];
            case 'Prod':
                return [tfOps.prod(getParamValue('x', node, tensorMap, context), getParamValue('axes', node, tensorMap, context))];
            case 'LeakyRelu':
                return [tfOps.leakyRelu(getParamValue('x', node, tensorMap, context), getParamValue('alpha', node, tensorMap, context))];
            case 'Prelu':
                return [tfOps.prelu(getParamValue('x', node, tensorMap, context), getParamValue('alpha', node, tensorMap, context))];
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
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
     * Used by TensorList and TensorArray to verify if elementShape matches, support
     * negative value as the dim shape.
     * @param shapeA
     * @param shapeB
     * @param errorMessagePrefix
     */
    function assertShapesMatchAllowUndefinedSize(shapeA, shapeB, errorMessagePrefix) {
        if (errorMessagePrefix === void 0) { errorMessagePrefix = ''; }
        // constant shape means unknown rank
        if (typeof shapeA === 'number' || typeof shapeB === 'number') {
            return;
        }
        tfc.util.assert(shapeA.length === shapeB.length, function () { return errorMessagePrefix + (" Shapes " + shapeA + " and " + shapeB + " must match"); });
        for (var i = 0; i < shapeA.length; i++) {
            var dim0 = shapeA[i];
            var dim1 = shapeB[i];
            tfc.util.assert(dim0 < 0 || dim1 < 0 || dim0 === dim1, function () {
                return errorMessagePrefix + (" Shapes " + shapeA + " and " + shapeB + " must match");
            });
        }
    }
    function fullDefinedShape(elementShape) {
        if (typeof elementShape === 'number' || elementShape.some(function (dim) { return dim < 0; })) {
            return false;
        }
        return true;
    }
    /**
     * Generate the output element shape from the list elementShape, list tensors
     * and input param.
     * @param listElementShape
     * @param tensors
     * @param elementShape
     */
    function inferElementShape(listElementShape, tensors, elementShape) {
        var partialShape = mergeElementShape(listElementShape, elementShape);
        var notfullDefinedShape = !fullDefinedShape(partialShape);
        if (notfullDefinedShape && tensors.length === 0) {
            throw new Error("Tried to calculate elements of an empty list" +
                (" with non-fully-defined elementShape: " + partialShape));
        }
        if (notfullDefinedShape) {
            tensors.forEach(function (tensor) {
                partialShape = mergeElementShape(tensor.shape, partialShape);
            });
        }
        if (!fullDefinedShape(partialShape)) {
            throw new Error("Non-fully-defined elementShape: " + partialShape);
        }
        return partialShape;
    }
    function mergeElementShape(elementShapeA, elementShapeB) {
        if (typeof elementShapeA === 'number') {
            return elementShapeB;
        }
        if (typeof elementShapeB === 'number') {
            return elementShapeA;
        }
        if (elementShapeA.length !== elementShapeB.length) {
            throw new Error("Incompatible ranks during merge: " + elementShapeA + " vs. " + elementShapeB);
        }
        var result = [];
        for (var i = 0; i < elementShapeA.length; ++i) {
            var dim0 = elementShapeA[i];
            var dim1 = elementShapeB[i];
            if (dim0 >= 0 && dim1 >= 0 && dim0 !== dim1) {
                throw new Error("Incompatible shape during merge: " + elementShapeA + " vs. " + elementShapeB);
            }
            result[i] = dim0 >= 0 ? dim0 : dim1;
        }
        return result;
    }

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
     * The TensorArray object keeps an array of Tensors.  It
     * allows reading from the array and writing to the array.
     */
    var TensorArray = /** @class */ (function () {
        function TensorArray(name, dtype, maxSize, elementShape, identicalElementShapes, dynamicSize, clearAfterRead) {
            this.name = name;
            this.dtype = dtype;
            this.maxSize = maxSize;
            this.elementShape = elementShape;
            this.identicalElementShapes = identicalElementShapes;
            this.dynamicSize = dynamicSize;
            this.clearAfterRead = clearAfterRead;
            this.tensors = [];
            this.closed_ = false;
            this.idTensor = tfc.scalar(0);
            tfc.keep(this.idTensor);
        }
        Object.defineProperty(TensorArray.prototype, "id", {
            get: function () {
                return this.idTensor.id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TensorArray.prototype, "closed", {
            get: function () {
                return this.closed_;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Dispose the tensors and idTensor and mark the TensoryArray as closed.
         */
        TensorArray.prototype.clearAndClose = function (keepIds) {
            this.tensors.forEach(function (tensor) {
                if (keepIds == null || !keepIds.has(tensor.tensor.id)) {
                    tensor.tensor.dispose();
                }
            });
            this.tensors = [];
            this.closed_ = true;
            this.idTensor.dispose();
        };
        TensorArray.prototype.size = function () {
            return this.tensors.length;
        };
        /**
         * Read the value at location index in the TensorArray.
         * @param index Number the index to read from.
         */
        TensorArray.prototype.read = function (index) {
            if (this.closed_) {
                throw new Error("TensorArray " + this.name + " has already been closed.");
            }
            if (index < 0 || index >= this.size()) {
                throw new Error("Tried to read from index " + index + ", but array size is: " + this.size());
            }
            var tensorWithState = this.tensors[index];
            if (tensorWithState.cleared) {
                throw new Error("TensorArray " + this.name + ": Could not read index " + index + " twice because it was cleared after a previous read " +
                    "(perhaps try setting clear_after_read = false?).");
            }
            if (this.clearAfterRead) {
                tensorWithState.cleared = true;
            }
            tensorWithState.read = true;
            return tensorWithState.tensor;
        };
        /**
         * Helper method to read multiple tensors from the specified indices.
         */
        TensorArray.prototype.readMany = function (indices) {
            var _this = this;
            return indices.map(function (index) { return _this.read(index); });
        };
        /**
         * Write value into the index of the TensorArray.
         * @param index number the index to write to.
         * @param tensor
         */
        TensorArray.prototype.write = function (index, tensor) {
            if (this.closed_) {
                throw new Error("TensorArray " + this.name + " has already been closed.");
            }
            if (index < 0 || !this.dynamicSize && index >= this.maxSize) {
                throw new Error("Tried to write to index " + index + ", but array is not resizeable and size is: " + this.maxSize);
            }
            var t = this.tensors[index] || {};
            if (tensor.dtype !== this.dtype) {
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + index + ",\n          because the value dtype is " + tensor.dtype + ", but TensorArray dtype is " + this.dtype + ".");
            }
            // Set the shape for the first time write to unknow shape tensor array
            if (this.size() === 0 &&
                (this.elementShape == null || this.elementShape.length === 0)) {
                this.elementShape = tensor.shape;
            }
            assertShapesMatchAllowUndefinedSize(this.elementShape, tensor.shape, "TensorArray " + this.name + ": Could not write to TensorArray index " + index + ".");
            if (t.read) {
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + index + ", because it has already been read.");
            }
            if (t.written) {
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + index + ", because it has already been written.");
            }
            t.tensor = tensor;
            tfc.keep(tensor);
            t.written = true;
            this.tensors[index] = t;
        };
        /**
         * Helper method to write multiple tensors to the specified indices.
         */
        TensorArray.prototype.writeMany = function (indices, tensors) {
            var _this = this;
            if (indices.length !== tensors.length) {
                throw new Error("TensorArray " + this.name + ": could not write multiple tensors," +
                    ("because the index size: " + indices.length + " is not the same as tensors size: " + tensors.length + "."));
            }
            indices.forEach(function (i, index) { return _this.write(i, tensors[index]); });
        };
        /**
         * Return selected values in the TensorArray as a packed Tensor. All of
         * selected values must have been written and their shapes must all match.
         * @param [indices] number[] Optional. Taking values in [0, max_value). If the
         *    TensorArray is not dynamic, max_value=size(). If not specified returns
         *    all tensors in the original order.
         * @param [dtype]
         */
        TensorArray.prototype.gather = function (indices, dtype) {
            if (!!dtype && dtype !== this.dtype) {
                throw new Error("TensorArray dtype is " + this.dtype + " but gather requested dtype " + dtype);
            }
            if (!indices) {
                indices = [];
                for (var i = 0; i < this.size(); i++) {
                    indices.push(i);
                }
            }
            else {
                indices = indices.slice(0, this.size());
            }
            if (indices.length === 0) {
                return tfc.tensor([], [0].concat(this.elementShape));
            }
            // Read all the PersistentTensors into a vector to keep track of
            // their memory.
            var tensors = this.readMany(indices);
            assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, 'TensorArray shape mismatch: ');
            return tfc.stack(tensors, 0);
        };
        /**
         * Return the values in the TensorArray as a concatenated Tensor.
         */
        TensorArray.prototype.concat = function (dtype) {
            if (!!dtype && dtype !== this.dtype) {
                throw new Error("TensorArray dtype is " + this.dtype + " but concat requested dtype " + dtype);
            }
            if (this.size() === 0) {
                return tfc.tensor([], [0].concat(this.elementShape));
            }
            var indices = [];
            for (var i = 0; i < this.size(); i++) {
                indices.push(i);
            }
            // Collect all the tensors from the tensors array.
            var tensors = this.readMany(indices);
            assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, "TensorArray shape mismatch: tensor array shape (" + this.elementShape + ") vs first tensor shape (" + tensors[0].shape + ")");
            return tfc.concat(tensors, 0);
        };
        /**
         * Scatter the values of a Tensor in specific indices of a TensorArray.
         * @param indices nummber[] values in [0, max_value). If the
         *    TensorArray is not dynamic, max_value=size().
         * @param tensor Tensor input tensor.
         */
        TensorArray.prototype.scatter = function (indices, tensor) {
            if (tensor.dtype !== this.dtype) {
                throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + tensor.dtype);
            }
            if (indices.length !== tensor.shape[0]) {
                throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + indices.length + " vs. " + tensor.shape[0]);
            }
            var maxIndex = Math.max.apply(Math, __spread(indices));
            if (!this.dynamicSize && maxIndex >= this.maxSize) {
                throw new Error("Max index must be < array size (" + maxIndex + "  vs. " + this.maxSize + ")");
            }
            this.writeMany(indices, tfc.unstack(tensor, 0));
        };
        /**
         * Split the values of a Tensor into the TensorArray.
         * @param length number[] with the lengths to use when splitting value along
         *    its first dimension.
         * @param tensor Tensor, the tensor to split.
         */
        TensorArray.prototype.split = function (length, tensor) {
            var _this = this;
            if (tensor.dtype !== this.dtype) {
                throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + tensor.dtype);
            }
            var totalLength = 0;
            var cumulativeLengths = length.map(function (len) {
                totalLength += len;
                return totalLength;
            });
            if (totalLength !== tensor.shape[0]) {
                throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + totalLength + ", and tensor's shape is: " + tensor.shape);
            }
            if (!this.dynamicSize && length.length !== this.maxSize) {
                throw new Error("TensorArray's size is not equal to the size of lengths (" + this.maxSize + " vs. " + length.length + "), " +
                    'and the TensorArray is not marked as dynamically resizeable');
            }
            var elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
            var tensors = [];
            tfc.tidy(function () {
                tensor = tfc.reshape(tensor, [1, totalLength, elementPerRow]);
                for (var i = 0; i < length.length; ++i) {
                    var previousLength = (i === 0) ? 0 : cumulativeLengths[i - 1];
                    var indices_1 = [0, previousLength, 0];
                    var sizes = [1, length[i], elementPerRow];
                    tensors[i] = tfc.reshape(tfc.slice(tensor, indices_1, sizes), _this.elementShape);
                }
                return tensors;
            });
            var indices = [];
            for (var i = 0; i < length.length; i++) {
                indices[i] = i;
            }
            this.writeMany(indices, tensors);
        };
        return TensorArray;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
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
     * TensorList stores a container of `tf.Tensor` objects, which are accessible
     * via tensors field.
     *
     * In order to get a copy of the underlying list, use the copy method:
     * ```
     *    TensorList b = a.copy();
     *    b.tensors().pushBack(t);  // This does not modify a.tensors().
     * ```
     *
     * Note that this is not a deep copy: the memory locations of the underlying
     * tensors will still point to the same locations of the corresponding tensors
     * in the original.
     */
    var TensorList = /** @class */ (function () {
        /**
         *
         * @param tensors list of tensors
         * @param elementShape shape of each tensor, this can be a single number (any
         * shape is allowed) or partial shape (dim = -1).
         * @param elementDtype data type of each tensor
         * @param maxNumElements The maximum allowed size of `tensors`. Defaults to -1
         *   meaning that the size of `tensors` is unbounded.
         */
        function TensorList(tensors, elementShape, elementDtype, maxNumElements) {
            if (maxNumElements === void 0) { maxNumElements = -1; }
            this.tensors = tensors;
            this.elementShape = elementShape;
            this.elementDtype = elementDtype;
            if (tensors != null) {
                tensors.forEach(function (tensor) {
                    if (elementDtype !== tensor.dtype) {
                        throw new Error("Invalid data types; op elements " + elementDtype + ", but list elements " + tensor.dtype);
                    }
                    assertShapesMatchAllowUndefinedSize(elementShape, tensor.shape, 'TensorList shape mismatch: ');
                    tfc.keep(tensor);
                });
            }
            this.idTensor = tfc.scalar(0);
            this.maxNumElements = maxNumElements;
            tfc.keep(this.idTensor);
        }
        Object.defineProperty(TensorList.prototype, "id", {
            get: function () {
                return this.idTensor.id;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Get a new TensorList containing a copy of the underlying tensor container.
         */
        TensorList.prototype.copy = function () {
            return new TensorList(__spread(this.tensors), this.elementShape, this.elementDtype);
        };
        /**
         * Dispose the tensors and idTensor and clear the tensor list.
         */
        TensorList.prototype.clearAndClose = function (keepIds) {
            this.tensors.forEach(function (tensor) {
                if (keepIds == null || !keepIds.has(tensor.id)) {
                    tensor.dispose();
                }
            });
            this.tensors.length = 0;
            this.idTensor.dispose();
        };
        /**
         * The size of the tensors in the tensor list.
         */
        TensorList.prototype.size = function () {
            return this.tensors.length;
        };
        /**
         * Return a tensor that stacks a list of rank-R tf.Tensors into one rank-(R+1)
         * tf.Tensor.
         * @param elementShape shape of each tensor
         * @param elementDtype data type of each tensor
         * @param numElements the number of elements to stack
         */
        TensorList.prototype.stack = function (elementShape, elementDtype, numElements) {
            var _this = this;
            if (numElements === void 0) { numElements = -1; }
            if (elementDtype !== this.elementDtype) {
                throw new Error("Invalid data types; op elements " + elementDtype + ", but list elements " + this.elementDtype);
            }
            if (numElements !== -1 && this.tensors.length !== numElements) {
                throw new Error("Operation expected a list with " + numElements + " elements but got a list with " + this.tensors.length + " elements.");
            }
            assertShapesMatchAllowUndefinedSize(elementShape, this.elementShape, 'TensorList shape mismatch: ');
            var outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
            return tfc.tidy(function () {
                var reshapedTensors = _this.tensors.map(function (tensor) { return tfc.reshape(tensor, outputElementShape); });
                return tfc.stack(reshapedTensors, 0);
            });
        };
        /**
         * Pop a tensor from the end of the list.
         * @param elementShape shape of the tensor
         * @param elementDtype data type of the tensor
         */
        TensorList.prototype.popBack = function (elementShape, elementDtype) {
            if (elementDtype !== this.elementDtype) {
                throw new Error("Invalid data types; op elements " + elementDtype + ", but list elements " + this.elementDtype);
            }
            if (this.size() === 0) {
                throw new Error('Trying to pop from an empty list.');
            }
            var outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
            var tensor = this.tensors.pop();
            assertShapesMatchAllowUndefinedSize(tensor.shape, elementShape, 'TensorList shape mismatch: ');
            return tfc.reshape(tensor, outputElementShape);
        };
        /**
         * Push a tensor to the end of the list.
         * @param tensor Tensor to be pushed.
         */
        TensorList.prototype.pushBack = function (tensor) {
            if (tensor.dtype !== this.elementDtype) {
                throw new Error("Invalid data types; op elements " + tensor.dtype + ", but list elements " + this.elementDtype);
            }
            assertShapesMatchAllowUndefinedSize(tensor.shape, this.elementShape, 'TensorList shape mismatch: ');
            if (this.maxNumElements === this.size()) {
                throw new Error("Trying to push element into a full list.");
            }
            tfc.keep(tensor);
            this.tensors.push(tensor);
        };
        /**
         * Update the size of the list.
         * @param size the new size of the list.
         */
        TensorList.prototype.resize = function (size) {
            if (size < 0) {
                throw new Error("TensorListResize expects size to be non-negative. Got: " + size);
            }
            if (this.maxNumElements !== -1 && size > this.maxNumElements) {
                throw new Error("TensorListResize input size " + size + " is greater maxNumElement " + this.maxNumElements + ".");
            }
            this.tensors.length = size;
        };
        /**
         * Retrieve the element at the provided index
         * @param elementShape shape of the tensor
         * @param elementDtype dtype of the tensor
         * @param elementIndex index of the tensor
         */
        TensorList.prototype.getItem = function (elementIndex, elementShape, elementDtype) {
            if (elementDtype !== this.elementDtype) {
                throw new Error("Invalid data types; op elements " + elementDtype + ", but list elements " + this.elementDtype);
            }
            if (elementIndex < 0 || elementIndex > this.tensors.length) {
                throw new Error("Trying to access element " + elementIndex + " in a list with " + this.tensors.length + " elements.");
            }
            if (this.tensors[elementIndex] == null) {
                throw new Error("element at index " + elementIndex + " is null.");
            }
            assertShapesMatchAllowUndefinedSize(this.tensors[elementIndex].shape, elementShape, 'TensorList shape mismatch: ');
            var outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
            return tfc.reshape(this.tensors[elementIndex], outputElementShape);
        };
        /**
         * Set the tensor at the index
         * @param elementIndex index of the tensor
         * @param tensor the tensor to be inserted into the list
         */
        TensorList.prototype.setItem = function (elementIndex, tensor) {
            if (tensor.dtype !== this.elementDtype) {
                throw new Error("Invalid data types; op elements " + tensor.dtype + ", but list elements " + this.elementDtype);
            }
            if (elementIndex < 0 ||
                this.maxNumElements !== -1 && elementIndex >= this.maxNumElements) {
                throw new Error("Trying to set element " + elementIndex + " in a list with max " + this.maxNumElements + " elements.");
            }
            assertShapesMatchAllowUndefinedSize(this.elementShape, tensor.shape, 'TensorList shape mismatch: ');
            tfc.keep(tensor);
            this.tensors[elementIndex] = tensor;
        };
        /**
         * Return selected values in the TensorList as a stacked Tensor. All of
         * selected values must have been written and their shapes must all match.
         * @param indices indices of tensors to gather
         * @param elementDtype output tensor dtype
         * @param elementShape output tensor element shape
         */
        TensorList.prototype.gather = function (indices, elementDtype, elementShape) {
            var _this = this;
            if (elementDtype !== this.elementDtype) {
                throw new Error("Invalid data types; op elements " + elementDtype + ", but list elements " + this.elementDtype);
            }
            assertShapesMatchAllowUndefinedSize(this.elementShape, elementShape, 'TensorList shape mismatch: ');
            // When indices is greater than the size of the list, indices beyond the
            // size of the list are ignored.
            indices = indices.slice(0, this.size());
            var outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
            if (indices.length === 0) {
                return tfc.tensor([], [0].concat(outputElementShape));
            }
            return tfc.tidy(function () {
                var tensors = indices.map(function (i) { return tfc.reshape(_this.tensors[i], outputElementShape); });
                return tfc.stack(tensors, 0);
            });
        };
        /**
         * Return the values in the TensorList as a concatenated Tensor.
         * @param elementDtype output tensor dtype
         * @param elementShape output tensor element shape
         */
        TensorList.prototype.concat = function (elementDtype, elementShape) {
            var _this = this;
            if (!!elementDtype && elementDtype !== this.elementDtype) {
                throw new Error("TensorList dtype is " + this.elementDtype + " but concat requested dtype " + elementDtype);
            }
            assertShapesMatchAllowUndefinedSize(this.elementShape, elementShape, 'TensorList shape mismatch: ');
            var outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
            if (this.size() === 0) {
                return tfc.tensor([], [0].concat(outputElementShape));
            }
            return tfc.tidy(function () {
                var tensors = _this.tensors.map(function (t) { return tfc.reshape(t, outputElementShape); });
                return tfc.concat(tensors, 0);
            });
        };
        return TensorList;
    }());
    /**
     * Creates a TensorList which, when stacked, has the value of tensor.
     * @param tensor from tensor
     * @param elementShape output tensor element shape
     */
    function fromTensor(tensor, elementShape, elementDtype) {
        var dtype = tensor.dtype;
        if (tensor.shape.length < 1) {
            throw new Error("Tensor must be at least a vector, but saw shape: " + tensor.shape);
        }
        if (tensor.dtype !== elementDtype) {
            throw new Error("Invalid data types; op elements " + tensor.dtype + ", but list elements " + elementDtype);
        }
        var tensorElementShape = tensor.shape.slice(1);
        assertShapesMatchAllowUndefinedSize(tensorElementShape, elementShape, 'TensorList shape mismatch: ');
        var tensorList = tfc.unstack(tensor);
        return new TensorList(tensorList, elementShape, dtype);
    }
    /**
     * Return a TensorList of the given size with empty elements.
     * @param elementShape the shape of the future elements of the list
     * @param elementDtype the desired type of elements in the list
     * @param numElements the number of elements to reserve
     */
    function reserve(elementShape, elementDtype, numElements) {
        return new TensorList([], elementShape, elementDtype, numElements);
    }
    /**
     * Put tensors at specific indices of a stacked tensor into a TensorList.
     * @param indices list of indices on how to scatter the tensor.
     * @param tensor input tensor.
     * @param elementShape the shape of the future elements of the list
     * @param numElements the number of elements to scatter
     */
    function scatter(tensor, indices, elementShape, numElements) {
        if (indices.length !== tensor.shape[0]) {
            throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + indices.length + " vs. " + tensor.shape[0]);
        }
        var maxIndex = Math.max.apply(Math, __spread(indices));
        if (numElements != null && numElements !== -1 && maxIndex >= numElements) {
            throw new Error("Max index must be < array size (" + maxIndex + "  vs. " + numElements + ")");
        }
        var list = new TensorList([], elementShape, tensor.dtype, numElements);
        var tensors = tfc.unstack(tensor, 0);
        indices.forEach(function (value, index) {
            list.setItem(value, tensors[index]);
        });
        return list;
    }
    /**
     * Split the values of a Tensor into a TensorList.
     * @param length the lengths to use when splitting value along
     *    its first dimension.
     * @param tensor the tensor to split.
     * @param elementShape the shape of the future elements of the list
     */
    function split(tensor, length, elementShape) {
        var totalLength = 0;
        var cumulativeLengths = length.map(function (len) {
            totalLength += len;
            return totalLength;
        });
        if (totalLength !== tensor.shape[0]) {
            throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + totalLength + ", and tensor's shape is: " + tensor.shape);
        }
        var shapeWithoutFirstDim = tensor.shape.slice(1);
        var outputElementShape = mergeElementShape(shapeWithoutFirstDim, elementShape);
        var elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
        var tensors = tfc.tidy(function () {
            var tensors = [];
            tensor = tfc.reshape(tensor, [1, totalLength, elementPerRow]);
            for (var i = 0; i < length.length; ++i) {
                var previousLength = (i === 0) ? 0 : cumulativeLengths[i - 1];
                var indices = [0, previousLength, 0];
                var sizes = [1, length[i], elementPerRow];
                tensors[i] = tfc.reshape(tfc.slice(tensor, indices, sizes), outputElementShape);
            }
            tensor.dispose();
            return tensors;
        });
        var list = new TensorList([], elementShape, tensor.dtype, length.length);
        for (var i = 0; i < tensors.length; i++) {
            list.setItem(i, tensors[i]);
        }
        return list;
    }

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var _this = undefined;
    var executeOp$2 = function (node, tensorMap, context) { return __awaiter(_this, void 0, void 0, function () {
        var _a, thenFunc, elseFunc, cond, args, condValue, bodyFunc, condFunc, args, condResult, argIds_1, condValue, result, _loop_1, pred, pred, data, inputName, data, frameId, data, data, data, size, dtype, elementShape, dynamicSize, clearAfterRead, identicalElementShapes, name_1, tensorArray, id, index, writeTensor, writeTensorArray, readId, readIndex, readTensorArray, gatherId, gatherIndices, gatherDtype, gatherTensorArray, scatterId, scatterIndices, scatterTensor, scatterTensorArray, concatId, concatTensorArray, concatDtype, splitId, splitTensor, lengths, splitTensorArray, sizeId, sizeTensorArray, closeId, closeTensorArray, idTensor, index, writeTensor, tensorList, idTensor, readIndex, elementShape, elementDType, tensorList, scatterIndices, scatterTensor, elementShape, numElements, tensorList, elementShape, elementDtype, numElementsParam, numElements, tensorList, gatherId, gatherIndices, elementShape, elementDtype, tensorList, idTensor, elementShape, elementDtype, numElements, tensorList, tensor, elementShape, elementDtype, tensorList, concatId, tensorList, concatDtype, elementShape, idTensor, writeTensor, tensorList, idTensor, elementShape, elementDType, tensorList, splitTensor, elementShape, lengths, tensorList;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = node.op;
                    switch (_a) {
                        case 'If': return [3 /*break*/, 1];
                        case 'StatelessIf': return [3 /*break*/, 1];
                        case 'While': return [3 /*break*/, 3];
                        case 'StatelessWhile': return [3 /*break*/, 3];
                        case 'LoopCond': return [3 /*break*/, 9];
                        case 'Switch': return [3 /*break*/, 10];
                        case 'Merge': return [3 /*break*/, 12];
                        case 'Enter': return [3 /*break*/, 13];
                        case 'Exit': return [3 /*break*/, 14];
                        case 'NextIteration': return [3 /*break*/, 15];
                        case 'TensorArrayV3': return [3 /*break*/, 16];
                        case 'TensorArrayWriteV3': return [3 /*break*/, 17];
                        case 'TensorArrayReadV3': return [3 /*break*/, 18];
                        case 'TensorArrayGatherV3': return [3 /*break*/, 19];
                        case 'TensorArrayScatterV3': return [3 /*break*/, 20];
                        case 'TensorArrayConcatV3': return [3 /*break*/, 21];
                        case 'TensorArraySplitV3': return [3 /*break*/, 22];
                        case 'TensorArraySizeV3': return [3 /*break*/, 23];
                        case 'TensorArrayCloseV3': return [3 /*break*/, 24];
                        case 'TensorListSetItem': return [3 /*break*/, 25];
                        case 'TensorListGetItem': return [3 /*break*/, 26];
                        case 'TensorListScatterV2': return [3 /*break*/, 27];
                        case 'TensorListScatter': return [3 /*break*/, 27];
                        case 'TensorListReserve': return [3 /*break*/, 28];
                        case 'EmptyTensorList': return [3 /*break*/, 28];
                        case 'TensorListGather': return [3 /*break*/, 29];
                        case 'TensorListStack': return [3 /*break*/, 30];
                        case 'TensorListFromTensor': return [3 /*break*/, 31];
                        case 'TensorListConcat': return [3 /*break*/, 32];
                        case 'TensorListPushBack': return [3 /*break*/, 33];
                        case 'TensorListPopBack': return [3 /*break*/, 34];
                        case 'TensorListSplit': return [3 /*break*/, 35];
                    }
                    return [3 /*break*/, 36];
                case 1:
                    thenFunc = getParamValue('thenBranch', node, tensorMap, context);
                    elseFunc = getParamValue('elseBranch', node, tensorMap, context);
                    cond = getParamValue('cond', node, tensorMap, context);
                    args = getParamValue('args', node, tensorMap, context);
                    return [4 /*yield*/, cond.data()];
                case 2:
                    condValue = _b.sent();
                    if (condValue[0]) {
                        return [2 /*return*/, context.functionMap[thenFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap)];
                    }
                    else {
                        return [2 /*return*/, context.functionMap[elseFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap)];
                    }
                case 3:
                    bodyFunc = getParamValue('body', node, tensorMap, context);
                    condFunc = getParamValue('cond', node, tensorMap, context);
                    args = getParamValue('args', node, tensorMap, context);
                    return [4 /*yield*/, context.functionMap[condFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap)];
                case 4:
                    condResult = (_b.sent());
                    argIds_1 = args.map(function (tensor) { return tensor.id; });
                    return [4 /*yield*/, condResult[0].data()];
                case 5:
                    condValue = _b.sent();
                    // Dispose the intermediate tensors for condition function
                    condResult.forEach(function (tensor) {
                        if (!tensor.kept && argIds_1.indexOf(tensor.id) === -1) {
                            tensor.dispose();
                        }
                    });
                    result = args;
                    _loop_1 = function () {
                        var origResult, resultIds, condResult_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    origResult = result;
                                    return [4 /*yield*/, context.functionMap[bodyFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap)];
                                case 1:
                                    // Execution the body of the loop
                                    result = _a.sent();
                                    resultIds = result.map(function (tensor) { return tensor.id; });
                                    // Dispose the intermediate tensor for body function that is not global
                                    // kept, not input/output of the body function
                                    origResult.forEach(function (tensor) {
                                        if (!tensor.kept && argIds_1.indexOf(tensor.id) === -1 &&
                                            resultIds.indexOf(tensor.id) === -1) {
                                            tensor.dispose();
                                        }
                                    });
                                    return [4 /*yield*/, context.functionMap[condFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap)];
                                case 2:
                                    condResult_1 = (_a.sent());
                                    return [4 /*yield*/, condResult_1[0].data()];
                                case 3:
                                    condValue = _a.sent();
                                    // Dispose the intermediate tensors for condition function
                                    condResult_1.forEach(function (tensor) {
                                        if (!tensor.kept && argIds_1.indexOf(tensor.id) === -1 &&
                                            resultIds.indexOf(tensor.id) === -1) {
                                            tensor.dispose();
                                        }
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _b.label = 6;
                case 6:
                    if (!condValue[0]) return [3 /*break*/, 8];
                    return [5 /*yield**/, _loop_1()];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 8: return [2 /*return*/, result];
                case 9:
                    {
                        pred = getParamValue('pred', node, tensorMap, context);
                        return [2 /*return*/, [cloneTensor(pred)]];
                    }
                case 10:
                    pred = getParamValue('pred', node, tensorMap, context);
                    data = getParamValue('data', node, tensorMap, context);
                    if (!data.kept) {
                        data = cloneTensor(data);
                    }
                    return [4 /*yield*/, pred.data()];
                case 11: 
                // Outputs nodes :0 => false, :1 => true
                return [2 /*return*/, (_b.sent())[0] ? [undefined, data] : [data, undefined]];
                case 12:
                    {
                        inputName = node.inputNames.find(function (name) { return getTensor(name, tensorMap, context) !== undefined; });
                        if (inputName) {
                            data = getTensor(inputName, tensorMap, context);
                            return [2 /*return*/, [cloneTensor(data)]];
                        }
                        return [2 /*return*/, undefined];
                    }
                case 13:
                    {
                        frameId = getParamValue('frameName', node, tensorMap, context);
                        data = getParamValue('tensor', node, tensorMap, context);
                        context.enterFrame(frameId);
                        return [2 /*return*/, [cloneTensor(data)]];
                    }
                case 14:
                    {
                        data = getParamValue('tensor', node, tensorMap, context);
                        context.exitFrame();
                        return [2 /*return*/, [cloneTensor(data)]];
                    }
                case 15:
                    {
                        data = getParamValue('tensor', node, tensorMap, context);
                        context.nextIteration();
                        return [2 /*return*/, [cloneTensor(data)]];
                    }
                case 16:
                    {
                        size = getParamValue('size', node, tensorMap, context);
                        dtype = getParamValue('dtype', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        dynamicSize = getParamValue('dynamicSize', node, tensorMap, context);
                        clearAfterRead = getParamValue('clearAfterRead', node, tensorMap, context);
                        identicalElementShapes = getParamValue('identicalElementShapes', node, tensorMap, context);
                        name_1 = getParamValue('name', node, tensorMap, context);
                        tensorArray = new TensorArray(name_1, dtype, size, elementShape, identicalElementShapes, dynamicSize, clearAfterRead);
                        context.addTensorArray(tensorArray);
                        return [2 /*return*/, [tensorArray.idTensor, tfc.scalar(1.0)]];
                    }
                case 17:
                    {
                        id = getParamValue('tensorArrayId', node, tensorMap, context);
                        index = getParamValue('index', node, tensorMap, context);
                        writeTensor = getParamValue('tensor', node, tensorMap, context);
                        writeTensorArray = context.getTensorArray(id.id);
                        writeTensorArray.write(index, writeTensor);
                        return [2 /*return*/, [writeTensorArray.idTensor]];
                    }
                case 18:
                    {
                        readId = getParamValue('tensorArrayId', node, tensorMap, context);
                        readIndex = getParamValue('index', node, tensorMap, context);
                        readTensorArray = context.getTensorArray(readId.id);
                        return [2 /*return*/, [readTensorArray.read(readIndex)]];
                    }
                case 19:
                    {
                        gatherId = getParamValue('tensorArrayId', node, tensorMap, context);
                        gatherIndices = getParamValue('indices', node, tensorMap, context);
                        gatherDtype = getParamValue('dtype', node, tensorMap, context);
                        gatherTensorArray = context.getTensorArray(gatherId.id);
                        return [2 /*return*/, [gatherTensorArray.gather(gatherIndices, gatherDtype)]];
                    }
                case 20:
                    {
                        scatterId = getParamValue('tensorArrayId', node, tensorMap, context);
                        scatterIndices = getParamValue('indices', node, tensorMap, context);
                        scatterTensor = getParamValue('tensor', node, tensorMap, context);
                        scatterTensorArray = context.getTensorArray(scatterId.id);
                        scatterTensorArray.scatter(scatterIndices, scatterTensor);
                        return [2 /*return*/, [scatterTensorArray.idTensor]];
                    }
                case 21:
                    {
                        concatId = getParamValue('tensorArrayId', node, tensorMap, context);
                        concatTensorArray = context.getTensorArray(concatId.id);
                        concatDtype = getParamValue('dtype', node, tensorMap, context);
                        return [2 /*return*/, [concatTensorArray.concat(concatDtype)]];
                    }
                case 22:
                    {
                        splitId = getParamValue('tensorArrayId', node, tensorMap, context);
                        splitTensor = getParamValue('tensor', node, tensorMap, context);
                        lengths = getParamValue('lengths', node, tensorMap, context);
                        splitTensorArray = context.getTensorArray(splitId.id);
                        splitTensorArray.split(lengths, splitTensor);
                        return [2 /*return*/, [splitTensorArray.idTensor]];
                    }
                case 23:
                    {
                        sizeId = getParamValue('tensorArrayId', node, tensorMap, context);
                        sizeTensorArray = context.getTensorArray(sizeId.id);
                        return [2 /*return*/, [tfc.scalar(sizeTensorArray.size(), 'int32')]];
                    }
                case 24:
                    {
                        closeId = getParamValue('tensorArrayId', node, tensorMap, context);
                        closeTensorArray = context.getTensorArray(closeId.id);
                        closeTensorArray.clearAndClose();
                        return [2 /*return*/, [closeTensorArray.idTensor]];
                    }
                case 25:
                    {
                        idTensor = getParamValue('tensorListId', node, tensorMap, context);
                        index = getParamValue('index', node, tensorMap, context);
                        writeTensor = getParamValue('tensor', node, tensorMap, context);
                        tensorList = context.getTensorList(idTensor.id);
                        tensorList.setItem(index, writeTensor);
                        return [2 /*return*/, [tensorList.idTensor]];
                    }
                case 26:
                    {
                        idTensor = getParamValue('tensorListId', node, tensorMap, context);
                        readIndex = getParamValue('index', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        elementDType = getParamValue('elementDType', node, tensorMap, context);
                        tensorList = context.getTensorList(idTensor.id);
                        return [2 /*return*/, [tensorList.getItem(readIndex, elementShape, elementDType)]];
                    }
                case 27:
                    {
                        scatterIndices = getParamValue('indices', node, tensorMap, context);
                        scatterTensor = getParamValue('tensor', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        numElements = getParamValue('numElements', node, tensorMap, context);
                        tensorList = scatter(scatterTensor, scatterIndices, elementShape, numElements);
                        context.addTensorList(tensorList);
                        return [2 /*return*/, [tensorList.idTensor]];
                    }
                case 28:
                    {
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        elementDtype = getParamValue('elementDType', node, tensorMap, context);
                        numElementsParam = void 0;
                        if (node.op === 'TensorListReserve') {
                            numElementsParam = 'numElements';
                        }
                        else {
                            numElementsParam = 'maxNumElements';
                        }
                        numElements = getParamValue(numElementsParam, node, tensorMap, context);
                        tensorList = reserve(elementShape, elementDtype, numElements);
                        context.addTensorList(tensorList);
                        return [2 /*return*/, [tensorList.idTensor]];
                    }
                case 29:
                    {
                        gatherId = getParamValue('tensorListId', node, tensorMap, context);
                        gatherIndices = getParamValue('indices', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        elementDtype = getParamValue('elementDType', node, tensorMap, context);
                        tensorList = context.getTensorList(gatherId.id);
                        return [2 /*return*/, [tensorList.gather(gatherIndices, elementDtype, elementShape)]];
                    }
                case 30:
                    {
                        idTensor = getParamValue('tensorListId', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        elementDtype = getParamValue('elementDType', node, tensorMap, context);
                        numElements = getParamValue('numElements', node, tensorMap, context);
                        tensorList = context.getTensorList(idTensor.id);
                        return [2 /*return*/, [tensorList.stack(elementShape, elementDtype, numElements)]];
                    }
                case 31:
                    {
                        tensor = getParamValue('tensor', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        elementDtype = getParamValue('elementDType', node, tensorMap, context);
                        tensorList = fromTensor(tensor, elementShape, elementDtype);
                        context.addTensorList(tensorList);
                        return [2 /*return*/, [tensorList.idTensor]];
                    }
                case 32:
                    {
                        concatId = getParamValue('tensorListId', node, tensorMap, context);
                        tensorList = context.getTensorList(concatId.id);
                        concatDtype = getParamValue('dtype', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        return [2 /*return*/, [tensorList.concat(concatDtype, elementShape)]];
                    }
                case 33:
                    {
                        idTensor = getParamValue('tensorListId', node, tensorMap, context);
                        writeTensor = getParamValue('tensor', node, tensorMap, context);
                        tensorList = context.getTensorList(idTensor.id);
                        tensorList.pushBack(writeTensor);
                        return [2 /*return*/, [tensorList.idTensor]];
                    }
                case 34:
                    {
                        idTensor = getParamValue('tensorListId', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        elementDType = getParamValue('elementDType', node, tensorMap, context);
                        tensorList = context.getTensorList(idTensor.id);
                        return [2 /*return*/, [tensorList.popBack(elementShape, elementDType)]];
                    }
                case 35:
                    {
                        splitTensor = getParamValue('tensor', node, tensorMap, context);
                        elementShape = getParamValue('elementShape', node, tensorMap, context);
                        lengths = getParamValue('lengths', node, tensorMap, context);
                        tensorList = split(splitTensor, lengths, elementShape);
                        context.addTensorList(tensorList);
                        return [2 /*return*/, [tensorList.idTensor]];
                    }
                case 36: throw TypeError("Node type " + node.op + " is not implemented");
            }
        });
    }); };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    function fusedConvAndDepthWiseParams(node, tensorMap, context) {
        var _a = __read(getParamValue('fusedOps', node, tensorMap, context), 2), extraOp = _a[0], activationFunc = _a[1];
        var isBiasAdd = extraOp === 'biasadd';
        var isPrelu = activationFunc === 'prelu';
        var isBatchNorm = extraOp === 'fusedbatchnorm';
        var numArgs = getParamValue('numArgs', node, tensorMap, context);
        if (isBiasAdd) {
            if (isPrelu && numArgs !== 2) {
                throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu ' +
                    'must have two extra arguments: bias and alpha.');
            }
            if (!isPrelu && numArgs !== 1) {
                throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd must have ' +
                    'one extra argument: bias.');
            }
        }
        if (isBatchNorm) {
            throw new Error('FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.');
        }
        var stride = getParamValue('strides', node, tensorMap, context);
        var pad = getPadding(node, tensorMap, context);
        var dataFormat = getParamValue('dataFormat', node, tensorMap, context)
            .toUpperCase();
        var dilations = getParamValue('dilations', node, tensorMap, context);
        var _b = __read(getParamValue('args', node, tensorMap, context), 2), biasArg = _b[0], preluArg = _b[1];
        var leakyreluAlpha = getParamValue('leakyreluAlpha', node, tensorMap, context);
        return {
            stride: stride,
            pad: pad,
            dataFormat: dataFormat,
            dilations: dilations,
            biasArg: biasArg,
            preluArg: preluArg,
            activationFunc: activationFunc,
            leakyreluAlpha: leakyreluAlpha
        };
    }
    var executeOp$3 = function (node, tensorMap, context) {
        switch (node.op) {
            case 'Conv1D': {
                var stride = getParamValue('stride', node, tensorMap, context);
                var pad = getParamValue('pad', node, tensorMap, context);
                var dataFormat = getParamValue('dataFormat', node, tensorMap, context)
                    .toUpperCase();
                var dilation = getParamValue('dilation', node, tensorMap, context);
                return [tfOps.conv1d(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), stride, pad, dataFormat, dilation)];
            }
            case 'Conv2D': {
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getPadding(node, tensorMap, context);
                var dataFormat = getParamValue('dataFormat', node, tensorMap, context)
                    .toUpperCase();
                var dilations = getParamValue('dilations', node, tensorMap, context);
                return [tfOps.conv2d(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[1], dilations[2]])];
            }
            case '_FusedConv2D': {
                var _a = fusedConvAndDepthWiseParams(node, tensorMap, context), stride = _a.stride, pad = _a.pad, dataFormat = _a.dataFormat, dilations = _a.dilations, biasArg = _a.biasArg, preluArg = _a.preluArg, activationFunc = _a.activationFunc, leakyreluAlpha = _a.leakyreluAlpha;
                return [tfOps.fused.conv2d({
                        x: getParamValue('x', node, tensorMap, context),
                        filter: getParamValue('filter', node, tensorMap, context),
                        strides: [stride[1], stride[2]],
                        pad: pad,
                        dataFormat: dataFormat,
                        dilations: [dilations[1], dilations[2]],
                        bias: biasArg,
                        activation: activationFunc,
                        preluActivationWeights: preluArg,
                        leakyreluAlpha: leakyreluAlpha
                    })];
            }
            case 'FusedDepthwiseConv2dNative': {
                var _b = fusedConvAndDepthWiseParams(node, tensorMap, context), stride = _b.stride, pad = _b.pad, dataFormat = _b.dataFormat, dilations = _b.dilations, biasArg = _b.biasArg, preluArg = _b.preluArg, activationFunc = _b.activationFunc, leakyreluAlpha = _b.leakyreluAlpha;
                return [tfOps.fused.depthwiseConv2d({
                        x: getParamValue('x', node, tensorMap, context),
                        filter: getParamValue('filter', node, tensorMap, context),
                        strides: [stride[1], stride[2]],
                        pad: pad,
                        dataFormat: dataFormat,
                        dilations: [dilations[1], dilations[2]],
                        bias: biasArg,
                        activation: activationFunc,
                        preluActivationWeights: preluArg,
                        leakyreluAlpha: leakyreluAlpha
                    })];
            }
            case 'Conv2DBackpropInput':
            case 'Conv2dTranspose': {
                var shape = getParamValue('outputShape', node, tensorMap, context);
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getPadding(node, tensorMap, context);
                return [tfOps.conv2dTranspose(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), shape, [stride[1], stride[2]], pad)];
            }
            case 'DepthwiseConv2dNative':
            case 'DepthwiseConv2d': {
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getPadding(node, tensorMap, context);
                var dilations = getParamValue('dilations', node, tensorMap, context);
                var dataFormat = getParamValue('dataFormat', node, tensorMap, context)
                    .toUpperCase();
                return [tfOps.depthwiseConv2d(getParamValue('input', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[1], dilations[2]])];
            }
            case 'Conv3D': {
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getParamValue('pad', node, tensorMap, context);
                var dataFormat = getParamValue('dataFormat', node, tensorMap, context)
                    .toUpperCase();
                var dilations = getParamValue('dilations', node, tensorMap, context);
                return [tfOps.conv3d(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), [stride[1], stride[2], stride[3]], pad, dataFormat, [dilations[1], dilations[2], dilations[3]])];
            }
            case 'AvgPool': {
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getParamValue('pad', node, tensorMap, context);
                var kernelSize = getParamValue('kernelSize', node, tensorMap, context);
                return [tfOps.avgPool(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
            }
            case 'MaxPool': {
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getParamValue('pad', node, tensorMap, context);
                var kernelSize = getParamValue('kernelSize', node, tensorMap, context);
                return [tfOps.maxPool(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
            }
            case 'MaxPoolWithArgmax': {
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getParamValue('pad', node, tensorMap, context);
                var kernelSize = getParamValue('kernelSize', node, tensorMap, context);
                var includeBatchInIndex = getParamValue('includeBatchInIndex', node, tensorMap, context);
                var _c = tfOps.maxPoolWithArgmax(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad, includeBatchInIndex), result = _c.result, indexes = _c.indexes;
                return [result, indexes];
            }
            case 'AvgPool3D': {
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getParamValue('pad', node, tensorMap, context);
                var kernelSize = getParamValue('kernelSize', node, tensorMap, context);
                return [tfOps.avgPool3d(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad)];
            }
            case 'MaxPool3D': {
                var stride = getParamValue('strides', node, tensorMap, context);
                var pad = getParamValue('pad', node, tensorMap, context);
                var kernelSize = getParamValue('kernelSize', node, tensorMap, context);
                return [tfOps.maxPool3d(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad)];
            }
            case 'Dilation2D': {
                var strides = getParamValue('strides', node, tensorMap, context);
                var pad = getParamValue('pad', node, tensorMap, context);
                var dilations = getParamValue('dilations', node, tensorMap, context);
                // strides: [1, stride_height, stride_width, 1].
                var strideHeight = strides[1];
                var strideWidth = strides[2];
                // dilations: [1, dilation_height, dilation_width, 1].
                var dilationHeight = dilations[1];
                var dilationWidth = dilations[2];
                return [tfOps.dilation2d(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), [strideHeight, strideWidth], pad, [dilationHeight, dilationWidth], 'NHWC' /* dataFormat */)];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$4 = function (node, tensorMap, context) {
        switch (node.op) {
            case 'Fill': {
                var shape = getParamValue('shape', node, tensorMap, context);
                var dtype = getParamValue('dtype', node, tensorMap, context);
                var value = getParamValue('value', node, tensorMap, context);
                return [tfOps.fill(shape, value, dtype)];
            }
            case 'LinSpace': {
                var start = getParamValue('start', node, tensorMap, context);
                var stop_1 = getParamValue('stop', node, tensorMap, context);
                var num = getParamValue('num', node, tensorMap, context);
                return [tfOps.linspace(start, stop_1, num)];
            }
            case 'Multinomial': {
                var logits = getParamValue('logits', node, tensorMap, context);
                var numSamples = getParamValue('numSamples', node, tensorMap, context);
                var seed = getParamValue('seed', node, tensorMap, context);
                return [tfOps.multinomial(logits, numSamples, seed)];
            }
            case 'OneHot': {
                var indices = getParamValue('indices', node, tensorMap, context);
                var depth = getParamValue('depth', node, tensorMap, context);
                var onValue = getParamValue('onValue', node, tensorMap, context);
                var offValue = getParamValue('offValue', node, tensorMap, context);
                return [tfOps.oneHot(indices, depth, onValue, offValue)];
            }
            case 'Ones': {
                return [tfOps.ones(getParamValue('shape', node, tensorMap, context), getParamValue('dtype', node, tensorMap, context))];
            }
            case 'OnesLike': {
                return [tfOps.onesLike(getParamValue('x', node, tensorMap, context))];
            }
            case 'RandomUniform': {
                return [tfOps.randomUniform(
                    // tslint:disable-next-line:no-any
                    getParamValue('shape', node, tensorMap, context), getParamValue('minval', node, tensorMap, context), getParamValue('maxval', node, tensorMap, context), getParamValue('dtype', node, tensorMap, context))];
            }
            case 'Range': {
                var start = getParamValue('start', node, tensorMap, context);
                var stop_2 = getParamValue('stop', node, tensorMap, context);
                var step = getParamValue('step', node, tensorMap, context);
                return [tfOps.range(start, stop_2, step, getParamValue('dtype', node, tensorMap, context))];
            }
            case 'TruncatedNormal': {
                var shape = getParamValue('shape', node, tensorMap, context);
                var mean = getParamValue('mean', node, tensorMap, context);
                var stdDev = getParamValue('stdDev', node, tensorMap, context);
                var seed = getParamValue('seed', node, tensorMap, context);
                return [tfOps.truncatedNormal(shape, mean, stdDev, getParamValue('dtype', node, tensorMap, context), seed)];
            }
            case 'Zeros': {
                return [tfOps.zeros(getParamValue('shape', node, tensorMap, context), getParamValue('dtype', node, tensorMap, context))];
            }
            case 'ZerosLike': {
                return [tfOps.zerosLike(getParamValue('x', node, tensorMap, context))];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var _this$1 = undefined;
    function nmsParams(node, tensorMap, context) {
        var boxes = getParamValue('boxes', node, tensorMap, context);
        var scores = getParamValue('scores', node, tensorMap, context);
        var maxOutputSize = getParamValue('maxOutputSize', node, tensorMap, context);
        var iouThreshold = getParamValue('iouThreshold', node, tensorMap, context);
        var scoreThreshold = getParamValue('scoreThreshold', node, tensorMap, context);
        var softNmsSigma = getParamValue('softNmsSigma', node, tensorMap, context);
        return {
            boxes: boxes,
            scores: scores,
            maxOutputSize: maxOutputSize,
            iouThreshold: iouThreshold,
            scoreThreshold: scoreThreshold,
            softNmsSigma: softNmsSigma
        };
    }
    var executeOp$5 = function (node, tensorMap, context) { return __awaiter(_this$1, void 0, void 0, function () {
        var _a, _b, boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma, result, _c, boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize, result, _d, boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, condition, result;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = node.op;
                    switch (_a) {
                        case 'NonMaxSuppressionV5': return [3 /*break*/, 1];
                        case 'NonMaxSuppressionV4': return [3 /*break*/, 3];
                        case 'NonMaxSuppressionV3': return [3 /*break*/, 5];
                        case 'NonMaxSuppressionV2': return [3 /*break*/, 5];
                        case 'Where': return [3 /*break*/, 7];
                        case 'ListDiff': return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 10];
                case 1:
                    _b = nmsParams(node, tensorMap, context), boxes = _b.boxes, scores = _b.scores, maxOutputSize = _b.maxOutputSize, iouThreshold = _b.iouThreshold, scoreThreshold = _b.scoreThreshold, softNmsSigma = _b.softNmsSigma;
                    return [4 /*yield*/, tfOps.image.nonMaxSuppressionWithScoreAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma)];
                case 2:
                    result = _e.sent();
                    return [2 /*return*/, [result.selectedIndices, result.selectedScores]];
                case 3:
                    _c = nmsParams(node, tensorMap, context), boxes = _c.boxes, scores = _c.scores, maxOutputSize = _c.maxOutputSize, iouThreshold = _c.iouThreshold, scoreThreshold = _c.scoreThreshold;
                    padToMaxOutputSize = getParamValue('padToMaxOutputSize', node, tensorMap, context);
                    return [4 /*yield*/, tfOps.image.nonMaxSuppressionPaddedAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize)];
                case 4:
                    result = _e.sent();
                    return [2 /*return*/, [result.selectedIndices, result.validOutputs]];
                case 5:
                    _d = nmsParams(node, tensorMap, context), boxes = _d.boxes, scores = _d.scores, maxOutputSize = _d.maxOutputSize, iouThreshold = _d.iouThreshold, scoreThreshold = _d.scoreThreshold;
                    return [4 /*yield*/, tfOps.image.nonMaxSuppressionAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold)];
                case 6: return [2 /*return*/, [_e.sent()]];
                case 7:
                    condition = tfOps.cast(getParamValue('condition', node, tensorMap, context), 'bool');
                    return [4 /*yield*/, tfOps.whereAsync(condition)];
                case 8:
                    result = [_e.sent()];
                    condition.dispose();
                    return [2 /*return*/, result];
                case 9:
                    {
                        return [2 /*return*/, tfOps.setdiff1dAsync(getParamValue('x', node, tensorMap, context), getParamValue('y', node, tensorMap, context))];
                    }
                case 10: throw TypeError("Node type " + node.op + " is not implemented");
            }
        });
    }); };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$6 = function (node, tensorMap, context) {
        switch (node.op) {
            case 'TopKV2': {
                var x = getParamValue('x', node, tensorMap, context);
                var k = getParamValue('k', node, tensorMap, context);
                var sorted = getParamValue('sorted', node, tensorMap, context);
                var result = tfOps.topk(x, k, sorted);
                return [result.values, result.indices];
            }
            case 'Unique': {
                var x = getParamValue('x', node, tensorMap, context);
                var result = tfOps.unique(x);
                return [result.values, result.indices];
            }
            case 'UniqueV2': {
                var x = getParamValue('x', node, tensorMap, context);
                var axis = getParamValue('axis', node, tensorMap, context);
                var result = tfOps.unique(x, axis);
                return [result.values, result.indices];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$7 = function (node, tensorMap, context) {
        switch (node.op) {
            case 'Const': {
                return tensorMap[node.name];
            }
            case 'PlaceholderWithDefault':
                var def = getParamValue('default', node, tensorMap, context);
                return [getTensor(node.name, tensorMap, context) || def];
            case 'Placeholder':
                return [getTensor(node.name, tensorMap, context)];
            case 'Identity':
            case 'StopGradient':
            case 'FakeQuantWithMinMaxVars': { // This op is currently ignored.
                var data_1 = getParamValue('x', node, tensorMap, context);
                return [cloneTensor(data_1)];
            }
            case 'IdentityN':
                return getParamValue('x', node, tensorMap, context)
                    .map(function (t) { return cloneTensor(t); });
            case 'Snapshot':
                var snapshot = getParamValue('x', node, tensorMap, context);
                return [cloneTensor(snapshot)];
            case 'Shape':
                return [tfOps.tensor1d(getParamValue('x', node, tensorMap, context).shape, 'int32')];
            case 'ShapeN':
                return getParamValue('x', node, tensorMap, context)
                    .map(function (t) { return tfOps.tensor1d(t.shape); });
            case 'Size':
                return [tfOps.scalar(getParamValue('x', node, tensorMap, context).size, 'int32')];
            case 'Rank':
                return [tfOps.scalar(getParamValue('x', node, tensorMap, context).rank, 'int32')];
            case 'NoOp':
                return [tfOps.scalar(1)];
            case 'Print':
                var input = getParamValue('x', node, tensorMap, context);
                var data = getParamValue('data', node, tensorMap, context);
                var message = getParamValue('message', node, tensorMap, context);
                var summarize = getParamValue('summarize', node, tensorMap, context);
                console.warn('The graph has a tf.print() operation,' +
                    'usually used for debugging, which slows down performance.');
                console.log(message);
                for (var i = 0; i < data.length; i++) {
                    console.log(Array.prototype.slice.call(data[i].dataSync())
                        .slice(0, summarize));
                }
                return [input];
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * Hashtable contains a set of tensors, which can be accessed by key.
     */
    var HashTable = /** @class */ (function () {
        /**
         * Constructor of HashTable. Creates a hash table.
         *
         * @param keyDType `dtype` of the table keys.
         * @param valueDType `dtype` of the table values.
         */
        function HashTable(keyDType, valueDType) {
            this.keyDType = keyDType;
            this.valueDType = valueDType;
            this.handle = tfc.scalar(0);
            // tslint:disable-next-line: no-any
            this.tensorMap = new Map();
            tfc.keep(this.handle);
        }
        Object.defineProperty(HashTable.prototype, "id", {
            get: function () {
                return this.handle.id;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Dispose the tensors and handle and clear the hashtable.
         */
        HashTable.prototype.clearAndClose = function () {
            this.tensorMap.forEach(function (value) { return value.dispose(); });
            this.tensorMap.clear();
            this.handle.dispose();
        };
        /**
         * The number of items in the hash table.
         */
        HashTable.prototype.size = function () {
            return this.tensorMap.size;
        };
        /**
         * The number of items in the hash table as a rank-0 tensor.
         */
        HashTable.prototype.tensorSize = function () {
            return tfOps.scalar(this.size(), 'int32');
        };
        /**
         * Replaces the contents of the table with the specified keys and values.
         * @param keys Keys to store in the hashtable.
         * @param values Values to store in the hashtable.
         */
        HashTable.prototype.import = function (keys, values) {
            return __awaiter(this, void 0, void 0, function () {
                var $keys;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.checkKeyAndValueTensor(keys, values);
                            return [4 /*yield*/, keys.data()];
                        case 1:
                            $keys = _a.sent();
                            // Clear the hashTable before inserting new values.
                            this.tensorMap.forEach(function (value) { return value.dispose(); });
                            this.tensorMap.clear();
                            return [2 /*return*/, tfc.tidy(function () {
                                    var $values = tfc.unstack(values);
                                    var keysLength = $keys.length;
                                    var valuesLength = $values.length;
                                    tfc.util.assert(keysLength === valuesLength, function () { return "The number of elements doesn't match, keys has " +
                                        (keysLength + " elements, the values has " + valuesLength + " ") +
                                        "elements."; });
                                    for (var i = 0; i < keysLength; i++) {
                                        var key = $keys[i];
                                        var value = $values[i];
                                        tfc.keep(value);
                                        _this.tensorMap.set(key, value);
                                    }
                                    return _this.handle;
                                })];
                    }
                });
            });
        };
        /**
         * Looks up keys in a hash table, outputs the corresponding values.
         *
         * Performs batch lookups, for every element in the key tensor, `find`
         * stacks the corresponding value into the return tensor.
         *
         * If an element is not present in the table, the given `defaultValue` is
         * used.
         *
         * @param keys Keys to look up. Must have the same type as the keys of the
         *     table.
         * @param defaultValue The scalar `defaultValue` is the value output for keys
         *     not present in the table. It must also be of the same type as the
         *     table values.
         */
        HashTable.prototype.find = function (keys, defaultValue) {
            return __awaiter(this, void 0, void 0, function () {
                var $keys;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.checkKeyAndValueTensor(keys, defaultValue);
                            return [4 /*yield*/, keys.data()];
                        case 1:
                            $keys = _a.sent();
                            return [2 /*return*/, tfc.tidy(function () {
                                    var result = [];
                                    for (var i = 0; i < $keys.length; i++) {
                                        var key = $keys[i];
                                        var value = _this.findWithDefault(key, defaultValue);
                                        result.push(value);
                                    }
                                    return tfc.stack(result);
                                })];
                    }
                });
            });
        };
        // tslint:disable-next-line: no-any
        HashTable.prototype.findWithDefault = function (key, defaultValue) {
            var result = this.tensorMap.get(key);
            return result != null ? result : defaultValue;
        };
        HashTable.prototype.checkKeyAndValueTensor = function (key, value) {
            if (key.dtype !== this.keyDType) {
                throw new Error("Expect key dtype " + this.keyDType + ", but got " +
                    ("" + key.dtype));
            }
            if (value.dtype !== this.valueDType) {
                throw new Error("Expect value dtype " + this.valueDType + ", but got " +
                    ("" + value.dtype));
            }
        };
        return HashTable;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
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
    var _this$2 = undefined;
    var executeOp$8 = function (node, tensorMap, context, resourceManager) { return __awaiter(_this$2, void 0, void 0, function () {
        var _a, keyDType, valueDType, hashTable, handle, keys, values, hashTable, handle, keys, defaultValue, hashTable, handle, hashTable;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = node.op;
                    switch (_a) {
                        case 'HashTable': return [3 /*break*/, 1];
                        case 'HashTableV2': return [3 /*break*/, 1];
                        case 'LookupTableImport': return [3 /*break*/, 2];
                        case 'LookupTableImportV2': return [3 /*break*/, 2];
                        case 'LookupTableFind': return [3 /*break*/, 4];
                        case 'LookupTableFindV2': return [3 /*break*/, 4];
                        case 'LookupTableSize': return [3 /*break*/, 6];
                        case 'LookupTableSizeV2': return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 7];
                case 1:
                    {
                        keyDType = getParamValue('keyDType', node, tensorMap, context);
                        valueDType = getParamValue('valueDType', node, tensorMap, context);
                        hashTable = new HashTable(keyDType, valueDType);
                        resourceManager.addHashTable(node.name, hashTable);
                        return [2 /*return*/, [hashTable.handle]];
                    }
                case 2:
                    handle = getParamValue('tableHandle', node, tensorMap, context, resourceManager);
                    keys = getParamValue('keys', node, tensorMap, context);
                    values = getParamValue('values', node, tensorMap, context);
                    hashTable = resourceManager.getHashTableById(handle.id);
                    return [4 /*yield*/, hashTable.import(keys, values)];
                case 3: return [2 /*return*/, [_b.sent()]];
                case 4:
                    handle = getParamValue('tableHandle', node, tensorMap, context, resourceManager);
                    keys = getParamValue('keys', node, tensorMap, context);
                    defaultValue = getParamValue('defaultValue', node, tensorMap, context);
                    hashTable = resourceManager.getHashTableById(handle.id);
                    return [4 /*yield*/, hashTable.find(keys, defaultValue)];
                case 5: return [2 /*return*/, [_b.sent()]];
                case 6:
                    {
                        handle = getParamValue('tableHandle', node, tensorMap, context, resourceManager);
                        hashTable = resourceManager.getHashTableById(handle.id);
                        return [2 /*return*/, [hashTable.tensorSize()]];
                    }
                case 7: throw TypeError("Node type " + node.op + " is not implemented");
            }
        });
    }); };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$9 = function (node, tensorMap, context) {
        switch (node.op) {
            case 'ResizeBilinear': {
                var images = getParamValue('images', node, tensorMap, context);
                var size = getParamValue('size', node, tensorMap, context);
                var alignCorners = getParamValue('alignCorners', node, tensorMap, context);
                var halfPixelCenters = getParamValue('halfPixelCenters', node, tensorMap, context);
                return [tfOps.image.resizeBilinear(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
            }
            case 'ResizeNearestNeighbor': {
                var images = getParamValue('images', node, tensorMap, context);
                var size = getParamValue('size', node, tensorMap, context);
                var alignCorners = getParamValue('alignCorners', node, tensorMap, context);
                var halfPixelCenters = getParamValue('halfPixelCenters', node, tensorMap, context);
                return [tfOps.image.resizeNearestNeighbor(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
            }
            case 'CropAndResize': {
                var image = getParamValue('image', node, tensorMap, context);
                var boxes = getParamValue('boxes', node, tensorMap, context);
                var boxInd = getParamValue('boxInd', node, tensorMap, context);
                var cropSize = getParamValue('cropSize', node, tensorMap, context);
                var method = getParamValue('method', node, tensorMap, context);
                var extrapolationValue = getParamValue('extrapolationValue', node, tensorMap, context);
                return [tfOps.image.cropAndResize(image, boxes, boxInd, cropSize, method, extrapolationValue)];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$a = function (node, tensorMap, context) {
        switch (node.op) {
            case 'Equal': {
                return [tfOps.equal(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'NotEqual': {
                return [tfOps.notEqual(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'Greater': {
                return [tfOps.greater(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'GreaterEqual': {
                return [tfOps.greaterEqual(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'Less': {
                return [tfOps.less(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'LessEqual': {
                return [tfOps.lessEqual(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'LogicalAnd': {
                return [tfOps.logicalAnd(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'LogicalNot': {
                return [tfOps.logicalNot(getParamValue('a', node, tensorMap, context))];
            }
            case 'LogicalOr': {
                return [tfOps.logicalOr(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            case 'Select':
            case 'SelectV2': {
                return [tfOps.where(getParamValue('condition', node, tensorMap, context), getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$b = function (node, tensorMap, context) {
        switch (node.op) {
            case 'BatchMatMul':
            case 'BatchMatMulV2':
            case 'MatMul':
                return [tfOps.matMul(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context), getParamValue('transposeA', node, tensorMap, context), getParamValue('transposeB', node, tensorMap, context))];
            case 'Transpose':
                return [tfOps.transpose(getParamValue('x', node, tensorMap, context), getParamValue('perm', node, tensorMap, context))];
            case '_FusedMatMul':
                var _a = __read(getParamValue('fusedOps', node, tensorMap, context), 2), extraOp = _a[0], activationFunc = _a[1];
                var isBiasAdd = extraOp === 'biasadd';
                var isPrelu = activationFunc === 'prelu';
                var numArgs = getParamValue('numArgs', node, tensorMap, context);
                var leakyreluAlpha = getParamValue('leakyreluAlpha', node, tensorMap, context);
                if (isBiasAdd) {
                    if (isPrelu && numArgs !== 2) {
                        throw new Error('Fused MatMul with BiasAdd and Prelu must have two ' +
                            'extra arguments: bias and alpha.');
                    }
                    if (!isPrelu && numArgs !== 1) {
                        throw new Error('Fused MatMul with BiasAdd must have one extra argument: bias.');
                    }
                }
                var _b = __read(getParamValue('args', node, tensorMap, context), 2), biasArg = _b[0], preluArg = _b[1];
                return [tfOps.fused.matMul({
                        a: getParamValue('a', node, tensorMap, context),
                        b: getParamValue('b', node, tensorMap, context),
                        transposeA: getParamValue('transposeA', node, tensorMap, context),
                        transposeB: getParamValue('transposeB', node, tensorMap, context),
                        bias: biasArg,
                        activation: activationFunc,
                        preluActivationWeights: preluArg,
                        leakyreluAlpha: leakyreluAlpha
                    })];
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$c = function (node, tensorMap, context) {
        switch (node.op) {
            case 'FusedBatchNorm':
            case 'FusedBatchNormV2': {
                return [tfOps.batchNorm(getParamValue('x', node, tensorMap, context), getParamValue('mean', node, tensorMap, context), getParamValue('variance', node, tensorMap, context), getParamValue('offset', node, tensorMap, context), getParamValue('scale', node, tensorMap, context), getParamValue('epsilon', node, tensorMap, context))];
            }
            case 'FusedBatchNormV3': {
                return [tfOps.batchNorm(getParamValue('x', node, tensorMap, context), getParamValue('mean', node, tensorMap, context), getParamValue('variance', node, tensorMap, context), getParamValue('offset', node, tensorMap, context), getParamValue('scale', node, tensorMap, context), getParamValue('epsilon', node, tensorMap, context))];
            }
            case 'LRN': {
                return [tfOps.localResponseNormalization(getParamValue('x', node, tensorMap, context), getParamValue('radius', node, tensorMap, context), getParamValue('bias', node, tensorMap, context), getParamValue('alpha', node, tensorMap, context), getParamValue('beta', node, tensorMap, context))];
            }
            case 'Softmax': {
                return [tfOps.softmax(getParamValue('x', node, tensorMap, context))];
            }
            case 'LogSoftmax': {
                return [tfOps.logSoftmax(getParamValue('x', node, tensorMap, context))];
            }
            case 'SparseToDense': {
                return [tfOps.sparseToDense(getParamValue('sparseIndices', node, tensorMap, context), getParamValue('outputShape', node, tensorMap, context), getParamValue('sparseValues', node, tensorMap, context), getParamValue('defaultValue', node, tensorMap, context))];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$d = function (node, tensorMap, context) {
        switch (node.op) {
            case 'Max': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var keepDims = getParamValue('keepDims', node, tensorMap, context);
                return [tfOps.max(getParamValue('x', node, tensorMap, context), axis, keepDims)];
            }
            case 'Mean': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var keepDims = getParamValue('keepDims', node, tensorMap, context);
                return [tfOps.mean(getParamValue('x', node, tensorMap, context), axis, keepDims)];
            }
            case 'Min': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var keepDims = getParamValue('keepDims', node, tensorMap, context);
                return [tfOps.min(getParamValue('x', node, tensorMap, context), axis, keepDims)];
            }
            case 'Sum': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var keepDims = getParamValue('keepDims', node, tensorMap, context);
                return [tfOps.sum(getParamValue('x', node, tensorMap, context), axis, keepDims)];
            }
            case 'All': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var keepDims = getParamValue('keepDims', node, tensorMap, context);
                return [tfOps.all(getParamValue('x', node, tensorMap, context), axis, keepDims)];
            }
            case 'Any': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var keepDims = getParamValue('keepDims', node, tensorMap, context);
                return [tfOps.any(getParamValue('x', node, tensorMap, context), axis, keepDims)];
            }
            case 'ArgMax': {
                var axis = getParamValue('axis', node, tensorMap, context);
                return [tfOps.argMax(getParamValue('x', node, tensorMap, context), axis)];
            }
            case 'ArgMin': {
                var axis = getParamValue('axis', node, tensorMap, context);
                return [tfOps.argMin(getParamValue('x', node, tensorMap, context), axis)];
            }
            case 'Prod': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var keepDims = getParamValue('keepDims', node, tensorMap, context);
                return [tfOps.prod(getParamValue('x', node, tensorMap, context), axis, keepDims)];
            }
            case 'Cumsum': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var exclusive = getParamValue('exclusive', node, tensorMap, context);
                var reverse = getParamValue('reverse', node, tensorMap, context);
                return [tfOps.cumsum(getParamValue('x', node, tensorMap, context), axis, exclusive, reverse)];
            }
            case 'Bincount':
                var x = getParamValue('x', node, tensorMap, context);
                var weights = getParamValue('weights', node, tensorMap, context);
                var size = getParamValue('size', node, tensorMap, context);
                return [tfOps.bincount(x, weights, size)];
            case 'DenseBincount': {
                var x_1 = getParamValue('x', node, tensorMap, context);
                var weights_1 = getParamValue('weights', node, tensorMap, context);
                var size_1 = getParamValue('size', node, tensorMap, context);
                var binaryOutput = getParamValue('binaryOutput', node, tensorMap, context);
                return [tfOps.denseBincount(x_1, weights_1, size_1, binaryOutput)];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$e = function (node, tensorMap, context) {
        switch (node.op) {
            case 'ConcatV2':
            case 'Concat': {
                var n = getParamValue('n', node, tensorMap, context);
                var axis = getParamValue('axis', node, tensorMap, context);
                var inputs = getParamValue('tensors', node, tensorMap, context);
                inputs = inputs.slice(0, n);
                return [tfOps.concat(inputs, axis)];
            }
            case 'Gather': {
                var input = getParamValue('x', node, tensorMap, context);
                var indices = getParamValue('indices', node, tensorMap, context);
                return [tfOps.gather(input, tfOps.cast(indices, 'int32'), 0)];
            }
            case 'GatherV2': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var batchDims = getParamValue('batchDims', node, tensorMap, context);
                var input = getParamValue('x', node, tensorMap, context);
                var indices = getParamValue('indices', node, tensorMap, context);
                return [tfOps.gather(input, tfOps.cast(indices, 'int32'), axis, batchDims)];
            }
            case 'Reverse': {
                var dims = getParamValue('dims', node, tensorMap, context);
                var axis = [];
                for (var i = 0; i < dims.length; i++) {
                    if (dims[i]) {
                        axis.push(i);
                    }
                }
                var input = getParamValue('x', node, tensorMap, context);
                return [tfOps.reverse(input, axis)];
            }
            case 'ReverseV2': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var input = getParamValue('x', node, tensorMap, context);
                return [tfOps.reverse(input, axis)];
            }
            case 'Slice': {
                // tslint:disable-next-line:no-any
                var begin = getParamValue('begin', node, tensorMap, context);
                // tslint:disable-next-line:no-any
                var size = getParamValue('size', node, tensorMap, context);
                return [tfOps.slice(getParamValue('x', node, tensorMap, context), begin, size)];
            }
            case 'StridedSlice': {
                var begin = getParamValue('begin', node, tensorMap, context);
                var end = getParamValue('end', node, tensorMap, context);
                var strides = getParamValue('strides', node, tensorMap, context);
                var beginMask = getParamValue('beginMask', node, tensorMap, context);
                var endMask = getParamValue('endMask', node, tensorMap, context);
                var ellipsisMask = getParamValue('ellipsisMask', node, tensorMap, context);
                var newAxisMask = getParamValue('newAxisMask', node, tensorMap, context);
                var shrinkAxisMask = getParamValue('shrinkAxisMask', node, tensorMap, context);
                var tensor = getParamValue('x', node, tensorMap, context);
                return [tfOps.stridedSlice(tensor, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask)];
            }
            case 'Pack': {
                return tfc.tidy(function () {
                    var axis = getParamValue('axis', node, tensorMap, context);
                    var tensors = getParamValue('tensors', node, tensorMap, context);
                    // Reshape the tensors to the first tensor's shape if they don't
                    // match.
                    var shape = tensors[0].shape;
                    var squeezedShape = tfOps.squeeze(tensors[0]).shape;
                    var mapped = tensors.map(function (tensor) {
                        var sameShape = tfc.util.arraysEqual(tensor.shape, shape);
                        if (!sameShape &&
                            !tfc.util.arraysEqual(tfOps.squeeze(tensor).shape, squeezedShape)) {
                            throw new Error('the input tensors shape does not match');
                        }
                        return sameShape ? tensor : tfOps.reshape(tensor, shape);
                    });
                    return [tfOps.stack(mapped, axis)];
                });
            }
            case 'Unpack': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var tensor = getParamValue('tensor', node, tensorMap, context);
                return tfOps.unstack(tensor, axis);
            }
            case 'Tile': {
                var reps = getParamValue('reps', node, tensorMap, context);
                return [tfOps.tile(getParamValue('x', node, tensorMap, context), reps)];
            }
            case 'Split':
            case 'SplitV': {
                var axis = getParamValue('axis', node, tensorMap, context);
                var numOrSizeSplits = getParamValue('numOrSizeSplits', node, tensorMap, context);
                var tensor = getParamValue('x', node, tensorMap, context);
                return tfOps.split(tensor, numOrSizeSplits, axis);
            }
            case 'ScatterNd': {
                var indices = getParamValue('indices', node, tensorMap, context);
                var values = getParamValue('values', node, tensorMap, context);
                var shape = getParamValue('shape', node, tensorMap, context);
                return [tfOps.scatterND(indices, values, shape)];
            }
            case 'GatherNd': {
                var x = getParamValue('x', node, tensorMap, context);
                var indices = getParamValue('indices', node, tensorMap, context);
                return [tfOps.gatherND(x, indices)];
            }
            case 'SparseToDense': {
                var indices = getParamValue('sparseIndices', node, tensorMap, context);
                var shape = getParamValue('outputShape', node, tensorMap, context);
                var sparseValues = getParamValue('sparseValues', node, tensorMap, context);
                var defaultValue = getParamValue('defaultValue', node, tensorMap, context);
                return [tfOps.sparseToDense(indices, sparseValues, shape, sparseValues.dtype === defaultValue.dtype ?
                        defaultValue :
                        tfOps.cast(defaultValue, sparseValues.dtype))];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$f = function (node, tensorMap, context) {
        switch (node.op) {
            case 'FFT': {
                return [tfOps.fft(getParamValue('x', node, tensorMap, context))];
            }
            case 'IFFT': {
                return [tfOps.ifft(getParamValue('x', node, tensorMap, context))];
            }
            case 'RFFT': {
                return [tfOps.rfft(getParamValue('x', node, tensorMap, context))];
            }
            case 'IRFFT': {
                return [tfOps.irfft(getParamValue('x', node, tensorMap, context))];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var executeOp$g = function (node, tensorMap, context) {
        switch (node.op) {
            case 'Cast': {
                return [tfOps.cast(getParamValue('x', node, tensorMap, context), getParamValue('dtype', node, tensorMap, context))];
            }
            case 'ExpandDims': {
                var axis = getParamValue('axis', node, tensorMap, context);
                return [tfOps.expandDims(getParamValue('x', node, tensorMap, context), axis)];
            }
            case 'Squeeze': {
                var axis = getParamValue('axis', node, tensorMap, context);
                return [tfOps.squeeze(getParamValue('x', node, tensorMap, context), axis)];
            }
            case 'Reshape': {
                return [tfOps.reshape(getParamValue('x', node, tensorMap, context), getParamValue('shape', node, tensorMap, context))];
            }
            case 'MirrorPad': {
                return [tfOps.mirrorPad(getParamValue('x', node, tensorMap, context), getParamValue('padding', node, tensorMap, context), getParamValue('mode', node, tensorMap, context))];
            }
            case 'PadV2':
            case 'Pad': {
                return [tfOps.pad(getParamValue('x', node, tensorMap, context), getParamValue('padding', node, tensorMap, context), getParamValue('constantValue', node, tensorMap, context))];
            }
            case 'SpaceToBatchND': {
                var blockShape = getParamValue('blockShape', node, tensorMap, context);
                var paddings = getParamValue('paddings', node, tensorMap, context);
                return [tfOps.spaceToBatchND(getParamValue('x', node, tensorMap, context), blockShape, paddings)];
            }
            case 'BatchToSpaceND': {
                var blockShape = getParamValue('blockShape', node, tensorMap, context);
                var crops = getParamValue('crops', node, tensorMap, context);
                return [tfOps.batchToSpaceND(getParamValue('x', node, tensorMap, context), blockShape, crops)];
            }
            case 'DepthToSpace': {
                var blockSize = getParamValue('blockSize', node, tensorMap, context);
                var dataFormat = getParamValue('dataFormat', node, tensorMap, context).toUpperCase();
                return [tfOps.depthToSpace(getParamValue('x', node, tensorMap, context), blockSize, dataFormat)];
            }
            case 'BroadcastTo': {
                return [tfOps.broadcastTo(getParamValue('x', node, tensorMap, context), getParamValue('shape', node, tensorMap, context))];
            }
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    };

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
     * Executes the op defined by the node object.
     * @param node
     * @param tensorMap contains tensors for executed nodes and weights
     * @param context contains tensors and information for running the current node.
     * @param resourceManager Optional. Contains global resources of the model.
     */
    function executeOp$h(node, tensorMap, context, resourceManager) {
        var value = (function (node, tensorMap, context) {
            switch (node.category) {
                case 'arithmetic':
                    return tfc.tidy(function () { return executeOp(node, tensorMap, context); });
                case 'basic_math':
                    return tfc.tidy(function () { return executeOp$1(node, tensorMap, context); });
                case 'control':
                    return executeOp$2(node, tensorMap, context);
                case 'convolution':
                    return tfc.tidy(function () { return executeOp$3(node, tensorMap, context); });
                case 'creation':
                    return tfc.tidy(function () { return executeOp$4(node, tensorMap, context); });
                case 'dynamic':
                    return executeOp$5(node, tensorMap, context);
                case 'evaluation':
                    return tfc.tidy(function () { return executeOp$6(node, tensorMap, context); });
                case 'image':
                    return tfc.tidy(function () { return executeOp$9(node, tensorMap, context); });
                case 'graph':
                    return tfc.tidy(function () { return executeOp$7(node, tensorMap, context); });
                case 'logical':
                    return tfc.tidy(function () { return executeOp$a(node, tensorMap, context); });
                case 'matrices':
                    return tfc.tidy(function () { return executeOp$b(node, tensorMap, context); });
                case 'normalization':
                    return tfc.tidy(function () { return executeOp$c(node, tensorMap, context); });
                case 'reduction':
                    return tfc.tidy(function () { return executeOp$d(node, tensorMap, context); });
                case 'slice_join':
                    return tfc.tidy(function () { return executeOp$e(node, tensorMap, context); });
                case 'spectral':
                    return tfc.tidy(function () { return executeOp$f(node, tensorMap, context); });
                case 'transformation':
                    return tfc.tidy(function () { return executeOp$g(node, tensorMap, context); });
                case 'hash_table':
                    return executeOp$8(node, tensorMap, context, resourceManager);
                case 'custom':
                    var opMapper = getRegisteredOp(node.op);
                    if (opMapper && opMapper.customExecutor) {
                        return opMapper.customExecutor(new NodeValueImpl(node, tensorMap, context));
                    }
                    else {
                        throw TypeError("Custom op " + node.op + " is not registered.");
                    }
                default:
                    throw TypeError("Unknown op '" + node.op + "'. File an issue at " +
                        "https://github.com/tensorflow/tfjs/issues so we can add it" +
                        ", or register a custom execution with tf.registerOp()");
            }
        })(node, tensorMap, context);
        if (tfc.util.isPromise(value)) {
            return value.then(function (data) { return [].concat(data); });
        }
        return [].concat(value);
    }

    /**
     * ExecutionContext captures the runtime environment of the node. It keeps
     * track of the current frame and iteration for the control flow ops.
     *
     * For example, typical Dynamic RNN model may contain loops, for which
     * TensorFlow will generate graphs with Enter/Exit nodes to control the
     * current execution frame, and NextIteration Nodes for iteration id increment.
     * For model with branch logic, TensorFLow will generate Switch/Merge ops.
     */
    var ExecutionContext = /** @class */ (function () {
        function ExecutionContext(weightMap, tensorArrayMap, tensorListMap, functionMap) {
            if (weightMap === void 0) { weightMap = {}; }
            if (tensorArrayMap === void 0) { tensorArrayMap = {}; }
            if (tensorListMap === void 0) { tensorListMap = {}; }
            if (functionMap === void 0) { functionMap = {}; }
            this.weightMap = weightMap;
            this.tensorArrayMap = tensorArrayMap;
            this.tensorListMap = tensorListMap;
            this.functionMap = functionMap;
            this.rootContext = { id: 0, frameName: '', iterationId: 0 };
            this.contexts = [this.rootContext];
            this.lastId = 0;
            this.generateCurrentContextIds();
        }
        ExecutionContext.prototype.newFrame = function (id, frameName) {
            return { id: id, frameName: frameName, iterationId: 0 };
        };
        Object.defineProperty(ExecutionContext.prototype, "currentContext", {
            get: function () {
                return this.contexts;
            },
            /**
             * Set the current context
             * @param contexts: ExecutionContextInfo[] the current path of execution
             * frames
             */
            set: function (contexts) {
                if (this.contexts !== contexts) {
                    this.contexts = contexts;
                    this.generateCurrentContextIds();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExecutionContext.prototype, "currentContextId", {
            /**
             * Returns the current context in string format.
             */
            get: function () {
                return this._currentContextIds[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExecutionContext.prototype, "currentContextIds", {
            /**
             * Returns the current context and all parent contexts in string format.
             * This allow access to the nodes in the current and parent frames.
             */
            get: function () {
                return this._currentContextIds;
            },
            enumerable: true,
            configurable: true
        });
        ExecutionContext.prototype.generateCurrentContextIds = function () {
            var names = [];
            for (var i = 0; i < this.contexts.length - 1; i++) {
                var contexts = this.contexts.slice(0, this.contexts.length - i);
                names.push(this.contextIdforContexts(contexts));
            }
            names.push('');
            this._currentContextIds = names;
        };
        ExecutionContext.prototype.contextIdforContexts = function (contexts) {
            return contexts ?
                contexts
                    .map(function (context) { return (context.id === 0 && context.iterationId === 0) ?
                    '' :
                    context.frameName + "-" + context.iterationId; })
                    .join('/') :
                '';
        };
        /**
         * Enter a new frame, a new context is pushed on the current context list.
         * @param frameId new frame id
         */
        ExecutionContext.prototype.enterFrame = function (frameId) {
            if (this.contexts) {
                this.lastId++;
                this.contexts = this.contexts.slice();
                this.contexts.push(this.newFrame(this.lastId, frameId));
                this._currentContextIds.unshift(this.contextIdforContexts(this.contexts));
            }
        };
        /**
         * Exit the current frame, the last context is removed from the current
         * context list.
         */
        ExecutionContext.prototype.exitFrame = function () {
            if (this.contexts && this.contexts.length > 1) {
                this.contexts = this.contexts.slice();
                this.contexts.splice(-1);
                this.currentContextIds.shift();
            }
            else {
                throw new Error('Cannot exit frame, the context is empty');
            }
        };
        /**
         * Enter the next iteration of a loop, the iteration id of last context is
         * increased.
         */
        ExecutionContext.prototype.nextIteration = function () {
            if (this.contexts && this.contexts.length > 0) {
                this.contexts = this.contexts.slice();
                this.lastId++;
                var context = Object.assign({}, this.contexts[this.contexts.length - 1]);
                context.iterationId += 1;
                context.id = this.lastId;
                this.contexts.splice(-1, 1, context);
                this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
            }
            else {
                throw new Error('Cannot increase frame iteration, the context is empty');
            }
        };
        ExecutionContext.prototype.getWeight = function (name) {
            return this.weightMap[name];
        };
        ExecutionContext.prototype.addTensorArray = function (tensorArray) {
            this.tensorArrayMap[tensorArray.id] = tensorArray;
        };
        ExecutionContext.prototype.getTensorArray = function (id) {
            return this.tensorArrayMap[id];
        };
        ExecutionContext.prototype.addTensorList = function (tensorList) {
            this.tensorListMap[tensorList.id] = tensorList;
        };
        ExecutionContext.prototype.getTensorList = function (id) {
            return this.tensorListMap[id];
        };
        ExecutionContext.prototype.dispose = function (keepIds) {
            for (var key in this.tensorArrayMap) {
                this.tensorArrayMap[key].clearAndClose(keepIds);
            }
            for (var key in this.tensorListMap) {
                this.tensorListMap[key].clearAndClose(keepIds);
            }
        };
        return ExecutionContext;
    }());

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
     * Given graph inputs and desired outputs, find the minimal set of nodes
     * to execute in order to compute the outputs. In addition return other useful
     * info such:
     * - Missing inputs needed to compute the output.
     * - Whether the subgraph contains dynamic ops (control flow, dynamic shape).
     * - Alternative inputs in order to avoid async (dynamic op) execution.
     */
    function getExecutionSubgraph(inputs, outputs, weightMap, initNodes) {
        var usedNodes = new Set();
        var missingInputs = [];
        var dynamicNode = null;
        var syncInputs = null;
        // Start with the outputs, going backwards and find all the nodes that are
        // needed to compute those outputs.
        var seen = new Set();
        var inputNodeNames = Object.keys(inputs).map(function (name) { return parseNodeName(name)[0]; });
        var initNodeNames = [];
        if (initNodes != null) {
            initNodeNames = initNodes.map(function (node) { return parseNodeName(node.name)[0]; });
        }
        var frontier = __spread(outputs);
        while (frontier.length > 0) {
            var node = frontier.pop();
            if (isControlFlow(node) || isDynamicShape(node) || isHashTable(node)) {
                if (dynamicNode == null) {
                    dynamicNode = node;
                    syncInputs = dynamicNode.children.map(function (child) { return child.name; })
                        .filter(function (name) { return usedNodes.has(name); });
                }
            }
            usedNodes.add(node.name);
            // Weights are dead end since we already have their values.
            if (weightMap[node.name] != null) {
                continue;
            }
            // This node is a dead end since it's one of the user-provided inputs.
            if (inputNodeNames.indexOf(node.name) !== -1) {
                continue;
            }
            // This node is a dead end since it doesn't have any inputs.
            if (initNodeNames.indexOf(node.name) !== -1) {
                continue;
            }
            if (node.inputs.length === 0) {
                missingInputs.push(node.name);
                continue;
            }
            node.inputs.forEach(function (input) {
                // Don't add to the frontier if it is already there.
                if (seen.has(input.name)) {
                    return;
                }
                seen.add(input.name);
                frontier.push(input);
            });
        }
        return { inputs: inputs, outputs: outputs, usedNodes: usedNodes, missingInputs: missingInputs, dynamicNode: dynamicNode, syncInputs: syncInputs };
    }
    /**
     * Given the execution info, return a list of nodes in topological order that
     * need to be executed to compute the output.
     */
    function getNodesInTopologicalOrder(graph, weightMap, executionInfo) {
        var usedNodes = executionInfo.usedNodes, inputs = executionInfo.inputs;
        var frontier = [];
        var inputNodes = Object.keys(inputs)
            .map(function (name) { return parseNodeName(name)[0]; })
            .map(function (name) { return graph.nodes[name]; });
        var initNodes = graph.initNodes;
        inputNodes.forEach(function (input) {
            if (usedNodes.has(input.name)) {
                frontier.push(input);
            }
        });
        graph.weights.forEach(function (weight) {
            if (usedNodes.has(weight.name)) {
                frontier.push(weight);
            }
        });
        if (initNodes != null) {
            initNodes.forEach(function (node) {
                if (usedNodes.has(node.name)) {
                    frontier.push(node);
                }
            });
        }
        var seen = new Set();
        var orderedNodes = [];
        while (frontier.length > 0) {
            var node = frontier.pop();
            seen.add(node.name);
            if (!weightMap[node.name]) {
                orderedNodes.push(node);
            }
            node.children.forEach(function (child) {
                if (!seen.has(child.name) && usedNodes.has(child.name) &&
                    child.inputs.every(function (input) { return seen.has(input.name); })) {
                    frontier.push(child);
                }
            });
        }
        return orderedNodes;
    }
    var CONTROL_FLOW_OPS = [
        'Switch', 'Merge', 'Enter', 'Exit', 'NextIteration', 'StatelessIf',
        'StatelessWhile', 'if', 'While'
    ];
    var DYNAMIC_SHAPE_OPS = [
        'NonMaxSuppressionV2', 'NonMaxSuppressionV3', 'NonMaxSuppressionV5', 'Where'
    ];
    var HASH_TABLE_OPS = [
        'HashTable', 'HashTableV2', 'LookupTableImport', 'LookupTableImportV2',
        'LookupTableFind', 'LookupTableFindV2', 'LookupTableSize', 'LookupTableSizeV2'
    ];
    function isControlFlow(node) {
        return CONTROL_FLOW_OPS.indexOf(node.op) >= 0;
    }
    function isDynamicShape(node) {
        return DYNAMIC_SHAPE_OPS.indexOf(node.op) >= 0;
    }
    function isHashTable(node) {
        return HASH_TABLE_OPS.indexOf(node.op) >= 0;
    }

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var GraphExecutor = /** @class */ (function () {
        /**
         *
         * @param graph Graph the model or function graph to be executed.
         * @param parent When building function exector you need to set the parent
         * executor. Since the weights and function executor maps are set at parant
         * level, that function executor can access the function maps and weight maps
         * through the parent.
         */
        function GraphExecutor(graph, parent) {
            var _this = this;
            this.graph = graph;
            this.parent = parent;
            this.compiledMap = new Map();
            this._weightMap = {};
            this.SEPERATOR = ',';
            this._functions = {};
            this._functionExecutorMap = {};
            this._outputs = graph.outputs;
            this._inputs = graph.inputs;
            this._initNodes = graph.initNodes;
            this._signature = graph.signature;
            this._functions = graph.functions;
            // create sub-graph executors
            if (graph.functions != null) {
                Object.keys(graph.functions).forEach(function (name) {
                    _this._functionExecutorMap[name] =
                        new GraphExecutor(graph.functions[name], _this);
                });
            }
        }
        Object.defineProperty(GraphExecutor.prototype, "weightIds", {
            get: function () {
                return this.parent ? this.parent.weightIds : this._weightIds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphExecutor.prototype, "functionExecutorMap", {
            get: function () {
                return this.parent ? this.parent.functionExecutorMap :
                    this._functionExecutorMap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphExecutor.prototype, "weightMap", {
            get: function () {
                return this.parent ? this.parent.weightMap : this._weightMap;
            },
            set: function (weightMap) {
                var weightIds = Object.keys(weightMap).map(function (key) { return weightMap[key].map(function (tensor) { return tensor.id; }); });
                this._weightIds = [].concat.apply([], __spread(weightIds));
                this._weightMap = weightMap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphExecutor.prototype, "resourceManager", {
            /**
             * Set `ResourceManager` shared by executors of a model.
             * @param resourceManager: `ResourceManager` of the `GraphModel`.
             */
            set: function (resourceManager) {
                this._resourceManager = resourceManager;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphExecutor.prototype, "inputs", {
            get: function () {
                return this._inputs.map(function (node) {
                    return {
                        name: node.name,
                        shape: node.attrParams['shape'] ?
                            node.attrParams['shape'].value :
                            undefined,
                        dtype: node.attrParams['dtype'] ?
                            node.attrParams['dtype'].value :
                            undefined
                    };
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphExecutor.prototype, "outputs", {
            get: function () {
                return this._outputs.map(function (node) {
                    return {
                        name: node.name,
                        shape: node.attrParams['shape'] ?
                            node.attrParams['shape'].value :
                            undefined,
                        dtype: node.attrParams['dtype'] ?
                            node.attrParams['dtype'].value :
                            undefined
                    };
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphExecutor.prototype, "inputNodes", {
            get: function () {
                return this._inputs.map(function (node) { return node.signatureKey || node.name; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphExecutor.prototype, "outputNodes", {
            get: function () {
                return this._outputs.map(function (node) {
                    var name = node.signatureKey || node.name;
                    return node.defaultOutput ? (name + ":" + node.defaultOutput) : name;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphExecutor.prototype, "functions", {
            get: function () {
                var _this = this;
                return Object.keys(this._functions).reduce(function (map, key) {
                    map[key] = _this._functions[key].signature;
                    return map;
                }, {});
            },
            enumerable: true,
            configurable: true
        });
        GraphExecutor.prototype.getCompilationKey = function (inputs, outputs) {
            var sortedInputs = inputs.map(function (node) { return node.name; }).sort();
            var sortedOutputs = outputs.map(function (node) { return node.name; }).sort();
            return sortedInputs.join(this.SEPERATOR) + '--' +
                sortedOutputs.join(this.SEPERATOR);
        };
        /**
         * Compiles the inference graph and returns the minimal set of nodes that are
         * required for execution, in the correct execution order.
         */
        GraphExecutor.prototype.compile = function (inputs, outputs) {
            var executionInfo = getExecutionSubgraph(inputs, outputs, this.weightMap, this._initNodes);
            var missingInputs = executionInfo.missingInputs, dynamicNode = executionInfo.dynamicNode, syncInputs = executionInfo.syncInputs;
            if (dynamicNode != null) {
                throw new Error("This execution contains the node '" + dynamicNode.name + "', which has " +
                    ("the dynamic op '" + dynamicNode.op + "'. Please use ") +
                    "model.executeAsync() instead. Alternatively, to avoid the " +
                    ("dynamic ops, specify the inputs [" + syncInputs + "]"));
            }
            if (missingInputs.length > 0) {
                var outNames = outputs.map(function (n) { return n.name; });
                var inNames = Object.keys(inputs);
                throw new Error("Cannot compute the outputs [" + outNames + "] from the provided inputs " +
                    ("[" + inNames + "]. Missing the following inputs: [" + missingInputs + "]"));
            }
            return getNodesInTopologicalOrder(this.graph, this.weightMap, executionInfo);
        };
        /**
         * Executes the inference for given input tensors.
         * @param inputs Tensor map for the model inputs, keyed by the input node
         * names.
         * @param outputs Optional. output node name from the Tensorflow model, if
         * no outputs are specified, the default outputs of the model would be used.
         * You can inspect intermediate nodes of the model by adding them to the
         * outputs array.
         */
        GraphExecutor.prototype.execute = function (inputs, outputs) {
            var _this = this;
            inputs = this.mapInputs(inputs);
            var names = Object.keys(inputs).sort();
            this.checkInputs(inputs);
            this.checkInputShapeAndType(inputs);
            outputs = this.mapOutputs(outputs);
            this.checkOutputs(outputs);
            var inputNodes = names.map(function (name) { return _this.graph.nodes[parseNodeName(name)[0]]; });
            var outputNodeNames = outputs.map(function (name) { return parseNodeName(name)[0]; });
            var outputNodes = outputNodeNames.map(function (name) { return _this.graph.nodes[name]; });
            // If no outputs are specified, then use the default outputs of the model.
            if (outputNodes.length === 0) {
                outputNodes = this._outputs;
            }
            var compilationKey = this.getCompilationKey(inputNodes, outputNodes);
            // Do nothing if the compiled graph cache contains the input.
            var orderedNodes = this.compiledMap.get(compilationKey);
            if (orderedNodes == null) {
                orderedNodes = this.compile(inputs, outputNodes);
                this.compiledMap.set(compilationKey, orderedNodes);
            }
            var tensorArrayMap = {};
            var tensorListMap = {};
            return tfc.tidy(function () {
                var context = new ExecutionContext(_this.weightMap, tensorArrayMap, tensorListMap, _this.functionExecutorMap);
                var tensorsMap = __assign({}, _this.weightMap);
                Object.keys(inputs).forEach(function (name) {
                    var _a = __read(parseNodeName(name), 2), nodeName = _a[0], index = _a[1];
                    var tensors = [];
                    tensors[index] = inputs[name];
                    tensorsMap[nodeName] = tensors;
                });
                var tensorsToKeep = _this.getFrozenTensorIds(tensorsMap);
                var intermediateTensorConsumerCount = {};
                for (var i = 0; i < orderedNodes.length; i++) {
                    var node = orderedNodes[i];
                    if (!tensorsMap[node.name]) {
                        var tensors = executeOp$h(node, tensorsMap, context, _this._resourceManager);
                        if (tfc.util.isPromise(tensors)) {
                            throw new Error("The execution of the op '" + node.op + "' returned a promise. " +
                                "Please use model.executeAsync() instead.");
                        }
                        tensorsMap[node.name] = tensors;
                        _this.checkTensorForDisposal(node.name, node, tensorsMap, context, tensorsToKeep, outputNodeNames, intermediateTensorConsumerCount);
                    }
                }
                // dispose the context for the root executor
                if (_this.parent == null) {
                    context.dispose(tensorsToKeep);
                }
                return outputs.map(function (name) { return getTensor(name, tensorsMap, context); });
            });
        };
        GraphExecutor.prototype.getFrozenTensorIds = function (tensorMap) {
            var ids = [].concat.apply([], Object.keys(tensorMap)
                .map(function (key) { return tensorMap[key]; })
                .map(function (tensors) { return tensors.map(function (tensor) { return tensor.id; }); }));
            return new Set(ids);
        };
        GraphExecutor.prototype.checkTensorForDisposal = function (nodeName, node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount) {
            // Skip output nodes and any control flow nodes, since its dependency is
            // tricky to track correctly.
            if (node.category === 'control' || outputNames.indexOf(nodeName) !== -1) {
                return;
            }
            tensorMap[nodeName].forEach(function (tensor) {
                if (tensor != null) {
                    intermediateTensorConsumerCount[tensor.id] =
                        (intermediateTensorConsumerCount[tensor.id] || 0) +
                            node.children.length;
                }
            });
            node.inputs.forEach(function (input) {
                // Skip any control flow nodes, since its dependency is tricky to track
                // correctly.
                if (input.category !== 'control') {
                    var tensors = getTensorsForCurrentContenxt(input.name, tensorMap, context);
                    if (tensors != null) {
                        tensors.forEach(function (tensor) {
                            if (tensor && !tensorsToKeep.has(tensor.id)) {
                                var count = intermediateTensorConsumerCount[tensor.id];
                                if (count === 1) {
                                    tensor.dispose();
                                    delete intermediateTensorConsumerCount[tensor.id];
                                }
                                else if (count != null) {
                                    // only intermediate nodes has count set, inputs and weights are
                                    // not.
                                    intermediateTensorConsumerCount[tensor.id]--;
                                }
                            }
                        });
                    }
                }
            });
        };
        /**
         * Executes the inference for given input tensors in Async fashion.
         * @param inputs Tensor map for the model inputs, keyed by the input node
         * names.
         * @param outputs output node name from the Tensorflow model, if no outputs
         * are specified, the default outputs of the model would be used. You can
         * inspect intermediate nodes of the model by adding them to the outputs
         * array.
         */
        GraphExecutor.prototype.executeAsync = function (inputs, outputs) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this._executeAsync(inputs, outputs)];
                });
            });
        };
        /**
         * Executes the inference for given input tensors in Async fashion.
         * @param inputs Tensor map for the model inputs, keyed by the input node
         * names.
         * @param outputs Optional. output node name from the Tensorflow model,
         * if no outputs are specified, the default outputs of the model would be
         * used. You can inspect intermediate nodes of the model by adding them to the
         * outputs array.
         * @param isFunctionExecution Optional. Flag for executing a function.
         * @param tensorArrayMap Optional, global TensorArray map by id. Used for
         * function execution.
         * @param tensorArrayMap Optinal global TensorList map by id. Used for
         * function execution.
         */
        GraphExecutor.prototype._executeAsync = function (inputs, outputs, isFunctionExecution, tensorArrayMap, tensorListMap) {
            if (isFunctionExecution === void 0) { isFunctionExecution = false; }
            if (tensorArrayMap === void 0) { tensorArrayMap = {}; }
            if (tensorListMap === void 0) { tensorListMap = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var context, tensorMap, results, outputIds, inputIds, keepIds;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isFunctionExecution) {
                                inputs = this.mapInputs(inputs);
                                this.checkInputs(inputs);
                                this.checkInputShapeAndType(inputs);
                                outputs = this.mapOutputs(outputs);
                                this.checkOutputs(outputs);
                            }
                            context = new ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap);
                            return [4 /*yield*/, this.executeWithControlFlow(inputs, context, outputs, isFunctionExecution)];
                        case 1:
                            tensorMap = _a.sent();
                            results = outputs.map(function (name) { return getTensor(name, tensorMap, context); });
                            outputIds = results.map(function (t) { return t.id; });
                            inputIds = Object.keys(inputs).map(function (name) { return inputs[name].id; });
                            keepIds = new Set(__spread(outputIds, inputIds, this.weightIds));
                            Object.keys(tensorMap).forEach(function (key) {
                                var tensorArray = tensorMap[key];
                                tensorArray.forEach(function (tensor) {
                                    if (tensor && !tensor.isDisposed && !keepIds.has(tensor.id)) {
                                        tensor.dispose();
                                    }
                                });
                            });
                            // dispose the context for the root executor
                            if (this.parent == null) {
                                context.dispose(keepIds);
                            }
                            return [2 /*return*/, results];
                    }
                });
            });
        };
        GraphExecutor.prototype.executeFunctionAsync = function (inputs, tensorArrayMap, tensorListMap) {
            return __awaiter(this, void 0, void 0, function () {
                var mappedInputs;
                var _this = this;
                return __generator(this, function (_a) {
                    mappedInputs = inputs.reduce(function (map, tensor, index) {
                        map[_this.inputs[index].name] = tensor;
                        return map;
                    }, {});
                    return [2 /*return*/, this._executeAsync(mappedInputs, this.outputNodes, true, tensorArrayMap, tensorListMap)];
                });
            });
        };
        /**
         * When there are control flow nodes in the graph, the graph execution use
         * ExecutionContext to keep track of the frames and loop iterators.
         * @param inputs placeholder tensors for the graph.
         * @param context the execution context object for current execution.
         * @param outputNames Optional. output node name from the Tensorflow model,
         * if no outputs are specified, the default outputs of the model would be
         * used. You can inspect intermediate nodes of the model by adding them to the
         * outputs array.
         * @param isFunctionExecution Flag for executing a function.
         */
        GraphExecutor.prototype.executeWithControlFlow = function (inputs, context, outputNames, isFunctionExecution) {
            return __awaiter(this, void 0, void 0, function () {
                var names, inputNodes, outputNodeNames, outputNodes, _a, usedNodes, missingInputs, dynamicNode, syncInputs, stack, tensorsMap, intermediateTensorConsumerCount, tensorsToKeep, added, promises, missingOutputs, alternativeMsg;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            names = Object.keys(inputs);
                            inputNodes = names.map(function (name) { return _this.graph.nodes[parseNodeName(name)[0]]; });
                            outputNodeNames = outputNames.map(function (name) { return parseNodeName(name)[0]; });
                            outputNodes = outputNodeNames.map(function (name) { return _this.graph.nodes[name]; });
                            // If no outputs are specified, then use the default outputs of the model.
                            if (outputNodes.length === 0) {
                                outputNodes = this._outputs;
                            }
                            _a = getExecutionSubgraph(inputs, outputNodes, this.weightMap, this._initNodes), usedNodes = _a.usedNodes, missingInputs = _a.missingInputs, dynamicNode = _a.dynamicNode, syncInputs = _a.syncInputs;
                            stack = __spread(inputNodes, this.graph.weights, (this._initNodes || [])).map(function (node) {
                                return { node: node, contexts: context.currentContext };
                            });
                            tensorsMap = __assign({}, this.weightMap);
                            Object.keys(inputs).forEach(function (name) {
                                var _a = __read(parseNodeName(name), 2), nodeName = _a[0], index = _a[1];
                                var tensors = [];
                                tensors[index] = inputs[name];
                                tensorsMap[nodeName] = tensors;
                            });
                            intermediateTensorConsumerCount = {};
                            tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
                            added = {};
                            _b.label = 1;
                        case 1:
                            if (!(stack.length > 0)) return [3 /*break*/, 3];
                            promises = this.processStack(inputNodes, stack, context, tensorsMap, added, tensorsToKeep, outputNodeNames, intermediateTensorConsumerCount, usedNodes);
                            return [4 /*yield*/, Promise.all(promises)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 1];
                        case 3:
                            if (dynamicNode == null && !isFunctionExecution) {
                                console.warn("This model execution did not contain any nodes with control flow " +
                                    "or dynamic output shapes. You can use model.execute() instead.");
                            }
                            missingOutputs = outputNodes
                                .filter(function (node) { return !isControlFlow(node) &&
                                !getTensor(node.name, tensorsMap, context); })
                                .map(function (node) { return node.name; });
                            if (missingOutputs.length > 0) {
                                alternativeMsg = '';
                                if (dynamicNode != null) {
                                    alternativeMsg =
                                        "Alternatively, to avoid the dynamic ops, use model.execute() " +
                                            ("and specify the inputs [" + syncInputs + "]");
                                }
                                throw new Error("Cannot compute the outputs [" + missingOutputs + "] from the provided " +
                                    ("inputs [" + names + "]. Consider providing the following inputs: ") +
                                    ("[" + missingInputs + "]. " + alternativeMsg));
                            }
                            return [2 /*return*/, tensorsMap];
                    }
                });
            });
        };
        GraphExecutor.prototype.processStack = function (inputNodes, stack, context, tensorMap, added, tensorsToKeep, outputNames, intermediateTensorConsumerCount, usedNodes) {
            var _this = this;
            var promises = [];
            var _loop_1 = function () {
                var _a, _b;
                var item = stack.pop();
                context.currentContext = item.contexts;
                var nodeName = '';
                // The tensor of the Enter op with isConstant set should be set
                // in the parent scope, so it will be available as constant for the
                // whole loop.
                if (item.node.op === 'Enter' &&
                    getParamValue('isConstant', item.node, tensorMap, context)) {
                    _a = __read(getNodeNameAndIndex(item.node.name, context), 1), nodeName = _a[0];
                }
                // only process nodes that are not in the tensorMap yet, this include
                // inputNodes and internal initNodes.
                if (tensorMap[item.node.name] == null) {
                    var tensors = executeOp$h(item.node, tensorMap, context, this_1._resourceManager);
                    if (!nodeName) {
                        _b = __read(getNodeNameAndIndex(item.node.name, context), 1), nodeName = _b[0];
                    }
                    var currentContext_1 = context.currentContext;
                    if (tfc.util.isPromise(tensors)) {
                        promises.push(tensors.then(function (t) {
                            tensorMap[nodeName] = t;
                            context.currentContext = currentContext_1;
                            _this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
                            _this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
                            return t;
                        }));
                    }
                    else {
                        tensorMap[nodeName] = tensors;
                        this_1.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
                        this_1.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
                    }
                }
                else {
                    this_1.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
                }
            };
            var this_1 = this;
            while (stack.length > 0) {
                _loop_1();
            }
            return promises;
        };
        GraphExecutor.prototype.processChildNodes = function (node, stack, context, tensorMap, added, usedNodes) {
            node.children.forEach(function (childNode) {
                var _a = __read(getNodeNameAndIndex(childNode.name, context), 1), nodeName = _a[0];
                if (added[nodeName] || !usedNodes.has(childNode.name)) {
                    return;
                }
                // Merge op can be pushed if any of its inputs has value.
                if (childNode.op === 'Merge') {
                    if (childNode.inputNames.some(function (name) {
                        return !!getTensor(name, tensorMap, context);
                    })) {
                        added[nodeName] = true;
                        stack.push({ contexts: context.currentContext, node: childNode });
                    }
                }
                else // Otherwise all inputs must to have value.
                 if (childNode.inputNames.every(function (name) {
                    return !!getTensor(name, tensorMap, context);
                })) {
                    added[nodeName] = true;
                    stack.push({ contexts: context.currentContext, node: childNode });
                }
            });
        };
        /**
         * Releases the memory used by the weight tensors.
         */
        GraphExecutor.prototype.dispose = function () {
            var _this = this;
            Object.keys(this.weightMap)
                .forEach(function (key) { return _this.weightMap[key].forEach(function (tensor) { return tensor.dispose(); }); });
        };
        GraphExecutor.prototype.checkInputShapeAndType = function (inputs) {
            var _this = this;
            Object.keys(inputs).forEach(function (name) {
                var input = inputs[name];
                var _a = __read(parseNodeName(name), 1), nodeName = _a[0];
                var node = _this.graph.nodes[nodeName];
                if (node.attrParams['shape'] && node.attrParams['shape'].value) {
                    var shape_1 = node.attrParams['shape'].value;
                    var match = shape_1.length === input.shape.length &&
                        input.shape.every(function (dim, index) { return shape_1[index] === -1 || shape_1[index] === dim; });
                    tfc.util.assert(match, function () { return "The shape of dict['" + node.name + "'] provided in " +
                        ("model.execute(dict) must be [" + shape_1 + "], but was ") +
                        ("[" + input.shape + "]"); });
                }
                if (node.attrParams['dtype'] && node.attrParams['dtype'].value) {
                    tfc.util.assert(input.dtype === node.attrParams['dtype'].value, function () { return "The dtype of dict['" + node.name + "'] provided in " +
                        "model.execute(dict) must be " +
                        (node.attrParams['dtype'].value + ", but was " + input.dtype); });
                }
            });
        };
        GraphExecutor.prototype.mapInputs = function (inputs) {
            var result = {};
            for (var inputName in inputs) {
                if (this._signature != null && this._signature.inputs != null &&
                    this._signature.inputs[inputName] != null) {
                    var tensor = this._signature.inputs[inputName];
                    result[tensor.name] = inputs[inputName];
                }
                else {
                    result[inputName] = inputs[inputName];
                }
            }
            return result;
        };
        GraphExecutor.prototype.checkInputs = function (inputs) {
            var _this = this;
            var notInGraph = Object.keys(inputs).filter(function (name) {
                var _a = __read(parseNodeName(name), 1), nodeName = _a[0];
                return _this.graph.nodes[nodeName] == null;
            });
            if (notInGraph.length > 0) {
                throw new Error("The dict provided in model.execute(dict) has " +
                    ("keys: [" + notInGraph + "] that are not part of graph"));
            }
        };
        GraphExecutor.prototype.mapOutputs = function (outputs) {
            var _this = this;
            return outputs.map(function (name) {
                if (_this._signature != null && _this._signature.outputs != null &&
                    _this._signature.outputs[name] != null) {
                    var tensor = _this._signature.outputs[name];
                    return tensor.name;
                }
                return name;
            }, {});
        };
        GraphExecutor.prototype.checkOutputs = function (outputs) {
            var _this = this;
            outputs.forEach(function (name) {
                var _a = __read(parseNodeName(name), 1), normalizedName = _a[0];
                if (!_this.graph.nodes[normalizedName]) {
                    throw new Error("The output '" + name + "' is not found in the graph");
                }
            });
        };
        return GraphExecutor;
    }());

    /**
     * Contains global resources of a model.
     */
    var ResourceManager = /** @class */ (function () {
        function ResourceManager(hashTableNameToHandle, hashTableMap) {
            if (hashTableNameToHandle === void 0) { hashTableNameToHandle = {}; }
            if (hashTableMap === void 0) { hashTableMap = {}; }
            this.hashTableNameToHandle = hashTableNameToHandle;
            this.hashTableMap = hashTableMap;
        }
        /**
         * Register a `HashTable` in the resource manager.
         *
         * The `HashTable` can be retrieved by `resourceManager.getHashTableById`,
         * where id is the table handle tensor's id.
         *
         * @param name Op node name that creates the `HashTable`.
         * @param hashTable The `HashTable` to be added to resource manager.
         */
        ResourceManager.prototype.addHashTable = function (name, hashTable) {
            this.hashTableNameToHandle[name] = hashTable.handle;
            this.hashTableMap[hashTable.id] = hashTable;
        };
        /**
         * Get the table handle by node name.
         * @param name Op node name that creates the `HashTable`. This name is also
         *     used in the inputs list of lookup and import `HashTable` ops.
         */
        ResourceManager.prototype.getHashTableHandleByName = function (name) {
            return this.hashTableNameToHandle[name];
        };
        /**
         * Get the actual `HashTable` by its handle tensor's id.
         * @param id The id of the handle tensor.
         */
        ResourceManager.prototype.getHashTableById = function (id) {
            return this.hashTableMap[id];
        };
        /**
         * Dispose `ResourceManager`, including its hashTables and tensors in them.
         */
        ResourceManager.prototype.dispose = function () {
            for (var key in this.hashTableMap) {
                this.hashTableMap[key].clearAndClose();
                delete this.hashTableMap[key];
            }
            for (var name_1 in this.hashTableNameToHandle) {
                this.hashTableNameToHandle[name_1].dispose();
                delete this.hashTableNameToHandle[name_1];
            }
        };
        return ResourceManager;
    }());

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var TFHUB_SEARCH_PARAM = '?tfjs-format=file';
    var DEFAULT_MODEL_NAME = 'model.json';
    /**
     * A `tf.GraphModel` is a directed, acyclic graph built from a
     * SavedModel GraphDef and allows inference execution.
     *
     * A `tf.GraphModel` can only be created by loading from a model converted from
     * a [TensorFlow SavedModel](https://www.tensorflow.org/guide/saved_model) using
     * the command line converter tool and loaded via `tf.loadGraphModel`.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    var GraphModel = /** @class */ (function () {
        /**
         * @param modelUrl url for the model, or an `io.IOHandler`.
         * @param weightManifestUrl url for the weight file generated by
         * scripts/convert.py script.
         * @param requestOption options for Request, which allows to send credentials
         * and custom headers.
         * @param onProgress Optional, progress callback function, fired periodically
         * before the load is completed.
         */
        function GraphModel(modelUrl, loadOptions) {
            if (loadOptions === void 0) { loadOptions = {}; }
            this.modelUrl = modelUrl;
            this.loadOptions = loadOptions;
            this.version = 'n/a';
            if (loadOptions == null) {
                this.loadOptions = {};
            }
            this.resourceManager = new ResourceManager();
        }
        Object.defineProperty(GraphModel.prototype, "modelVersion", {
            // Returns the version information for the tensorflow model GraphDef.
            get: function () {
                return this.version;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphModel.prototype, "inputNodes", {
            get: function () {
                return this.executor.inputNodes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphModel.prototype, "outputNodes", {
            get: function () {
                return this.executor.outputNodes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphModel.prototype, "inputs", {
            get: function () {
                return this.executor.inputs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphModel.prototype, "outputs", {
            get: function () {
                return this.executor.outputs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphModel.prototype, "weights", {
            get: function () {
                return this.executor.weightMap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphModel.prototype, "metadata", {
            get: function () {
                return this.artifacts.userDefinedMetadata;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphModel.prototype, "modelSignature", {
            get: function () {
                return this.signature;
            },
            enumerable: true,
            configurable: true
        });
        GraphModel.prototype.findIOHandler = function () {
            var path = this.modelUrl;
            if (path.load != null) {
                // Path is an IO Handler.
                this.handler = path;
            }
            else if (this.loadOptions.requestInit != null) {
                this.handler = tfc.io.browserHTTPRequest(path, this.loadOptions);
            }
            else {
                var handlers = tfc.io.getLoadHandlers(path, this.loadOptions);
                if (handlers.length === 0) {
                    // For backward compatibility: if no load handler can be found,
                    // assume it is a relative http path.
                    handlers.push(tfc.io.browserHTTPRequest(path, this.loadOptions));
                }
                else if (handlers.length > 1) {
                    throw new Error("Found more than one (" + handlers.length + ") load handlers for " +
                        ("URL '" + [path] + "'"));
                }
                this.handler = handlers[0];
            }
        };
        /**
         * Loads the model and weight files, construct the in memory weight map and
         * compile the inference graph.
         */
        GraphModel.prototype.load = function () {
            return __awaiter(this, void 0, void 0, function () {
                var artifacts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.findIOHandler();
                            if (this.handler.load == null) {
                                throw new Error('Cannot proceed with model loading because the IOHandler provided ' +
                                    'does not have the `load` method implemented.');
                            }
                            return [4 /*yield*/, this.handler.load()];
                        case 1:
                            artifacts = _a.sent();
                            return [2 /*return*/, this.loadSync(artifacts)];
                    }
                });
            });
        };
        /**
         * Synchronously construct the in memory weight map and
         * compile the inference graph. Also initialize hashtable if any.
         *
         * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
         */
        GraphModel.prototype.loadSync = function (artifacts) {
            this.artifacts = artifacts;
            var graph = this.artifacts.modelTopology;
            var signature;
            if (this.artifacts.userDefinedMetadata != null &&
                this.artifacts.userDefinedMetadata.signature != null) {
                signature = // tslint:disable-next-line:no-any
                    this.artifacts.userDefinedMetadata.signature;
            }
            else {
                signature = this.artifacts.signature;
            }
            this.signature = signature;
            this.version = graph.versions.producer + "." + graph.versions.minConsumer;
            var weightMap = tfc.io.decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs);
            this.executor = new GraphExecutor(OperationMapper.Instance.transformGraph(graph, this.signature));
            this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap);
            // Attach a model-level resourceManager to each executor to share resources,
            // such as `HashTable`.
            this.executor.resourceManager = this.resourceManager;
            if (artifacts.modelInitializer != null &&
                artifacts.modelInitializer.node != null) {
                var initializer = OperationMapper.Instance.transformGraph(artifacts.modelInitializer);
                this.initializer = new GraphExecutor(initializer);
                this.initializer.weightMap = this.executor.weightMap;
                // Attach a model-level resourceManager to the initializer, the
                // hashTables created from when executing the initializer will be stored
                // in the resourceManager.
                this.initializer.resourceManager = this.resourceManager;
                this.initializer.executeAsync({}, []);
            }
            return true;
        };
        /**
         * Save the configuration and/or weights of the GraphModel.
         *
         * An `IOHandler` is an object that has a `save` method of the proper
         * signature defined. The `save` method manages the storing or
         * transmission of serialized data ("artifacts") that represent the
         * model's topology and weights onto or via a specific medium, such as
         * file downloads, local storage, IndexedDB in the web browser and HTTP
         * requests to a server. TensorFlow.js provides `IOHandler`
         * implementations for a number of frequently used saving mediums, such as
         * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
         * for more details.
         *
         * This method also allows you to refer to certain types of `IOHandler`s
         * as URL-like string shortcuts, such as 'localstorage://' and
         * 'indexeddb://'.
         *
         * Example 1: Save `model`'s topology and weights to browser [local
         * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
         * then load it back.
         *
         * ```js
         * const modelUrl =
         *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
         * const model = await tf.loadGraphModel(modelUrl);
         * const zeros = tf.zeros([1, 224, 224, 3]);
         * model.predict(zeros).print();
         *
         * const saveResults = await model.save('localstorage://my-model-1');
         *
         * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
         * console.log('Prediction from loaded model:');
         * model.predict(zeros).print();
         * ```
         *
         * @param handlerOrURL An instance of `IOHandler` or a URL-like,
         * scheme-based string shortcut for `IOHandler`.
         * @param config Options for saving the model.
         * @returns A `Promise` of `SaveResult`, which summarizes the result of
         * the saving, such as byte sizes of the saved artifacts for the model's
         *   topology and weight values.
         *
         * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
         */
        GraphModel.prototype.save = function (handlerOrURL, config) {
            return __awaiter(this, void 0, void 0, function () {
                var handlers;
                return __generator(this, function (_a) {
                    if (typeof handlerOrURL === 'string') {
                        handlers = tfc.io.getSaveHandlers(handlerOrURL);
                        if (handlers.length === 0) {
                            throw new Error("Cannot find any save handlers for URL '" + handlerOrURL + "'");
                        }
                        else if (handlers.length > 1) {
                            throw new Error("Found more than one (" + handlers.length + ") save handlers for " +
                                ("URL '" + handlerOrURL + "'"));
                        }
                        handlerOrURL = handlers[0];
                    }
                    if (handlerOrURL.save == null) {
                        throw new Error('GraphModel.save() cannot proceed because the IOHandler ' +
                            'provided does not have the `save` attribute defined.');
                    }
                    return [2 /*return*/, handlerOrURL.save(this.artifacts)];
                });
            });
        };
        /**
         * Execute the inference for the input tensors.
         *
         * @param input The input tensors, when there is single input for the model,
         * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
         * inputs params should be in either `tf.Tensor`[] if the input order is
         * fixed, or otherwise NamedTensorMap format.
         *
         * For model with multiple inputs, we recommend you use NamedTensorMap as the
         * input type, if you use `tf.Tensor`[], the order of the array needs to
         * follow the
         * order of inputNodes array. @see {@link GraphModel.inputNodes}
         *
         * You can also feed any intermediate nodes using the NamedTensorMap as the
         * input type. For example, given the graph
         *    InputNode => Intermediate => OutputNode,
         * you can execute the subgraph Intermediate => OutputNode by calling
         *    model.execute('IntermediateNode' : tf.tensor(...));
         *
         * This is useful for models that uses tf.dynamic_rnn, where the intermediate
         * state needs to be fed manually.
         *
         * For batch inference execution, the tensors for each input need to be
         * concatenated together. For example with mobilenet, the required input shape
         * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
         * If we are provide a batched data of 100 images, the input tensor should be
         * in the shape of [100, 244, 244, 3].
         *
         * @param config Prediction configuration for specifying the batch size and
         * output node names. Currently the batch size option is ignored for graph
         * model.
         *
         * @returns Inference result tensors. The output would be single `tf.Tensor`
         * if model has single output node, otherwise Tensor[] or NamedTensorMap[]
         * will be returned for model with multiple outputs.
         *
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        GraphModel.prototype.predict = function (inputs, config) {
            return this.execute(inputs, this.outputNodes);
        };
        GraphModel.prototype.normalizeInputs = function (inputs) {
            if (!(inputs instanceof tfc.Tensor) && !Array.isArray(inputs)) {
                // The input is already a NamedTensorMap.
                return inputs;
            }
            inputs = Array.isArray(inputs) ? inputs : [inputs];
            if (inputs.length !== this.inputNodes.length) {
                throw new Error('Input tensor count mismatch,' +
                    ("the graph model has " + this.inputNodes.length + " placeholders, ") +
                    ("while there are " + inputs.length + " input tensors."));
            }
            return this.inputNodes.reduce(function (map, inputName, i) {
                map[inputName] = inputs[i];
                return map;
            }, {});
        };
        GraphModel.prototype.normalizeOutputs = function (outputs) {
            outputs = outputs || this.outputNodes;
            return !Array.isArray(outputs) ? [outputs] : outputs;
        };
        /**
         * Executes inference for the model for given input tensors.
         * @param inputs tensor, tensor array or tensor map of the inputs for the
         * model, keyed by the input node names.
         * @param outputs output node name from the Tensorflow model, if no
         * outputs are specified, the default outputs of the model would be used.
         * You can inspect intermediate nodes of the model by adding them to the
         * outputs array.
         *
         * @returns A single tensor if provided with a single output or no outputs
         * are provided and there is only one default output, otherwise return a
         * tensor array. The order of the tensor array is the same as the outputs
         * if provided, otherwise the order of outputNodes attribute of the model.
         *
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        GraphModel.prototype.execute = function (inputs, outputs) {
            inputs = this.normalizeInputs(inputs);
            outputs = this.normalizeOutputs(outputs);
            var result = this.executor.execute(inputs, outputs);
            return result.length > 1 ? result : result[0];
        };
        /**
         * Executes inference for the model for given input tensors in async
         * fashion, use this method when your model contains control flow ops.
         * @param inputs tensor, tensor array or tensor map of the inputs for the
         * model, keyed by the input node names.
         * @param outputs output node name from the Tensorflow model, if no outputs
         * are specified, the default outputs of the model would be used. You can
         * inspect intermediate nodes of the model by adding them to the outputs
         * array.
         *
         * @returns A Promise of single tensor if provided with a single output or
         * no outputs are provided and there is only one default output, otherwise
         * return a tensor map.
         *
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        GraphModel.prototype.executeAsync = function (inputs, outputs) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            inputs = this.normalizeInputs(inputs);
                            outputs = this.normalizeOutputs(outputs);
                            return [4 /*yield*/, this.executor.executeAsync(inputs, outputs)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, result.length > 1 ? result : result[0]];
                    }
                });
            });
        };
        GraphModel.prototype.convertTensorMapToTensorsMap = function (map) {
            return Object.keys(map).reduce(function (newMap, key) {
                newMap[key] = [map[key]];
                return newMap;
            }, {});
        };
        /**
         * Releases the memory used by the weight tensors and resourceManager.
         *
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        GraphModel.prototype.dispose = function () {
            this.executor.dispose();
            if (this.initializer) {
                this.initializer.dispose();
            }
            this.resourceManager.dispose();
        };
        return GraphModel;
    }());
    /**
     * Load a graph model given a URL to the model definition.
     *
     * Example of loading MobileNetV2 from a URL and making a prediction with a
     * zeros input:
     *
     * ```js
     * const modelUrl =
     *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
     * const model = await tf.loadGraphModel(modelUrl);
     * const zeros = tf.zeros([1, 224, 224, 3]);
     * model.predict(zeros).print();
     * ```
     *
     * Example of loading MobileNetV2 from a TF Hub URL and making a prediction with
     * a zeros input:
     *
     * ```js
     * const modelUrl =
     *    'https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2';
     * const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
     * const zeros = tf.zeros([1, 224, 224, 3]);
     * model.predict(zeros).print();
     * ```
     * @param modelUrl The url or an `io.IOHandler` that loads the model.
     * @param options Options for the HTTP request, which allows to send credentials
     *    and custom headers.
     *
     * @doc {heading: 'Models', subheading: 'Loading'}
     */
    function loadGraphModel(modelUrl, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (modelUrl == null) {
                            throw new Error('modelUrl in loadGraphModel() cannot be null. Please provide a url ' +
                                'or an IOHandler that loads the model');
                        }
                        if (options == null) {
                            options = {};
                        }
                        if (options.fromTFHub) {
                            if (modelUrl.load == null) {
                                if (!modelUrl.endsWith('/')) {
                                    modelUrl = modelUrl + '/';
                                }
                                modelUrl = "" + modelUrl + DEFAULT_MODEL_NAME + TFHUB_SEARCH_PARAM;
                            }
                        }
                        model = new GraphModel(modelUrl, options);
                        return [4 /*yield*/, model.load()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, model];
                }
            });
        });
    }

    /** @license See the LICENSE file. */
    // This code is auto-generated, do not modify this file!
    var version = '3.3.0';

    exports.GraphModel = GraphModel;
    exports.deregisterOp = deregisterOp;
    exports.loadGraphModel = loadGraphModel;
    exports.registerOp = registerOp;
    exports.version_converter = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tf-converter.js.map
