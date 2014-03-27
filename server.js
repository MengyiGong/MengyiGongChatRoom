var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    socketio = require("socket.io"),
    port = 52123;
var io;
var guestNumber = 1;
var nickNames = {};
var currentRoom = {};
var chatServer = require('./chat_server.js');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(52123, function() {
    console.log('Listening at: http://localhost:52123');
});
 
chatServer.listen(server);