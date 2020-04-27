//Importando el framework
const fastify = require('fastify')();

//Declaracion de la ruta
fastify.register(require('./routes/suma'), { prefix: '/suma' });

//Corriendo el servidor
fastify.listen(4200, function(err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log("Server corriendo en el puerto 4200");
    }
});