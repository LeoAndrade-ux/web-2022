'use strict'
/*funcion anonima
es una funcion que no tiene nombre 
function nombrePelicula(nombre){
    console.log(nombre);
}
var pelicula=nombrePelicula("XMEN");
*/
//var pelicula=nombrePelicula(nombre){
var pelicula=(nombre)=>{
    return "La pelicula es "+nombre;
}
console.log(pelicula("Titanic"));

function cuadrado(numero){
    console.log("Cuadrado "+(numero*numero));
}
cuadrado(2);
//funciones arrow o flecha
var potencia=(numero)=>{
    console.log("Cuadrado "+(numero*numero));
}
console.log(potencia(3));

function suma(numero1, numero2){
    console.log("Suma "+(numero1+numero2));
}

var resultado=(numero1, numero2)=>{
    console.log("Suma "+(numero1+numero2));
}

console.log(resultado(4,2));