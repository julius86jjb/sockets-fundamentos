const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario Conectado');


    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta App'

    })

    client.on('disconnect', function() {
        console.log('Usuario desconectado')
    });

    // Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Salio Mal'
        //     })
        // }


    })
})