//declaramos la constante
//importacion simple
//const multiplicar = require('./Multiplicacion/multiplicar');
//importacion con destructuracion
const argv = require('yargs').argv
const { crearArchivo } = require('./Multiplicacion/multiplicar');


//let paramentro = process.argv[2];
//let base = paramentro.split('=')[1];

let argv2 = process.argv
console.log(argv);
console.log(argv2);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

// multiplicar.crearArchivo(base)
// .then(archivo => console.log(`Archivo creado: ${archivo}`))
// .catch(e => console.log(e));
// let data = '';

// for (let i = 0; i <= 10; i++) {
//     data += `${base}*${i}=${base*i}\n`;
// }
//console.log(module);
//Nos crea la tabla y nos muestra un sms
//apend para poder abrir el archivo
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido guardado`);
// });