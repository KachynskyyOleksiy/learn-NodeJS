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
