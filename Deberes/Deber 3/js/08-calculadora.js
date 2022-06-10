var salida = "";
var numero1 = prompt("Ingrese el primer numero");
numero1 = Number(numero1);
while (isNaN(numero1)) {//validacion de numero
    numero1 = prompt("Ingrese el primer numero");
}

var numero2 = prompt("Ingrese el segundo numero");
numero2 = Number(numero2);
while (isNaN(numero2)) { //validacion de numero
    numero1 = prompt("Ingrese el segundo numero");
}

function CalculadoraConsola(numero1, numero2){
    console.log("Suma "+(numero1+numero2));
    console.log("Resta "+(numero1-numero2));
    console.log("Multiplicacion "+(numero1*numero2));
    console.log("Division "+(numero1/numero2));
}

function calculadoraAlerta(numero1, numero2){
    alert("Suma "+(numero1+numero2));
    alert("Resta "+(numero1-numero2));
    alert("Multiplicacion "+(numero1*numero2));
    alert("Division "+(numero1/numero2));
}

CalculadoraConsola(numero1, numero2);
calculadoraAlerta(numero1, numero2);