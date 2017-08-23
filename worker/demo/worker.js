var i = 0
var timer = null
onmessage = function (e) {
  console.log('WORKER TASK: ', `收到: ${e.data}`);
  // 发送数据事件
  timeAdd()
}

function timeAdd(){
  i = i +1
  postMessage(i)
  clearTimeout(timer)
  timer = setTimeout('timeAdd()',1000)
}
