//Capacidades que tienen las funciones al igual que otros metodos

//1. Pasar Funciones como argumentos >> Callback

function a () {}
function b (a){}

//retornar funciones

function a (){
    function b () {}
    return b
}

//Asignar funciones a Variables >> Expresión de Funcion

const a = function () {}

// Tener propiedades y métodos

function a () {}
const obj = {}
a.call(obj)

//Anidar funciones >> Nested Functions

function a (){
    function b () {
        function c () {

        }
        c()
    }
    b()   
}
a()

// Es posible almacenar funciones en objetos? Si es posible y se le conoce como metodo.

const rocket ={
    name : 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('Lanzamiento')
    }
}
rocket.launchMessage