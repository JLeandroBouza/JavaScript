const numeroSecreto = Math.floor(Math.random()* 10 +1); //numero aleatorio del 1 al 10

const numeroJugador = parseInt (prompt("Adivida el número secreto entre 1 al 10"));

console.log(`Este es el número con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto){
    console.log ('Adivinaste el número secreto')
}else if (numeroJugador < numeroSecreto){
    console.log('Tu numero es bajo');
}else{
    console.log('El numero es muy alto')
}



