const greeting = function (name) {
    return `Hola, ${name}`
}

//Arrow Function - explicit return

const newGreeting = (name) => {
    return `Hola, ${name}`
}

//Arrow Function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameter = (name, lastname) => `Hola soy ${name} ${lastname}`

//Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message)=>{
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('Un gran poder viene con una gran responsabilidad')
finctionalCharacter.messageWithArrowFunction('Cuidado con el Dr Octopus') // la funcion arrow no toma el this

