'use strict'
window.addEventListener('load', () => {

    var articulos = [{
            titulo: "Prueba de titulo 1",
            publicado: "Publicado el dia 14 de julio del 2022",
            descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloremque fugit, adipisci
        dolorum
        rem reprehenderit labore officiis totam voluptatum cumque, distinctio asperiores amet
        commodi
        eum minus! Velit facere corporis beatae!`,
        },
        {
            titulo: "Prueba de titulo 2",
            publicado: "Publicado el dia 14 de julio del 2022",
            descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloremque fugit, adipisci
        dolorum
        rem reprehenderit labore officiis totam voluptatum cumque, distinctio asperiores amet
        commodi
        eum minus! Velit facere corporis beatae!`
        },
        {
            titulo: "Prueba de titulo 3",
            publicado: "Publicado el dia 14 de julio del 2022",
            descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloremque fugit, adipisci
        dolorum
        rem reprehenderit labore officiis totam voluptatum cumque, distinctio asperiores amet
        commodi
        eum minus! Velit facere corporis beatae!`
        },
        {
            titulo: "Prueba de titulo 4",
            publicado: "Publicado el dia 14 de julio del 2022",
            descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloremque fugit, adipisci
        dolorum
        rem reprehenderit labore officiis totam voluptatum cumque, distinctio asperiores amet
        commodi
        eum minus! Velit facere corporis beatae!`
        },
        {
            titulo: "Prueba de titulo 5",
            publicado: "Publicado el dia 14 de julio del 2022",
            descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloremque fugit, adipisci
        dolorum
        rem reprehenderit labore officiis totam voluptatum cumque, distinctio asperiores amet
        commodi
        eum minus! Velit facere corporis beatae!`
        }
    ];
    var div_articulos = document.querySelector("#articles");
    var index;
    for (index in articulos) {

        var articulo = document.createElement("article")

        var titulo = document.createElement("h4");
        titulo.append(articulos[index].titulo);
        articulo.append(titulo);

        var publicado = document.createElement("h5")
        publicado.append(articulos[index].publicado);
        articulo.append(publicado);

        var descripcion = document.createElement("p")
        descripcion.append(articulos[index].descripcion);
        articulo.append(descripcion);

        var enlace = document.createElement("a")
        var textoEnlace = document.createTextNode("Leer Mas")
        enlace.setAttribute('href', "#")
        enlace.setAttribute('class', "readmore")
        enlace.appendChild(textoEnlace);
        articulo.append(enlace)
        div_articulos.append(articulo)
    }
});