function getAndPrintHTML () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

 /* Add your code here */
https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  var result = "";
  response.on('data', function (data) {
    result += data;
    console.log('\n', data);
    });
  });
}
getAndPrintHTML();