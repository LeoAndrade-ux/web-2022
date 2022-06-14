'use strict'
//Funciones son un grupo de instrucciones que se puede reutilizar
function mensaje() {
    console.log("Hola");
    alert("Bienvenido");
    return "Ok";
}

//Llamar o invocar a la funcion
var resultado = mensaje();
console.log(resultado);

//Funcion con parametros
function suma(num1, num2) {
    console.log("Suma: " + (num1 + num2));
}

suma(4, 3);

function calculadora(num1, num2) {
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Multiplicacion: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));
}

calculadora(2, 8);

//Funcion con parametros adicionales
function calculadora2(num1, num2, mostrar = false) {
    if (mostrar == false) {
        console.log("Suma: " + (num1 + num2));
        console.log("Resta: " + (num1 - num2));
        console.log("Multiplicacion: " + (num1 * num2));
        console.log("Division: " + (num1 / num2));
    } else {
        document.write("Suma: " + (num1 + num2) + "<br>");
        document.write("Resta: " + (num1 - num2) + "<br>");
        document.write("Multiplicacion: " + (num1 * num2) + "<br>");
        document.write("Division: " + (num1 / num2) + "<br>");
    }
}

calculadora2(4, 5, true);
calculadora2(2, 5);

function porConsola(num1, num2) {
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Multiplicacion: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));
}

function porPantalla(num1,num2){
    document.write("Suma: " + (num1 + num2) + "<br>");
    document.write("Resta: " + (num1 - num2) + "<br>");
    document.write("Multiplicacion: " + (num1 * num2) + "<br>");
    document.write("Division: " + (num1 / num2) + "<br>");
}

function calculadora3(num1, num2, mostrar = false) {
    if (mostrar == false) {
        porConsola(num1,num2);
    } else {
        porPantalla(num1,num2);
    }
}

calculadora3(4,3,true);