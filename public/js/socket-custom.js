var socket = io();

// Eventos 'on' -> esuchar informacion

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
});

// eventos 'emit' -> enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    // console.log('Se disparo el callback')
    console.log('Respuesta server', resp)
})


// escuchar info

socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor', mensaje)
})