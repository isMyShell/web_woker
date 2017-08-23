console.log('im worker');

importScripts('./worker2.js', './worker3.js')

onmessage = function (e) {
  console.log('WORKER TASK: ', `RECEIVE: ${e.data}`);
  // 发送数据事件
  var option = {
		message:'Hello im worker'
	}
  postMessage(option);
	// postMessage(a);

}
