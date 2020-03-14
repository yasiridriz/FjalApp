let express = require('express');
let bodyparser = require('body-parser');

let appRouter = require('./app/routes/app.route');
let authRouter = require('./app/routes/auth.route');

let http = require('http');
let socketIO = require('socket.io');
let PORT = process.env.PORT || 5000;
var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', appRouter);
//app.get('/auth', authRouter);

server.listen(PORT, function() {
  console.log('Starting server on process.env.PORT');
});

io.on('connection', function(socket){

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });


});