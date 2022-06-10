var numero1 = prompt("Ingrese un numero");
var salida = "";
numero1 = Number(numero1);
while (isNaN(numero1)) {
    numero1 = prompt("Ingrese un numero");
}

for (let i = 1; i <= numero1; i++) {
    if(numero1 % i == 0){
        salida+= i +' ';
    }
}
document.write(`<h3>Todos los divisores de ${numero1} son: ${salida}</h3>`);