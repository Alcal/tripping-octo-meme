var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Sweet Baby Jesus it works!');
});

var server = app.listen(port, function () {

  console.log('Example app listening at %s', port);

});