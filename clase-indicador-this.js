// una funcion puede saber a que objeto pertenece gracias al this (contexto de ejecucion)

// Enlace implicito

const house = {
    dogName :'Fido',
    dogGreeting: function (){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dogGreeting()


// Enlace Explicito

function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'Jukka',
    dogAge: 3
}

dogGreeting.call (newHouse) // .call hace que se enlace la funcion al nuevo objeto (newHouse), ya que venia ligada por el this a House

function newDogGreeting (owner,address) {
    console.log (`Hi, I'm ${this.dogName}, and I live whith ${owner} on ${address}`)
}

const owner = 'Leandro'
const address = 'Avenue 23'
newDogGreeting.call(newHouse,owner,address)