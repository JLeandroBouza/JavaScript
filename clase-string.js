//creación de string

const primeraOpcion = 'Comillas Simples'
const segundaOpcion = "Comillas Dobles"
const terceraOpcion = `Comillas Ladeadas`

// 1. Concatenacion: Opcion + 

const direccion = 'Calle falsa 123'
const ciudad = 'Carlos Paz'
const direccionCompleta = 'Mi direccion completa es ' + direccion + ciudad
console.log(direccionCompleta)


//2. Concatenacion: Template Literals

const nombre= 'Leandro'
const pais = 'Uruguay'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//3, Concatenacion : Join()

const primeraParte = 'Soy'
const segundaParte = 'Fanatico de'
const terceraParte = 'Star Wars'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log (pensamiento.join(' '))

//4. Concatenacion: concat ()

const hobbie1 = 'Leer'
const hobbie2 = 'Escuchar Metal'
const hobbie3 = 'Ver Series'
const hobbie = 'Mis hobbies son:'.concat(hobbie1,',', hobbie2, ',', hobbie3)
console.log(hobbie)