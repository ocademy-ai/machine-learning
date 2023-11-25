(function() {

  var CIRCLE_RADIUS = 0.015;
  var CIRCLE_BORDER_WIDTH = 0.008;
  var CIRCLE_BORDER_COLOR = 'black';
  var POSITIVE_COLOR = '#3355ff';
  var NEGATIVE_COLOR = '#ff5555';

  var POS_DECISION_COLOR = [0x67, 0x9a, 0xee];
  var NEG_DECISION_COLOR = [0xf7, 0x9a, 0x9b];

  function DataView(canvas) {
    this._canvas = canvas;

    this._samples = [];
    this._classifier = null;
    this._discretize = false;
    this._supportOnly = false;

    this._cachedClassifierDrawing = null;
    this._cachedProducts = null;
  }

  DataView.prototype.getSamples = function() {
    return this._samples;
  };

  DataView.prototype.setSamples = function(s) {
    this._samples = s;
    this._draw();
  };

  DataView.prototype.setClassifier = function(c) {
    this._classifier = c;
    this._cachedClassifierDrawing = null;
    this._cachedProducts = null;
    this._draw();
  };

  DataView.prototype.setDiscretize = function(f) {
    this._discretize = f;
    this._cachedClassifierDrawing = null;
    this._draw();
  };

  DataView.prototype.setSupportOnly = function(f) {
    this._supportOnly = f;
    this._draw();
  };

  DataView.prototype._draw = function() {
    var ctx = this._canvas.getContext('2d');
    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    if (this._classifier !== null) {
      this._drawClassifier(ctx);
    }
    this._drawSamplePoints(ctx);
  };

  DataView.prototype._drawClassifier = function(ctx) {
    if (this._cachedClassifierDrawing === null) {
      var width = this._canvas.width;
      var height = this._canvas.height;
      var data = ctx.createImageData(width, height);
      var dataIdx = 0;
      for (var y = 0; y < height; ++y) {
        for (var x = 0; x < width; ++x) {
          var color = this._colorForPoint(x, y);
          for (var i = 0; i < 3; ++i) {
            data.data[dataIdx+i] = color[i];
          }
          data.data[dataIdx+3] = 255;
          dataIdx += 4;
        }
      }
      this._cachedClassifierDrawing = data;
    }
    ctx.putImageData(this._cachedClassifierDrawing, 0, 0);
  };

  DataView.prototype._drawSamplePoints = function(ctx) {
    var scale = this._canvas.width;
    ctx.strokeStyle = CIRCLE_BORDER_COLOR * scale;
    ctx.lineWidth = CIRCLE_BORDER_WIDTH * scale;

    var samples = this._samplesToDraw();
    for (var i = 0, len = samples.length; i < len; ++i) {
      var sample = samples[i];
      var x = (sample.x()+1)/2;
      var y = (sample.y()+1)/2;
      ctx.fillStyle = POSITIVE_COLOR;
      if (!sample.positive()) {
        ctx.fillStyle = NEGATIVE_COLOR;
      }
      ctx.beginPath();
      ctx.arc(x*scale, y*scale, CIRCLE_RADIUS*scale, 0, 2*Math.PI);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  };

  DataView.prototype._samplesToDraw = function() {
    if (!this._supportOnly || this._classifier === null) {
      return this._samples;
    } else {
      return this._classifier.supportVectors();
    }
  };

  DataView.prototype._colorForPoint = function(x, y) {
    var width = this._canvas.width;
    if (this._cachedProducts !== null) {
      var rating = this._cachedProducts[x+y*width];
      if (this._discretize) {
        if (rating > 0) {
          return POS_DECISION_COLOR;
        } else {
          return NEG_DECISION_COLOR;
        }
      } else {
        return colorForDecision(rating);
      }
    }

    var height = this._canvas.height;
    this._cachedProducts = [];

    for (var y = 0; y < height; ++y) {
      for (var x = 0; x < width; ++x) {
        var rating = this._classifier.classify(x, y);
        this._cachedProducts.push(rating);
      }
    }

    return this._colorForPoint(x, y);
  };

  function colorForDecision(d) {
    if (d > 1) {
      return POS_DECISION_COLOR;
    } else if (d < -1) {
      return NEG_DECISION_COLOR;
    } else if (d > 0) {
      var res = [];
      for (var i = 0; i < 3; ++i) {
        res[i] = POS_DECISION_COLOR[i]*d + 0xff*(1-d);
      }
      return res;
    } else {
      var res = [];
      for (var i = 0; i < 3; ++i) {
        res[i] = -NEG_DECISION_COLOR[i]*d + 0xff*(1+d);
      }
      return res;
    }
  }

  window.app.DataView = DataView;

})();
