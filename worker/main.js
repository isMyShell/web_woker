if(typeof(Worker)!=="undefined"){
  console.log('Yes! Web worker support!');
	//some code
}
else{
  console.log('Sorry! No Web Worker support..');
}

var worker = new Worker('./worker.js')

worker.addEventListener('message', function(e){
	 console.log('MAIN: ', `RECEIVE: ${e.data.message}`);
})

worker.postMessage('Hello im main')

worker.addEventListener('error', function (e) {
  console.log('MAIN: ', 'ERROR', e);
  console.log('MAIN: ', 'ERROR', 'filename:' + e.filename + '---message:' + e.message + '---lineno:' + e.lineno);
});
