function getAndPrintHTML (options) {
  var https = require('https');
https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  var result = "";
  response.on('data', function (data) {
    result += data;
    console.log('\n', data);
    });
  });
}
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };



getAndPrintHTML(requestOptions);