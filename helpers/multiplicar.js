const fs = require('fs');
const colors = require('colors');

const crear_archivo = async(base = 4, listar = false, tope = 10) => {
    try{
        let salida = '';
        // salida += '==============================\n';
        // salida += `        Tabla del ${base}           \n`;
        // salida += '==============================\n';

        for(let i = 1; i <= tope; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if(listar == true){
            console.log('==============================\n'.rainbow)
            console.log(`    Tabla del ${base} hasta ${tope}   \n`.bgGreen);
            console.log('==============================\n'.rainbow);
            console.log(salida);
        }

        fs.writeFileSync(`./out/tabla-${base}-hasta-${tope}.txt`,salida);
        return `tabla-${base}-hasta-${tope}.txt`;
    }
    catch(err){
        throw err;
    }
};

module.exports = {
    crear_archivo
}