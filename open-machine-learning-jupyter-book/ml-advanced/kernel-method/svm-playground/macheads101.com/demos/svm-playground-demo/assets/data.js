(function() {

  function DataPoint(x, y, sign) {
    this._x = x;
    this._y = y;
    this._sign = sign;
  }

  DataPoint.prototype.x = function() {
    return this._x;
  };

  DataPoint.prototype.y = function() {
    return this._y;
  };

  DataPoint.prototype.vector = function() {
    return [this._x, this._y];
  };

  DataPoint.prototype.positive = function() {
    return this._sign;
  };

  function DataSet(posGen, negGen) {
    this._posGen = posGen;
    this._negGen = negGen;
  }

  DataSet.prototype.generateData = function(posCount, negCount) {
    var res = [];
    for (var i = 0, count = posCount+negCount; i < count; ++i) {
      if (i < posCount) {
        res.push(this._posGen());
      } else {
        res.push(this._negGen());
      }
    }
    return res;
  };

  window.app.dataSets = [
    new DataSet(function() {
      while (true) {
        var p = randomPoint();
        if ((p[0]-0.2)*(p[0]-0.2)+p[1]*p[1] < 0.25) {
          return new DataPoint(p[0], p[1], true);
        }
      }
    }, function() {
      while (true) {
        var p = randomPoint();
        if ((p[0]-0.2)*(p[0]-0.2)+p[1]*p[1] > 0.45) {
          return new DataPoint(p[0], p[1], false);
        }
      }
    }),
    new DataSet(function() {
      while (true) {
        var p = randomPoint();
        if (p[0]+p[1] > 0.2) {
          return new DataPoint(p[0], p[1], true);
        }
      }
    }, function() {
      while (true) {
        var p = randomPoint();
        if (p[0]+p[1] < -0.2) {
          return new DataPoint(p[0], p[1], false);
        }
      }
    }),
    new DataSet(function() {
      while (true) {
        var p = randomPoint();
        if ((p[0] < -0.1 && p[1] < -0.1) ||
            (p[0] > 0.1 && p[1] > 0.1)) {
          return new DataPoint(p[0], p[1], true);
        }
      }
    }, function() {
      while (true) {
        var p = randomPoint();
        if ((p[0] < -0.1 && p[1] > 0.1) ||
            (p[0] > 0.1 && p[1] < -0.1)) {
          return new DataPoint(p[0], p[1], false);
        }
      }
    }),
    new DataSet(function() {
      while (true) {
        var angle = Math.random() * 3 * Math.PI;
        return new DataPoint(Math.sin(angle)*angle/10,
          Math.cos(angle)*angle/10, true);
      }
    }, function() {
      while (true) {
        var angle = Math.random() * 3 * Math.PI;
        var offset = -Math.PI;
        return new DataPoint(Math.sin(angle+offset)*angle/10,
          Math.cos(-angle+offset)*angle/10, false);
      }
    })
  ];

  function randomPoint() {
    return [Math.random()*2-1, Math.random()*2-1];
  }

  window.app.DataPoint = DataPoint;

})();
