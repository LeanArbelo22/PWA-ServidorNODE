//CLASE 1

// Elementos de consola
console.log("Inicio de cursada WEB AVANZADO");
console.error("Mensaje de error");
console.warn("Peligro, puede causar error grave");
console.info("Esta ingresando a un sitio de pago");
// console.clear() /* borrar elementos de consola */

// Clases en JavaScript: creacion de un modelo para Clientes (objetos)
class Cliente {
    // Constructor: caracteristicas del cliente
    constructor (nombre, apellido, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion
    }

    saludar() {
    console.log(`Bienvenido ${this.nombre} ${this.apellido}, su direccion es ${this.direccion}`);
}
}

var Lean = new Cliente("Leandro", "Arbelo", "Galicia 1497");
Lean.saludar();

// Metodos JS Especiales: REDUCE
const numeros = [1,2,3,4,5];
let resultado = numeros.reduce((suma, nroActual) => suma + nroActual);

console.log(resultado);

// Posicion de los elementos
const datos = ['UTN-BA', 'Java', 'JavaScript'];
datos.forEach((item, index, array) => {console.log(`El elemento ${item} se encuentra en la posicion ${index} del array ${array}`)});

// CLASE 2

