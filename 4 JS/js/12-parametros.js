'use strict'
/*
parametros REST y SPREAD 
ayudan en el manejo de arreglos y listas de parametros
spread permite expandir el uso de argumentos
rest es la coleccion de todos los elementos de un mismo arreglo
*/
function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(restoFrutas);
}
listadoFrutas("piña","limon","manzana","naranja","pera","coco");
var frutas=["uva","fresa"];
listadoFrutas(...frutas,"bananas","sandia");