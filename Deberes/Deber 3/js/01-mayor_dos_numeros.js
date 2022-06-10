"use strict";
//plantillas de texto
var flag = true;
var salida = "";
var numero1 = prompt("Ingrese el primer numero");
numero1 = Number(numero1);
while (isNaN(numero1)) {//validacion de numero
    numero1 = prompt("Ingrese el primer numero");
}

var numero2 = prompt("Ingrese el segundo numero ");
numero2 = Number(numero2);
while (isNaN(numero2)) { //validacion de numero
    numero1 = prompt("Ingrese el segundo numero ");
}

if (numero1 == numero2) {
    salida = "Los numeros son iguales";
} else if (numero1 > numero2) {
    salida = `<h1>El numero mayor es ${numero1}</h1>`;
} else {
    salida = `<h1>El numero mayor es ${numero2}</h1>`;
}

document.write(salida);