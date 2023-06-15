(function() {

  var TIMEOUT = 3000;
  var GRID_SIZE = 300;

  window.app.kernels = ['exp(-3*|x-y|)', 'Linear', '(xy+1)^2', 'tanh(xy-1)',
    'exp(-.1*|x-y|)', 'exp(-1*|x-y|)', 'exp(-10*|x-y|)'];

  function Classifier(samples, result) {
    this._samples = samples;
    this._result = result;
  }

  Classifier.prototype.samples = function() {
    return this._samples;
  };

  Classifier.prototype.supportVectors = function() {
    var vecs = [];
    var indices = this._result.classifier.indices;
    for (var i = 0, len = indices.length; i < len; ++i) {
      vecs.push(this._samples[indices[i]]);
    }
    return vecs;
  };

  Classifier.prototype.classify = function(x, y) {
    return this._result.gridCache[(x>>1) + GRID_SIZE*(y>>1)];
  };

  window.app.makeClassifier = function(samples, tradeoff, kernel, cb) {
    samples = samples.slice();

    var pos = [];
    var neg = [];
    for (var i = 0, len = samples.length; i < len; ++i) {
      var vec = samples[i].vector();
      if (samples[i].positive()) {
        pos.push(vec);
      } else {
        neg.push(vec);
      }
    }

    var outputElement = document.getElementById('output');
    outputElement.className = 'loading';
    window.app.solve(tradeoff, TIMEOUT, kernel, GRID_SIZE, pos, neg, function(s) {
      outputElement.className = '';
      cb(new Classifier(samples, s));
    });
  };

})();
