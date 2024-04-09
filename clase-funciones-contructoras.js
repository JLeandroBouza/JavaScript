function Rocket(name, ownMessage) {
    this.name = name
    this.launchmessage = function () {
        console.log(ownMessage)
    }
}

const falcon9Rocket = new Rocket('Falcon 9', 'Nos vemos pronto')
const falconHeavyRocket = new Rocket ('Falcon Heavy', 'Los veo a la vuelta')
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchmessage())

//construir una funcion constructora desde una arrow function

const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchmessage: ownMessage
})
