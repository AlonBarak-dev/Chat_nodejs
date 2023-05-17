// Make connection with server
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js"
      
const socket = io('http://localhost:4000')

// Query DOM
var message = document.getElementById('message')
var handle = document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')

// Emit events

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ":</strong>" + data.message + "</p>"
})