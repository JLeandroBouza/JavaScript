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
console.log(saludo.slice(3,5)) //para obtener a. , se indica el caracter donde comienza y en donde queremos que termine +1
console.log(saludo.length)
console.log(saludo.toLocaleLowerCase())
console.log(saludo-localeUpperCase())

const saludoDividido = saludo.split(" ")
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoconEspacios = " Hola Mundo "
const saludoSinEspacios = saludoconEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = "Hola Mundo"
const nuevoSaludo = saludoOriginal.replace("Mundo", "GaTo")
console.log(nuevoSaludo)

