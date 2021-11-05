const argv = require('yargs')
    .option('b',{ //Creamos la opcion base
        alias: 'base',
        type: 'number',
        describe: 'Indica la base con la cual se va a crear la tabla',
        demandOption: true
    })
    .option('l',{ //Creamos la opcion listar
        alias: 'listar',
        type: 'boolean',
        default: 'false',
        describe: 'Permite listar la tabla a escribir en un archivo',
        demandOption: false
    })
    .option('t',{ //Creamos la opcion tope
        alias: 'tope',
        type: 'number',
        default: 10,
        describe: 'Indica el tope hasta el cual vamos a crear la tabla',
        demandOption: false
    })
    .check( (argv,options) => { //Verificamos erroes
        console.log(argv);
        if( isNaN(argv.b) ){
            throw 'La base tiene que se un numero';
        }

        if( isNaN(argv.t) ){
            throw 'El tope debe ser un numero';
        }
        return true;
    })
    .argv;

//Exportamos la funcion
module.exports = argv;