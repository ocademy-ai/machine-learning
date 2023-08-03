(function() {

  var OPTION_SIZE = 40;
  var CANVAS_UPSCALE = 2;
  var DATA_COUNT = 100;

  var POSITIVE_COLOR = '#3355ff';
  var NEGATIVE_COLOR = '#ff5555';
  var CIRCLE_RADIUS = 2;

  function DataPicker() {
    var element = document.getElementById('data-picker');
    this._views = [];
    this.onChange = null;
    for (var i = 0, len = window.app.dataSets.length; i < len; ++i) {
      var ds = window.app.dataSets[i];
      var view = new DataView(ds);
      this._views.push(view);
      element.appendChild(view.element());

      view.element().addEventListener('click', function(i) {
        this.setSelected(i);
        this.onChange(i);
      }.bind(this, i));
    }
  }

  DataPicker.prototype.setSelected = function(idx) {
    for (var i = 0, len = this._views.length; i < len; ++i) {
      if (i === idx) {
        this._views[i].setSelected(true);
      } else {
        this._views[i].setSelected(false);
      }
    }
  };

  function DataView(ds) {
    this._canvas = document.createElement('canvas');
    this._canvas.width = OPTION_SIZE * CANVAS_UPSCALE;
    this._canvas.height = OPTION_SIZE * CANVAS_UPSCALE;

    var ctx = this._canvas.getContext('2d');
    ctx.scale(CANVAS_UPSCALE, CANVAS_UPSCALE);

    var data = ds.generateData(DATA_COUNT, DATA_COUNT);
    for (var i = 0, len = data.length; i < len; ++i) {
      var point = data[i];
      if (point.positive()) {
        ctx.fillStyle = POSITIVE_COLOR;
      } else {
        ctx.fillStyle = NEGATIVE_COLOR;
      }
      var x = (point.x() + 1) * OPTION_SIZE / 2;
      var y = (point.y() + 1) * OPTION_SIZE / 2;
      ctx.beginPath();
      ctx.arc(x, y, CIRCLE_RADIUS, 0, 2*Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  }

  DataView.prototype.element = function() {
    return this._canvas;
  };

  DataView.prototype.setSelected = function(f) {
    if (f) {
      this._canvas.className = 'selected';
    } else {
      this._canvas.className = '';
    }
  };

  window.app.DataPicker = DataPicker;

})();
