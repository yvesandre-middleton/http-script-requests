function getAndPrintHTML (options, callback) {
  var https = require('https');
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    var result = "";
    response.on('data', function (data) {
      result += data;
    });
    response.on('end', function () {
      console.log('Response stream complete.');
      callback(result);
    });
  });
}

function printHTML (html) {
  console.log(html);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};



getAndPrintHTML(requestOptions, printHTML);