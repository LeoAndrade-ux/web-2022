'use strict'
window.addEventListener('load', () => {
    console.log("cargado con exito")
    var divUsuarios = document.querySelector("#usuarios");
    var usuarios = [];
    fetch('https://rickandmortyapi.com/api/character/?page=3')
        .then(data => data.json())
        .then(data => {
            usuarios = data
            let titulo = document.createElement("h2");
            titulo.innerHTML = "name"
            var usuarios_array = Object.values(usuarios)//convertir a un arreglo de objetos
            divUsuarios.append(titulo)
            usuarios_array[1].map((data, i) => {
                let nombre = document.createElement("h3");
                nombre.innerHTML = i + "-" + data.name
                divUsuarios.append(nombre)
            })
        })

});