const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla multiplicar',
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla de multiplicar',
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Limite de tabla de multiplicar',
                })
                .check((argv, options) => {
                    if ( isNaN(argv.b) ){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;
