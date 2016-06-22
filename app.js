var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello world');
}).listen(3000, function(){
  console.log('Express app listing...');
});
