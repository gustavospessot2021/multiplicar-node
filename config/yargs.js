// CONSTANTE Objeto - para el .command del yargs
const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo con la tabla de multiplicar requerida', opciones)
    .help()
    .argv;

module.exports = {
    argv
}