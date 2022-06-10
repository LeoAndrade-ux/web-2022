"use strict";
//plantillas de texto
var numero1 = prompt("Ingrese un numero");
var salida = "";
var flag = true;
numero1 = Number(numero1);
while (isNaN(numero1)) {
    numero1 = prompt("Ingrese un numero");
}

for (let i = 1; i <= 10; i++) {
    salida += numero1 + " * " + i + " =  "+ (numero1 * i)+"<br>";
}
document.write(`Tabla del ${numero1}`);
document.write(`<h3>${salida}</h3>`);