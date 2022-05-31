"use strict";
/*
sin comillas es numero
con comillas es un string
"">>>>''
*/
var numero = 5;
var numero2 = "6";
console.log(numero);
console.log(numero2);
var suma = numero + numero2;
console.log(suma);

/*tipos de datos*/
var cadena = "Hola, bienvenido";
var verdadero_falso = true;

console.log(cadena);
console.log(verdadero_falso);

//funciones de conversion
//convertir cadena a numero
var numero_falso = "10";
console.log(Number(numero_falso) + numero);
console.log(+numero_falso);

//Convertir numero a texto
console.log(String(numero));

//saber el tipo de dato
//Nan ->Not a number
console.log(typeof numero_falso);
console.log(typeof numero);
console.log(typeof verdadero_falso);
