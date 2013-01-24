// npm install express
// npm install socket.io

var sys         = require('sys'),
        express = require('express'),
        app         = express.createServer('127.0.0.1'),
        io          = require('socket.io'); 

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);

var socket = io.listen(app); 

socket.on('connection', function (client){ 
  // new client is here!
  setTimeout(function () {
        client.send('Waited two seconds!');
    }, 2000);

  client.on('message', function () {
  }) ;

  client.on('disconnect', function () {
  });
});