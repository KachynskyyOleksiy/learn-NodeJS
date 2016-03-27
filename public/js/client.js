var socket = io.connect('http://localhost:8080');
socket.on('messages', function(data) {
  console.log(data.hello);
});