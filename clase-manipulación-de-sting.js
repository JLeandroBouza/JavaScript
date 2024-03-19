// String Primitivos

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String ('Soy un string primitivo tambien')
console.log (typeof stringPrimitivoTambien)

//sting objetos

const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder Caracteres

const saludo =  'Hola, ¿Cómo estás?'
console.log(saludo[2]) //Acceder a la l
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Cómo'))
console.log(saludo.lastIndexOf('o'))