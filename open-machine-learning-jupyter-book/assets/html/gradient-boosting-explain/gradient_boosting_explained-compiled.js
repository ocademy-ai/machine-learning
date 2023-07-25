// TODO оптимизация графика gb-построения. Он тормозит.
// TODO поговорить про классификацию?
// TODO процесс построения одного дерева внутри бустинга?

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var base_3d_layout = {
    scene: {
        // axes' names are UTFed, since plotly.js doesn't support latex in 3d.
        xaxis: { title: 'x₁' },
        yaxis: { title: 'x₂' },
        zaxis: { title: 'y ' },
        // also I found no good way for isometric projection in plotly.js
        camera: {
            eye: { x: 1.25, y: 1.25, z: 1.25 }
        }
    },
    margin: { l: 0, r: 20, b: 0, t: 0 }
};

var one_column_3d_layout = {
    autosize: false,
    width: 400,
    height: 400
};

for (var attr_name in base_3d_layout) {
    one_column_3d_layout[attr_name] = base_3d_layout[attr_name];
}

var DatasetSelector = function () {
    function DatasetSelector(wrapper_div, on_dataset_change) {
        var _this = this;

        var n_ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;

        _classCallCheck(this, DatasetSelector);

        // everything is computed on the same grid
        this.n_ticks = n_ticks;
        this.axis_ticks = [];
        for (var x_tick = 0; x_tick < n_ticks; x_tick++) {
            this.axis_ticks.push((x_tick + 0.5) / n_ticks);
        }
        this.datasets = DatasetSelector.collect_toy_datasets(this.axis_ticks);

        this.wrapper_div = wrapper_div;
        this.color_scaler_heatmap = Utils.create_fast_color_scaler(["#28a7cd", "#e8eaeb", "#f5b362"], 30);

        var _loop = function _loop(i) {
            var canvas = document.createElement('canvas');
            canvas.width = n_ticks;
            canvas.height = n_ticks;
            _this.wrapper_div.appendChild(canvas);
            // hover for canvas
            canvas.onclick = function () {
                _this.select_dataset(i);
            };
            Utils.plot_function_to_canvas(canvas, _this.datasets[i][2], _this.color_scaler_heatmap);
        };

        for (var i = 0; i < this.datasets.length; i++) {
            _loop(i);
        }
        this.selected_dataset = 0;
        // trivial event
        this.on_dataset_change = on_dataset_change;
    }

    _createClass(DatasetSelector, [{
        key: 'get_current_dataset',
        value: function get_current_dataset() {
            return this.datasets[this.selected_dataset];
        }
    }, {
        key: 'select_dataset',
        value: function select_dataset(selected_dataset) {
            this.selected_dataset = selected_dataset;
            this.redraw();
            this.on_dataset_change();
        }
    }, {
        key: 'redraw',
        value: function redraw() {
            // seemingly, nothing to change
            return;
        }
    }], [{
        key: 'approximated_function_pyramid',
        value: function approximated_function_pyramid(x1, x2) {
            return Math.sin(4 * x1) * Math.cos(3 * x2) * 0.5;
        }
    }, {
        key: 'approximated_function_teardrop',
        value: function approximated_function_teardrop(x1, x2) {
            x1 -= 0.3;
            x2 -= 0.7;
            var r = Math.sqrt(x1 * x1 + x2 * x2) * 10;
            return 0.5 * Math.cos(r);
            //return Math.cos(r) / (2 + r / 5.);
        }
    }, {
        key: 'approximated_function_wall',
        value: function approximated_function_wall(x1, x2) {
            return x1 + x2 < 1 ? 0.5 : -0.5;
        }
    }, {
        key: 'approximated_function_xor',
        value: function approximated_function_xor(x1, x2) {
            return (x1 - 0.4) * (x2 - 0.6) > 0 ? 0.5 : -0.5;
        }
    }, {
        key: 'approximated_function_diffgauss',
        value: function approximated_function_diffgauss(x1, x2) {
            var shift = 0.1;
            var gauss1x = x1 - 0.5 + shift;
            var gauss1y = x2 - 0.5 + shift;
            var gauss2x = x1 - 0.5 - shift;
            var gauss2y = x2 - 0.5 - shift;
            return Math.exp(-7 * (gauss1x * gauss1x + gauss1y * gauss1y)) - Math.exp(-7 * (gauss2x * gauss2x + gauss2y * gauss2y));
        }
    }, {
        key: 'collect_toy_datasets',
        value: function collect_toy_datasets(axis_ticks) {
            var z_grids = [];

            z_grids.push(Utils.compute_grid_for_function(axis_ticks, DatasetSelector.approximated_function_pyramid));
            z_grids.push(Utils.compute_grid_for_function(axis_ticks, DatasetSelector.approximated_function_teardrop));
            z_grids.push(Utils.compute_grid_for_function(axis_ticks, DatasetSelector.approximated_function_wall));
            z_grids.push(Utils.compute_grid_for_function(axis_ticks, DatasetSelector.approximated_function_diffgauss));
            z_grids.push(Utils.compute_grid_for_function(axis_ticks, DatasetSelector.approximated_function_xor));

            var train_datasets = [];

            for (var i = 0; i < z_grids.length; i++) {
                var z_grid = z_grids[i];

                var _Utils$convert_grid_t = Utils.convert_grid_to_training(z_grid, axis_ticks),
                    _Utils$convert_grid_t2 = _slicedToArray(_Utils$convert_grid_t, 2),
                    trainX = _Utils$convert_grid_t2[0],
                    trainY = _Utils$convert_grid_t2[1];

                train_datasets.push([trainX, trainY, z_grid]);
            }
            return train_datasets;
        }
    }]);

    return DatasetSelector;
}();

var DecisionTreeVisualization = function () {
    function DecisionTreeVisualization() {
        var _this2 = this;

        _classCallCheck(this, DecisionTreeVisualization);

        this.main_div = document.getElementById('tree_visualization');
        this.tree_depth_control = document.getElementById('tree_depth_control');
        this.tree_depth_display = document.getElementById('tree_depth_display');
        this.look_from_above_button = document.getElementById('tree_look_from_above_control');
        this.dataset_control = document.getElementById('tree_dataset_select_control');

        this.tree_depth_control.oninput = function () {
            _this2.redraw();
        };
        this.look_from_above_button.onclick = function () {
            _this2.look_from_above();
        };
        this.dataset = new DatasetSelector(this.dataset_control, function () {
            _this2.redraw();
        });
        var ticks = this.dataset.axis_ticks;
        Plotly.newPlot(this.main_div, [Utils.get_3d_plot(ticks, 0.95), Utils.get_3d_plot(ticks, 1.0)], clone(base_3d_layout));
        this.redraw();
    }

    _createClass(DecisionTreeVisualization, [{
        key: 'compute_tree_prediction',
        value: function compute_tree_prediction(depth) {
            var _dataset$get_current_ = this.dataset.get_current_dataset(),
                _dataset$get_current_2 = _slicedToArray(_dataset$get_current_, 3),
                trainX = _dataset$get_current_2[0],
                trainY = _dataset$get_current_2[1],
                z_grid = _dataset$get_current_2[2];

            var tree = new DecisionTreeRegressor(trainX, trainY, depth);
            return Utils.compute_grid_for_function(this.dataset.axis_ticks, function (x1, x2) {
                return tree.predict_one_event([x1, x2]);
            });
        }
    }, {
        key: 'look_from_above',
        value: function look_from_above() {
            var new_layout = clone(base_3d_layout);
            new_layout['scene']['camera'] = { eye: { x: 0.1, y: 0.1, z: Math.sqrt(3) * 1.25 } };
            // Plotly.relayout doesn't change camera position. So I have to recreate the plot.
            Plotly.newPlot(this.main_div, this.main_div.data, new_layout);
            this.redraw();
        }
    }, {
        key: 'redraw',
        value: function redraw() {
            var new_depth = this.tree_depth_control.value;
            this.tree_depth_display.innerHTML = new_depth.toString();
            var tree_predictions = this.compute_tree_prediction(new_depth);
            Plotly.restyle(this.main_div, { z: [tree_predictions] }, 1);
            var function_z_grid = this.dataset.get_current_dataset()[2];
            Plotly.restyle(this.main_div, { z: [function_z_grid] }, 0);
        }
    }]);

    return DecisionTreeVisualization;
}();

var tree_visualization = new DecisionTreeVisualization(50);

var GradientBoostingInitialVisualization = function () {
    function GradientBoostingInitialVisualization() {
        var _this3 = this;

        _classCallCheck(this, GradientBoostingInitialVisualization);

        this.main_div = document.getElementById('gb_simple_visualization');
        this.depth_control = document.getElementById('gb_simple_depth_control');
        this.depth_display = document.getElementById('gb_simple_depth_display');
        this.depth_control.oninput = function () {
            _this3.redraw();
        };
        //this.computed_results = [];

        this.dataset_control = document.getElementById('gb_simple_dataset_select_control');
        this.dataset = new DatasetSelector(this.dataset_control, function () {
            _this3.redraw();
        });

        var ticks = this.dataset.axis_ticks;
        Plotly.newPlot(this.main_div, [Utils.get_3d_plot(ticks, 0.95), Utils.get_3d_plot(ticks, 1.0)], clone(base_3d_layout));

        this.redraw();
    }

    _createClass(GradientBoostingInitialVisualization, [{
        key: 'compute_boosting_prediction',
        value: function compute_boosting_prediction(depth) {
            var _dataset$get_current_3 = this.dataset.get_current_dataset(),
                _dataset$get_current_4 = _slicedToArray(_dataset$get_current_3, 3),
                trainX = _dataset$get_current_4[0],
                trainY = _dataset$get_current_4[1],
                z_grid = _dataset$get_current_4[2];
            // saves already computed values
            //if (this.computed_results[depth] === undefined) {

            var n_estimators = 100;
            var learning_rate = 0.1;
            var gb_reg = new GradientBoostingRegressor(trainX, trainY, n_estimators, depth, learning_rate);
            return Utils.compute_grid_for_function(this.dataset.axis_ticks, function (x1, x2) {
                return gb_reg.predict_one_event([x1, x2]);
            });
            //}
            //return this.computed_results[depth];
        }
    }, {
        key: 'redraw',
        value: function redraw() {
            var depth = this.depth_control.value;
            this.depth_display.innerHTML = depth.toString();
            Plotly.restyle(this.main_div, { z: [this.compute_boosting_prediction(depth)] }, 1);
            var function_z_grid = this.dataset.get_current_dataset()[2];
            Plotly.restyle(this.main_div, { z: [function_z_grid] }, 0);
        }
    }]);

    return GradientBoostingInitialVisualization;
}();

var gradient_boosting_initial_visualization = new GradientBoostingInitialVisualization();

var GradientBoostingBuildingVisuzalization = function () {
    function GradientBoostingBuildingVisuzalization() {
        var _this4 = this;

        _classCallCheck(this, GradientBoostingBuildingVisuzalization);

        this.left_div = document.getElementById('gb_build_visualization_prediction');
        this.right_div = document.getElementById('gb_build_visualization_residual');

        this.depth_control = document.getElementById('gb_build_depth_control');
        this.depth_display = document.getElementById('gb_build_depth_display');

        this.estimator_control = document.getElementById('gb_build_estimator_control');
        this.estimator_display = document.getElementById('gb_build_estimator_display');

        this.dataset_control = document.getElementById('gb_build_dataset_select_control');

        this.trained_gb_regressors = Utils.create_2D_array(10);

        this.depth_control.oninput = function () {
            _this4.redraw();
        };
        this.estimator_control.oninput = function () {
            _this4.redraw();
        };

        this.dataset = new DatasetSelector(this.dataset_control, function () {
            _this4.redraw();
        });
        var ticks = this.dataset.axis_ticks;

        // target and boosting predictions
        Plotly.newPlot(this.left_div, [Utils.get_3d_plot(ticks, 0.95), Utils.get_3d_plot(ticks, 1.0)], one_column_3d_layout);

        Plotly.newPlot(this.right_div, [Utils.get_3d_plot(ticks, 0.95), Utils.get_3d_plot(ticks, 1.0)], one_column_3d_layout);

        // target and boosting predictions
        //Plotly.newPlot(this.left_div, [clone(function_plot), clone(prediction3d_plot)], one_column_3d_layout);
        // residual and tree predictions
        //Plotly.newPlot(this.right_div, [clone(function_plot), clone(prediction3d_plot)], one_column_3d_layout);

        this.redraw();
    }

    _createClass(GradientBoostingBuildingVisuzalization, [{
        key: 'compute_prediction_and_residual',
        value: function compute_prediction_and_residual(depth, estimator) {
            var _dataset$get_current_5 = this.dataset.get_current_dataset(),
                _dataset$get_current_6 = _slicedToArray(_dataset$get_current_5, 3),
                trainX = _dataset$get_current_6[0],
                trainY = _dataset$get_current_6[1],
                function_z_grid = _dataset$get_current_6[2];

            var axis_ticks = this.dataset.axis_ticks;
            var n_ticks = axis_ticks.length;
            var selected_dataset = this.dataset.selected_dataset;
            if (this.trained_gb_regressors[depth][selected_dataset] === undefined) {
                // save trained regressor
                var n_estimators = 12;
                var learning_rate = 0.3;
                this.trained_gb_regressors[depth][selected_dataset] = new GradientBoostingRegressor(trainX, trainY, n_estimators, depth, learning_rate);
            }
            var gb_reg = this.trained_gb_regressors[depth][selected_dataset];
            var tree = gb_reg.trees[estimator];

            var truncated_predict = function truncated_predict(x1, x2) {
                return gb_reg.predict_one_event([x1, x2], estimator);
            };
            var gb_truncated_predictions = Utils.compute_grid_for_function(axis_ticks, truncated_predict);
            var tree_predict = function tree_predict(x1, x2) {
                return tree.predict_one_event([x1, x2]);
            };
            var tree_predictions = Utils.compute_grid_for_function(axis_ticks, tree_predict);

            var residual = Utils.create_2D_array(n_ticks);
            for (var x_tick = 0; x_tick < n_ticks; x_tick++) {
                for (var y_tick = 0; y_tick < n_ticks; y_tick++) {
                    residual[x_tick][y_tick] = function_z_grid[x_tick][y_tick] - gb_truncated_predictions[x_tick][y_tick];
                }
            }
            return [gb_truncated_predictions, residual, tree_predictions];
        }
    }, {
        key: 'redraw',
        value: function redraw() {
            var estimator = this.estimator_control.value;
            var depth = this.depth_control.value;
            this.estimator_display.innerHTML = estimator.toString();
            this.depth_display.innerHTML = depth.toString();

            var _compute_prediction_a = this.compute_prediction_and_residual(depth, estimator),
                _compute_prediction_a2 = _slicedToArray(_compute_prediction_a, 3),
                prediction = _compute_prediction_a2[0],
                residual = _compute_prediction_a2[1],
                tree_prediction = _compute_prediction_a2[2];

            var function_z_grid = this.dataset.get_current_dataset()[2];
            Plotly.restyle(this.left_div, { z: [function_z_grid] }, 0);
            Plotly.restyle(this.left_div, { z: [prediction] }, 1);
            Plotly.restyle(this.right_div, { z: [tree_prediction] }, 1);
            // this one takes damn long. I don't know why
            Plotly.restyle(this.right_div, { z: [residual] }, 0);
        }
    }]);

    return GradientBoostingBuildingVisuzalization;
}();

var gradient_boosting_visualization = new GradientBoostingBuildingVisuzalization();

// Bind unfolding of descriptions
$('.explanation-preview').on('click', function () {
    var name = $(this).attr('data-explained');
    var found = $.find('.explanation-content[data-explained=' + name + ']');
    $(found).fadeIn(400);
});

//# sourceMappingURL=gradient_boosting_explained-compiled.js.map