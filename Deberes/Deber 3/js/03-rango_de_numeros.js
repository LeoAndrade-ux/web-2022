var salida = "";
var numero1 = prompt("Ingrese el menor numero");
numero1 = Number(numero1);
while (isNaN(numero1)) {//validacion de numero
    numero1 = prompt("Ingrese el menor numero");
}

var numero2 = prompt("Ingrese el mayor numero ");
numero2 = Number(numero2);
while (isNaN(numero2)) { //validacion de numero
    numero1 = prompt("Ingrese el mayor numero ");
}

for (let i = numero1; i <= numero2; i++){
    salida+= i+' ';
}
document.write(`<h3>Todos los numeros entre ${numero1} y ${numero2} son: ${salida}</h3>`);