'use strict'
var categorias=["Accion","Drama","Terror","Comedia"];
var peliculas=["Transformers","La mascara","Titanic","Saw","American Pie"];

var cine=[categorias,peliculas];
console.log(cine[0][1]);
console.log(cine[1][0]);
console.log(cine[1][2]);
//operaciones con arrays
//agregar
peliculas.push("La era de hielo");
console.log(peliculas);
//eliminar un elemento
var indice=peliculas.indexOf("Saw");
console.log(indice);
if(indice>1){
    peliculas.splice(indice,1);
    console.log(peliculas);
}
//convertir de array a string separado por comas
var peliculas_string=peliculas.join();
console.log(peliculas_string);
//string a arrays
var cadena="texto1, texto2, texto3";
var cadena_array=cadena.split(",");
console.log(cadena_array);
//ordenar un array
console.log(peliculas.sort());
//invertir un array
console.log(peliculas.reverse());
//recorrer un array   -- elemento in arreglo
for(let pelicula in peliculas){
    document.write(peliculas[pelicula]);
}
//buscar  en arrays
var busqueda=peliculas.findIndex(
    pelicula=>pelicula=="American Pie");
console.log(busqueda);
//busqueda con condiciones
var precio=[10,8,2,3];
var busqueda2=precio.some(precio=>precio>8);
console.log(busqueda2);