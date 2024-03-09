let z = 1
let x = 'Tarde'
let y = null

let a = z
let b = x
let c = y

console.log (z , x, y, a, b, c)

a = 12
b= 'Platzi'
c= undefined

//Paso por referencia

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let sith = {
    darth : 'Vader'
}

let villanosStarWars = sith

villanosStarWars.darth = 'Palpatine'

console.log (sith)