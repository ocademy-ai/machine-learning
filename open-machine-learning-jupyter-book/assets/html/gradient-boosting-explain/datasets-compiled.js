// different parts adopted from
// - http://otoro.net/ml/neat-playground/datafit-neat.js
// - and https://github.com/tensorflow/playground/blob/master/dataset.ts
// - stackoverflow
// - most datasets developed by me
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RandomGenerator = function () {
    function RandomGenerator(seed) {
        _classCallCheck(this, RandomGenerator);

        this.m_w = seed || 123456789;
        this.m_z = 987654321;
        this.mask = 0xffffffff;
    }

    _createClass(RandomGenerator, [{
        key: "random",
        value: function random() {
            this.m_z = 36969 * (this.m_z & 65535) + (this.m_z >> 16) & this.mask;
            this.m_w = 18000 * (this.m_w & 65535) + (this.m_w >> 16) & this.mask;
            var result = (this.m_z << 16) + this.m_w & this.mask;
            result /= 4294967296;
            return result + 0.5;
        }
    }, {
        key: "random_float",
        value: function random_float(a, b) {
            // generate random floating point number uniformly between a and b
            return this.random() * (b - a) + a;
        }
    }, {
        key: "random_int",
        value: function random_int(a, b) {
            // generate random integer uniformly between a and b (b excluded)
            return Math.floor(this.random_float(a, b - 0.00001));
        }
    }, {
        key: "random_normal",
        value: function random_normal(mean, sigma) {
            var std_normal = 0.;
            for (var i = 0; i < 8; i++) {
                std_normal += this.random();
            }std_normal = (std_normal - 4.) / Math.sqrt(8 / 12);
            return mean + std_normal * sigma;
        }
    }]);

    return RandomGenerator;
}();

function generate_circular_classification_sample(n_samples, seed) {
    var random = new RandomGenerator(seed);
    var X = [];
    var y = [];

    for (var event_id = 0; event_id < n_samples; event_id++) {
        var label = random.random_int(0, 2);
        var phi = random.random_float(0, 2 * Math.PI);
        var rho = (3 * random.random() + label * 3) / 10.;
        var x1 = Math.cos(phi) * rho + 0.5;
        var x2 = Math.sin(phi) * rho + 0.5;
        X.push([x1, x2]);
        y.push(label);
    }
    return [X, y];
}

function generate_xor_data(N, seed) {
    var random = new RandomGenerator(seed);
    var X = [];
    var labels = [];
    for (var i = 0; i < N; i++) {
        var x = random.random_float(0, 1);
        var y = random.random_float(0, 1);
        var label = 0;
        if (x > 0.5 && y > 0.5) label = 1;
        if (x < 0.5 && y < 0.5) label = 1;
        X.push([x, y]);
        labels.push(label);
    }
    return [X, labels];
}

function generate_spiral_data(N, noise, seed) {
    var random = new RandomGenerator(seed);
    var X = [];
    var labels = [];

    var n = N / 2;
    for (var label = 0; label < 2; label++) {
        var delta_phi = label * Math.PI;
        for (var i = 0; i < N / 2; i++) {
            var r = 0.5 * i / n;
            var phi = 1.75 * i / n * 2 * Math.PI + delta_phi;
            var x = 0.5 + r * Math.sin(phi) + random.random_float(-1, 1) * noise;
            var y = 0.5 + r * Math.cos(phi) + random.random_float(-1, 1) * noise;
            X.push([x, y]);
            labels.push(label);
        }
    }
    return [X, labels];
}

// function generate_gaussian_data(N, noise, seed) {
//     let random = new RandomGenerator(seed);
//     let X = [];
//     let labels = [];
//
//     function _generate_gaussian(xc, yc, label) {
//         let n = N / 2;
//         for (let i = 0; i < n; i++) {
//             let x = random.random_normal(xc, noise);
//             let y = random.random_normal(yc, noise);
//             X.push([x, y]);
//             labels.push(label);
//         }
//     }
//
//     _generate_gaussian(0.7, 0.7, 1); // Positive examples.
//     _generate_gaussian(0.3, 0.3, 0); // Negative examples.
//     return [X, labels];
// }

function generate_stripes_data(N, noise, seed) {
    var random = new RandomGenerator(seed);
    var X = [];
    var labels = [];
    for (var i = 0; i < N; i++) {
        var phi = random.random_float(0, 2 * Math.PI);
        var rho = Math.sqrt(random.random_float(0, 1.)) * 0.5;
        var x1 = rho * Math.cos(phi) + 0.5;
        var x2 = rho * Math.sin(phi) + 0.5;
        var label = Math.floor(x2 * 8) % 2;
        labels.push(label);
        X.push([x1, x2]);
    }
    return [X, labels];
}

function generate_embedded_circles_data(N, noise, seed) {
    var random = new RandomGenerator(seed);
    var X = [];
    var labels = [];
    for (var i = 0; i < N; i++) {
        var phi = i / N * (2. * Math.PI);
        var rho = Math.sqrt(random.random_float(0, 1.)) * 0.5;
        var x1 = rho * Math.cos(phi) + 0.5;
        var x2 = rho * Math.sin(phi) + 0.5;
        var label = Math.floor(rho * 10) % 2;
        labels.push(label);
        X.push([x1, x2]);
    }
    return [X, labels];
}

function generate_ying_yang_data(N, noise, seed) {
    var random = new RandomGenerator(seed);
    var X = [];
    var labels = [];
    for (var i = 0; i < N; i++) {
        var phi = i / N * (2. * Math.PI);
        var rho = Math.sqrt(random.random_float(0, 1.));
        var x1 = rho * Math.cos(phi);
        var x2 = rho * Math.sin(phi);
        var label = 2 * x2 > Math.sin(3 * x1) ? 0 : 1;
        if ((Math.abs(x1) - 0.55) * (Math.abs(x1) - 0.55) + x2 * x2 < 0.2 * 0.2) {
            label = 1 - label;
        }
        x1 = x1 / 2 + 0.5;
        x2 = x2 / 2 + 0.5;
        labels.push(label);
        X.push([x1, x2]);
    }
    return [X, labels];
}

function collect_datasets(n_samples, seed) {
    var datasets = [];
    datasets.push(generate_circular_classification_sample(n_samples, seed));
    datasets.push(generate_xor_data(n_samples, seed));
    datasets.push(generate_spiral_data(n_samples, 0.05, seed));
    datasets.push(generate_ying_yang_data(n_samples, null, seed));
    datasets.push(generate_stripes_data(n_samples, null, seed));
    datasets.push(generate_embedded_circles_data(n_samples, null, seed));
    return datasets;
}

//# sourceMappingURL=datasets-compiled.js.map