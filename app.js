// Se obtiene con el .argv a SOLO el argv
// Se obtiene UNA CONSTANTE
const argv = require('./config/yargs.js').argv;
const colors = require('colors');

// las llaves en { crearArchivo } significa que estamos
// DESESTRUCTURANDO el modulo y ademas podremos usar
// la funcion crearArchivo sin hacer mencion del modulo del 
// cual proviente
// Se obtiene FUNCIONES
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

//let base = '9';

// console.log('argv del Yargs:  ', argv);
// console.log('');
//console.log('BASE = ' + argv.base + ', LIMITE = ' + argv.limite + '\n');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('*** LISTAR ***');
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log('=================='.green);
                console.log(`  Tabla del ${argv.base}`.green);
                console.log('=================='.green);

                // Se muestran la tabla completa
                console.log(data);
            })
            .catch(e => console.log(e))
        break;
    case 'crear':
        //console.log('*** CREAR ARCHIVO ***');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ` + `${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido!');

}


// console.log('argv del process:');
// console.log(argv2);


// let param = argv[2];
// let base = param.split('=')[1];

//console.log(param);

// console.log(`Base ingresada: ${base}`);