// Funciones Puras

// a. Dada una misma entrada vamos a obtener la misma salida.
// b. No producen efecto secundarios.

//Side Effects:
// 1. Modificar variables globales
// 2. Modificar Parametros.
// 3. Solicitudes HTTP (llamadas a API)
// 4. Imprimir mensajes en pantalla o en consola.
// 5. Manipulación del DOM.
// 6. Obtener la hora actual.

function sum (a,b) {
    return a + b
}


// Función Impura
function sum (a,b) {
    console.log ('A: ', a)
    return a + b
}

