//1. Tipo Enero y Decimal

const entero = 28
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//2. Notación cientifica

const cientifico = 5e3

//3. Infinitos y NaN (no es un numero)

const Infinito = Infinity
const noEsUnNumero = NaN

//Operaciones aritméticas

// 1. Suma, Resta, Multiplicacion y División

const suma = 3+4
const resta = 4-4
const multiplicacion = 4*7
const division = 16/4

//2. Modulo y Exponenciación

const modulo = 15 % 8 // sirve para saber si un numero es multiplo de otro
const exponenciacion = 2**3

//Precisión

const resultado = 0.1 + 0.2 // da 0.30000000000000000000000000004 por eso se usa un comando aparte
console.log(resultado)
console.log (resultado.toFixed(1))
console.log (resultado === 0.3) // compara valor y tipo

// Operaciones Avanzadas

const raizCuadrada = Maths.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const numeroRandom = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(numeroRandom)



