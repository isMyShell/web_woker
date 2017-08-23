var myWorker = new SharedWorker("worker.js");
myWorker.port.start();
myWorker.port.postMessage("hello, I'm main");
myWorker.port.onmessage = function(e) {
	console.log(e.data);
  console.log('Message received from worker');
}


// var myWorker = new SharedWorker("worker1.js");
// myWorker.port.start();
// myWorker.port.postMessage("hello, I'm main");
// myWorker.port.onmessage = function(e) {
// 	console.log(e.data);
//   console.log('Message received from worker1');
// }
