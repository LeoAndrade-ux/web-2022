'use strict'
/*
Parametros REST y SPREAD
    Ayudan en el manejo de arreglos y listas de parametros
    SPREAD: Permite expandir el uso de argumentos
    REST: Es la colección de todos los elementos de un mismo arreglo.
*/

function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("ruta 1:"+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(restoFrutas);
}

listadoFrutas("piña", "limon", "manzana", "naranja", "pera", "coco");

var frutas=["uva", "fresa"];
listadoFrutas(...frutas, "bananas", "sandia");