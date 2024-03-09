//tipo de dato primitivo - Inmutable

let numero = 23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipo de dato complejo - Mutable

let usuario = {nombre: 'Anakin', edad: 15}
usuario.edad = 20
console.log (usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas)

function cambiarNombre(objeto) {
    objeto.nombre = 'Nuevo Nombre'
};

let persona = {nombre: 'Obi - Wan'}
cambiarNombre(persona);

console.log(persona)