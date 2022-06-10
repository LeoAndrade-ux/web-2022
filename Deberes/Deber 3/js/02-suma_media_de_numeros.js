"use strict";
//plantillas de texto
var salida = "";
var numero = prompt("Ingrese un numero no negativo");
var suma = 0;
var media = 0;
var cont = 1;
numero = Number(numero);

while (isNaN(numero)) { //validacion de numero
    numero1 = prompt("Ingrese un numero");
}

while (numero > 0) {
    suma = suma + numero;
    numero = prompt("Ingrese un numero no negativo");
    media = suma / cont;
    cont++;

}
salida = `<h1>La suma de los numeros ingresados es ${suma} y su media es ${media}</h1>`;

document.write(salida);