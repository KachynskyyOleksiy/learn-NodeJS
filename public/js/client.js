var socket = io.connect('http://localhost:8080');
socket.on('messages', function(data) {
  console.log(data.hello);
});

$('#chat_form').submit(function (e) {
  var message = $('#input_text').val();
  socket.emit('messages', message);
  return false;
});

socket.on('messages', function (data) {
  $('#chat-log').append(data +'<br/>');
});

socket.on('connect', function (data) {
  $('#status').html('Connected to chat room');
  nickname = prompt("What is your nickname?");
  //notify the server of the users nickname
  socket.emit('join', nickname);
});
