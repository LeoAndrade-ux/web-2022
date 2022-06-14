'use strict'
window.addEventListener('load', () => {
    var pelicula = {
        titulo: "Transformes",
        anio: 2012,
        pais: "Estados Unidos"
    };
    console.log(pelicula);
    console.log(pelicula.titulo);
    pelicula.anio = 2019;
    console.log(pelicula.anio);

    //Las BDD no relacionales ALMACENAN informacion de esta forma
    var peliculas = [
        { titulo: "Titanic", anio: 2012, pais: "Estados Unidos" },
        { titulo: "La era del hielo", anio: 2012, pais: "Estados Unidos" },
        { titulo: "X-MEN", anio: 2012, pais: "Estados Unidos" },
        { titulo: "La vida es bella", anio: 2012, pais: "Estados Unidos" },
        pelicula
    ];
    console.log(peliculas);
    var div_peliculas = document.querySelector("#peliculas");
    var index;
    for (index in peliculas) {
        var parrafo = document.createElement("p");
        parrafo.append(peliculas[index].titulo + " - " + peliculas[index].anio);
        div_peliculas.append(parrafo);
    }
});