var express = require('express');
var path = require('path');

var app = express();
var port = 3004;
var rootpath = path.normalize(__dirname + '/../');
app.use(express.static(rootpath + '/app'));
app.listen(port);
console.log('Listening to port ' + port + ' . . . .');