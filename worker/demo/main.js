var main = {
  worker:new Worker('./worker.js'),
  newWorker:function(){
    this.worker.addEventListener('message', function(e){
    	 console.log('MAIN: ', `RECEIVE: ${e.data}`);
       document.getElementById("result").innerHTML=event.data;
    })

    this.worker.postMessage('点击l')

    this.worker.addEventListener('error', function (e) {
      console.log('MAIN: ', 'ERROR', e);
      console.log('MAIN: ', 'ERROR', 'filename:' + e.filename + '---message:' + e.message + '---lineno:' + e.lineno);
    });
  },
  stopWorker:function(){
    this.worker.terminate()
  }
}
