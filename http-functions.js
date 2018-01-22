module.exports = function getHTML (options, callback) {
    /* Your code here */
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
