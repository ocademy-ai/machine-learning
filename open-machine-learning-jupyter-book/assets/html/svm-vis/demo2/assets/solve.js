(function() {

  var currentWorker = null;

  window.app.solve = function(tradeoff, timeout, kernel, gridSize, pos, neg, cb) {
    if (currentWorker !== null) {
      currentWorker.terminate();
    }

    var message = [tradeoff, timeout, kernel, gridSize, pos, neg];

    currentWorker = new Worker('assets/webworker.js');
    currentWorker.onmessage = function(e) {
      currentWorker = null;
      var res = JSON.parse(e.data);
      res.gridCache = JSON.parse(res.gridCache);
      cb(res);
    };
    currentWorker.postMessage(message);
  };

})();
