var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var currentRoom = {};

exports.listen = function(server) {
    io = socketio.listen(server);
    io.set('log level', 1);
    io.sockets.on('connection', function (socket) {   
   
    //broadcasting the message
    socket.on('message', function (message) {
        socket.broadcast.emit('message', {text: message.name + ': ' + message.text,room:message.room}); 
    });
    
    socket.on('newRoom', function(data) {
    //Provide user with a list of occupied rooms on request.
      socket.broadcast.emit('rm', {nm:data.rm});
    });
 

        
        
  });
};









