'use strict'
/*Funcion anonima
    Es una funcion que no tiene nombre *

function nombrePelicula(nombre){
    console.log(nombre);
}
var pelicula = nombrePelicula("X-MEN");
*/
//var pelicula = nombrePelicula(nombre);
var pelicula = (nombre)=>{
    return "La pelicula es "+nombre;
}
console.log(pelicula("Titanic"));

function cuadrado(numero){
    console.log("Cuadrado "+(numero*numero));
}
cuadrado(2);

//Funciones arrow o flecha
var potencia=(numero)=>{
    console.log("Cuadrado "+(numero*numero));
}
console.log(potencia(3));

function suma(num1, num2){
    console.log("Suma: "+(num1+num2));
}

var resultado=(num1, num2)=>{
    console.log("Suma: "+(num1+num2));
}
console.log(resultado(4,2));