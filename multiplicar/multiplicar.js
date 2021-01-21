// requieres
const fs = require('fs');
//const fs = require('express');
//const fs = require('./MiArchivo');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor BASE >>> ${base} <<< NO es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor LIMITE >>> ${limite} <<< NO es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            let result = base * i;
            let mensaje =
                `${base} * ${i} = ${result}`;

            data += mensaje;
            if (i != limite) data += '\n';
        }
        resolve(data);
        return;
    });

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor BASE >>> ${base} <<< NO es un numero!!!`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor LIMITE >>> ${limite} <<< NO es un numero!!!`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            let result = base * i;
            let mensaje =
                `${base} * ${i} = ${result}`;

            //console.log(mensaje);
            data += mensaje;
            if (i != limite) data += '\n';
        }

        let nombreArchivo = `tabla-${base}-al-${limite}.txt`;
        let nombreArchivoConUbicacion = `tablas/${nombreArchivo}`;

        fs.writeFile(nombreArchivoConUbicacion, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`${nombreArchivo}`);
            //console.log(`El archivo ${nombreArchivo} ha sido creado!`);
        });

    });

}


module.exports = {
    crearArchivo: crearArchivo,
    listarTabla
}