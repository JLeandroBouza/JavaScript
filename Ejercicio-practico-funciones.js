//Crear Sith object

function Sith (name,colorSable, forcePower){
    this.name = name
    this.colorSable = colorSable
    this.forcePower = forcePower
    this.master = false

    this.displayInfo = function (){
        console.log(`Información de los Siths:
        Name: ${this.name}
        Color de su Sable: ${this.color}
        Poder de la Fuerza: ${this.forcePower}
        `)
    }

}

//crear diferentes instancias, es decir crear diferentes Siths

const darthVader = new Sith('Darth Vader', 'Rojo', 'Rayo')
const revan = new Sith ('Revan', 'Morado y Rojo', 'Tormenta de Fuerza y Canalización')


darthVader.displayInfo()
revan.displayInfo()

