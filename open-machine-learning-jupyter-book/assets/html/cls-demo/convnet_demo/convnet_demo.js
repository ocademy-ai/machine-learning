
var classes_txt = ['airplane', 'car', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck'];

var resources_need = 2;
var resources_have = 0;
var start_convnet_demo = function() {
  // load test batch of cifar-10
  load_from_json();
  load_data_batch();
}

// Load test data batch of 50 images from CIFAR-10
var img_data = null;
var load_data_batch = function() {
  var data_img_elt = new Image();
  data_img_elt.onload = function() { 
    var data_canvas = document.createElement('canvas');
    data_canvas.width = data_img_elt.width;
    data_canvas.height = data_img_elt.height;
    var data_ctx = data_canvas.getContext("2d");
    data_ctx.drawImage(data_img_elt, 0, 0); // copy it over... bit wasteful :(
    img_data = data_ctx.getImageData(0, 0, data_canvas.width, data_canvas.height);
    resources_have += 1;
    if(resources_have >= resources_need) { init_done(); }
  };
  data_img_elt.src = "convnet_demo/cifar10_batch_50_small.png";
}

// Load net from file
var net = null;
var load_from_json = function() {
  $.getJSON("convnet_demo/model.json", function( json ) {
    net = new convnetjs.Net();
    net.fromJSON(json);
    resources_have += 1;
    if(resources_have >= resources_need) { init_done(); }
  });
}

var tickid = 0;
var init_done = function() {
  // called when all data + net loaded
  console.log('init done. starting demo convnet.');
  tickid = setInterval(tick_prediction, 3000);
  tick_prediction();
}

var abort_tick = function() {
  console.log('aborting demo because it takes too long in this browser.');
  $("#demomsg").text('live demo aborted (slow browser)');
  clearInterval(tickid);
}

var tick_prediction = function() {
  var t0 = +new Date();
  var sample = sample_instance();
  var preds = evaluate_test_example(sample);
  draw_network_state(preds);
  var t1 = +new Date();
  var dt = t1 - t0;
  if(dt > 750) {
    abort_tick();
  }
}

var draw_network_state = function(preds) {
  var ww = $(window).width();

  var parent_div = document.getElementById('convnetvis');
  parent_div.innerHTML = '';

  // draw convnet activations
  var N = net.layers.length;
  for(var i=0;i<N;i++) {
    var L = net.layers[i];
    if(L.layer_type == 'softmax') { continue; }

    if(ww < 950) {
      // we have to collapse. skip conv layers
      if(L.layer_type === 'conv') { continue; }
    }
    if(ww < 660) {
      // we have to collapse even more. skip pool layers
      if(L.layer_type === 'pool') { continue; }
    }
    if(ww < 522) {
      if(L.layer_type === 'softmax') { continue; } 
    }
    if(ww < 450) {
      if(!(i === 0 || i === 4 || i === 9 || i === 14)) {
        continue;
      }
    }
    /*
    if(!(L.layer_type === 'input' || L.layer_type == 'relu' || L.layer_type == 'softmax' || L.layer_type)) {
      continue; // leave out
    }
    */
    var div = document.createElement('div');
    div.className = 'layer';

    if(i === 0) {
      // data layer
      draw_activations_COLOR(div, L.out_act, 2); // draw Vol into canv
      div.setAttribute("id", "inputlayer");
    } else {
      var sx = L.out_act.sx;
      if(sx === 32) s = 1;
      if(sx === 16) s = 2;
      if(sx === 8) s = 4;
      if(sx === 4) s = 8;
      if(sx === 1) s = 32;
      draw_activations(div, L.out_act, s);
    }
    parent_div.appendChild(div);
  }

  // append predictions
  var probsdiv = document.createElement('div');
  div.setAttribute("id", "probsdiv");
  probsdiv.className = 'layer';
  for(var k=0;k<5;k++) {
    var r = document.createElement('div');
    r.className = 'pp';
    r.innerHTML = classes_txt[preds[k].k];
    $(r).animate({'width' : Math.floor(preds[k].p/num_test_samples*150)}, 200);
    probsdiv.appendChild(r);
  }
  parent_div.appendChild(probsdiv);

}

var evaluate_test_example = function(sample) {

  var num_classes = 10;
  var aavg = new convnetjs.Vol(1,1,num_classes,0.0);
  var xs = [].concat(sample.x);
  var n = xs.length;
  for(var i=0;i<n;i++) {
    var a = net.forward(xs[i]);
    aavg.addFrom(a);
  }
  var preds = [];
  for(var k=0;k<aavg.w.length;k++) { preds.push({k:k,p:aavg.w[k]}); }
  preds.sort(function(a,b){return a.p < b.p ? 1:-1;});
  return preds;
}

// return a convnetjs volume for a random example
var num_test_samples = 11;
var sample_instance = function() {

  var num_examples_in_batch = 50;
  var k = Math.floor(Math.random() * num_examples_in_batch);

  var p = img_data.data;
  var x = new convnetjs.Vol(32,32,3,0.0);
  var W = 32*32;
  var j=0;
  for(var dc=0;dc<3;dc++) {
    var i=0;
    for(var xc=0;xc<32;xc++) {
      for(var yc=0;yc<32;yc++) {
        var ix = ((W * k) + i) * 4 + dc;
        x.set(yc,xc,dc,p[ix]/255.0-0.5);
        i++;
      }
    }
  }

  // distort position and maybe flip
  var xs = [];
  //xs.push(convnetjs.augment(x, 32, 0, 0, false));
  var d2 = Math.floor((num_test_samples-1) / 2)
  for(var q=0;q<num_test_samples;q++) {
    var dx = Math.floor(Math.random()*5-2);
    var dy = Math.floor(Math.random()*5-2);
    xs.push(convnetjs.augment(x, 32, dx, dy, q>=d2));
  }
  
  // return multiple augmentations, and we will average the network over them
  return { x : xs };
}


var draw_activations_COLOR = function(elt, A, scale, grads) {

  var s = scale || 2; // scale
  var draw_grads = false;
  if(typeof(grads) !== 'undefined') draw_grads = grads;

  // get max and min activation to scale the maps automatically
  var w = draw_grads ? A.dw : A.w;
  var mm = maxmin(w);

  var canv = document.createElement('canvas');
  canv.className = 'actmap';
  var W = A.sx * s;
  var H = A.sy * s;
  canv.width = W;
  canv.height = H;
  var ctx = canv.getContext('2d');
  var g = ctx.createImageData(W, H);
  for(var d=0;d<3;d++) {
    for(var x=0;x<A.sx;x++) {
      for(var y=0;y<A.sy;y++) {
        if(draw_grads) {
          var dval = Math.floor((A.get_grad(x,y,d)-mm.minv)/mm.dv*255);
        } else {
          var dval = Math.floor((A.get(x,y,d)-mm.minv)/mm.dv*255);  
        }
        for(var dx=0;dx<s;dx++) {
          for(var dy=0;dy<s;dy++) {
            var pp = ((W * (y*s+dy)) + (dx + x*s)) * 4;
            g.data[pp + d] = dval;
            if(d===0) g.data[pp+3] = 255; // alpha channel
          }
        }
      }
    }
  }
  ctx.putImageData(g, 0, 0);
  elt.appendChild(canv);
}

var draw_activations = function(elt, A, scale, grads) {

  var s = scale || 2; // scale
  var draw_grads = false;
  if(typeof(grads) !== 'undefined') draw_grads = grads;

  // get max and min activation to scale the maps automatically
  var w = draw_grads ? A.dw : A.w;
  var mm = maxmin(w);

  // create the canvas elements, draw and add to DOM
  for(var d=0;d<A.depth;d++) {

    var canv = document.createElement('canvas');
    canv.className = 'actmap';
    var W = A.sx * s;
    var H = A.sy * s;
    canv.width = W;
    canv.height = H;
    var ctx = canv.getContext('2d');
    var g = ctx.createImageData(W, H);

    for(var x=0;x<A.sx;x++) {
      for(var y=0;y<A.sy;y++) {
        if(draw_grads) {
          var dval = Math.floor((A.get_grad(x,y,d)-mm.minv)/mm.dv*255);
        } else {
          var dval = Math.floor((A.get(x,y,d)-mm.minv)/mm.dv*255);  
        }
        for(var dx=0;dx<s;dx++) {
          for(var dy=0;dy<s;dy++) {
            var pp = ((W * (y*s+dy)) + (dx + x*s)) * 4;
            for(var i=0;i<3;i++) { g.data[pp + i] = dval; } // rgb
            g.data[pp+3] = 255; // alpha channel
          }
        }
      }
    }
    ctx.putImageData(g, 0, 0);
    elt.appendChild(canv);
  }  
}

var maxmin = function(w) {
  if(w.length === 0) { return {}; } // ... ;s
  var maxv = w[0];
  var minv = w[0];
  var maxi = 0;
  var mini = 0;
  var n = w.length;
  for(var i=1;i<n;i++) {
    if(w[i] > maxv) { maxv = w[i]; maxi = i; } 
    if(w[i] < minv) { minv = w[i]; mini = i; } 
  }
  return {maxi: maxi, maxv: maxv, mini: mini, minv: minv, dv:maxv-minv};
}
