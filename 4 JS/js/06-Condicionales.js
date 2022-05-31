"use strict";
/*
Sentecia if
Si A es igual a B entonces haz algo
operaciones racionales
mayor >
menor <
menor igual <=
mayor igual >=
igual == ===
distinto !=
*/
var edad = 80;
var nombre = "Juan";
if (edad >= 18) {
    console.log(nombre + " Es mayor de edad");
    if (edad <= 30) {
    console.log(nombre + " Eres joven");
    } else if (edad <= 65) {
    console.log(nombre + " Eres anciando");
    } else {
    console.log(nombre + " Jubilate");
    }
}else{
    console.log(nombre + "eres menor de edad")
}

/*
Operadores logicos:
and &&
or ||
not !
*/
var year = 2022;
if (year != 2019){
    console.log("no estamos en el 2016");
}
if (year >=2019 && year <= 2022){
    console.log("Estamos en pandemia");
}