/* Recordemos que async trata las funciones que devuelven promesas en nuestro código 
como si fueran funciones síncronas que devuelven directamente valores en vez de promesas.*/
async function routes(fastify) {
    fastify.get('/:num1/:num2', async(req, res) => {
        const numero1 = parseInt(req.params.num1);
        const numero2 = parseInt(req.params.num2);
        const suma = numero1 + numero2;

        res.send({
            numero1: "Numero: " + numero1,
            numero2: "Numero: " + numero2,
            resultado: "La suma entre los dos numeros es: " + suma
        });
    });
}

//Exportando funcion rutas
module.exports = routes;