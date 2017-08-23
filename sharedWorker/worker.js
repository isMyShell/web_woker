

onconnect = function(e) {
  var port = e.ports[0];
  console.log(e.ports);
  port.addEventListener('message', function(e) {
    console.log(e.data);
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  });
  port.start();
}
