const fs = require('fs'); // requerimos al File System
var colors = require('colors');
const { resolve } = require('path');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida = "";
        let consola = "";
        // imprimir la tabla del 5 en la consola
        for (let i = 1; i <= hasta; i++){
            salida += `${base} x ${ i } = ${ base * i }\n`;
            consola += `${ colors.magenta(base) } ${'x'.blue} ${ colors.magenta(i) } = ${ colors.magenta(base * i) }\n`;
        }
        if ( listar == true ){
            console.log(`${ colors.green('==============================\n')}${'========'.green + colors.blue(' Tabla del '+ base) + ' =========\n'.green}${'=============================='.green}`);
            
            console.log(consola);

        }

        fs.writeFileSync(`./result/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;
    } catch ( err ) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo,
    
}
