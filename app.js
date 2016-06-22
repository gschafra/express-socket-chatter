var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(3000);
var io = require('socket.io').listen(server);

io.on('connection', function(client){
  console.log('Socket client connected...'); 
});
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('pages/index');
});
/*.listen(3000, function(){
  console.log('Express app listing...');
});*/
