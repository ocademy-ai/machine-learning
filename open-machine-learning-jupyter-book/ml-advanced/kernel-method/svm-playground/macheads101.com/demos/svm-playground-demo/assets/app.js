(function() {

  var SAMPLE_COUNT = 100;

  var dataView;

  var currentDataSet;
  var currentKernel;
  var currentThreshold;

  function setupKernelPicker() {
    var picker = document.getElementById('kernel-picker');
    for (var i = 0, len = window.app.kernels.length; i < len; ++i) {
      var name = window.app.kernels[i];
      var option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      picker.appendChild(option);
    }
    currentKernel = window.app.kernels[0];
    picker.addEventListener('change', function() {
      currentKernel = picker.value;
      trainClassifier();
    });
  }

  function setupDataPicker() {
    var picker = new window.app.DataPicker();
    picker.setSelected(0);
    picker.onChange = function(dataIdx) {
      currentDataSet = window.app.dataSets[dataIdx];
      dataView.setSamples(currentDataSet.generateData(SAMPLE_COUNT, SAMPLE_COUNT));
      trainClassifier();
    };
    currentDataSet = window.app.dataSets[0];
  }

  function setupThresholdPicker() {
    var thresholds = [0.0001, 0.0005, 0.001, 0.005, 0.01, 0.05];
    var picker = document.getElementById('threshold-picker');
    for (var i = 0, len = thresholds.length; i < len; ++i) {
      var name = ''+thresholds[i];
      var option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      picker.appendChild(option);
    }
    currentThreshold = thresholds[0];
    picker.addEventListener('change', function() {
      currentThreshold = parseFloat(picker.value);
      trainClassifier();
    });
  }

  function setupSupportCheckbox() {
    var box = document.getElementById('support-only-checkbox');
    box.addEventListener('change', function() {
      dataView.setSupportOnly(box.checked);
    });
  }

  function setupDiscretizeCheckbox() {
    var box = document.getElementById('discretize-checkbox');
    box.addEventListener('change', function() {
      dataView.setDiscretize(box.checked);
    });
  }

  function setupDataView() {
    var dataCanvas = document.getElementById('data-canvas');
    dataView = new window.app.DataView(dataCanvas);
  }

  function trainClassifier() {
    dataView.setClassifier(null);
    var data = dataView.getSamples();
    window.app.makeClassifier(data, currentThreshold, currentKernel,
      dataView.setClassifier.bind(dataView));
  }

  window.addEventListener('load', function() {
    setupKernelPicker();
    setupDataPicker();
    setupThresholdPicker();
    setupSupportCheckbox();
    setupDiscretizeCheckbox();
    setupDataView();

    var data = currentDataSet.generateData(SAMPLE_COUNT, SAMPLE_COUNT);
    dataView.setSamples(data);
    trainClassifier();
  });

})();
