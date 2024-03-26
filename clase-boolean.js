const isActive = true
const hasPermisson = false

// Conversion implicita

const result = 5 > 3 // javascript por detras cambia el resultado a booleano
console.log(result)

const name = "Platzi"
console.log(!!name)

// Conversion explicita

const value = 0
const explicitBoolean = Boolean (value)
console.log (explicitBoolean)