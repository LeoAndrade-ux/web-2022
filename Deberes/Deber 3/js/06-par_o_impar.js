"use strict";
//plantillas de texto
var numero1 = prompt("Ingrese un numero");
var salida = "";
numero1 = Number(numero1);
while (isNaN(numero1)) {
    numero1 = prompt("Ingrese un numero");
}
if (numero1 % 2 == 0) {
    salida = "El numero " + numero1 + " es par";
} else {
    salida = "El numero " + numero1 + " es impar";
}
document.write(`<h3>${salida}</h3>`);