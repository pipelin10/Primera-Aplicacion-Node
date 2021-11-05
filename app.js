//Paquetes a requerir
const {crear_archivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//Limpiamos la consola
console.clear();

//Llamado a funcion crear_archivo con tres argumentos
//provenientes de la consola
crear_archivo(argv.b, argv.l, argv.t)
    .then(nombre_archivo => console.log('Creado', nombre_archivo))
    .catch(err => console.log(err));