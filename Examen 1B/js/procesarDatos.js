'use strict'
window.addEventListener('load', () => {
    var divUsuarios = document.querySelector("#usuarios");
    var usuarios = [];
    //listado de personajes
    fetch('https://rickandmortyapi.com/api/character/?page=3')
        .then(data => data.json())
        .then(data => {
            usuarios = data
            var usuarios_array = Object.values(usuarios) //convertir a un arreglo de objetos
            usuarios_array[1].map((data, i) => {
                let nombre = document.createElement("h3");
                let image = document.createElement("img")

                image.src = data.image;
                image.width = 80;

                nombre.innerHTML = i + "<br>Name: " + data.name + "<br>Gender: " +
                    data.gender + "<br>Status: " + data.status + "<br>Origin: " +
                    data.origin.name + "<br>Location: " + data.location.name +
                    "<br>Type: " + data.type + "<br>Url: " + data.url + "<br>Status: " + data.status;
                divUsuarios.append(nombre)
                divUsuarios.append(image)
            })
        })
    //personajes que empiezan con alguna letra del abecedario
    var abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const arreglo_respuesta = []
    fetch('https://rickandmortyapi.com/api/character/?page=3')
        .then(data => data.json())
        .then(data => {
            usuarios = data
            var usuarios_array = Object.values(usuarios) //convertir a un arreglo de objetos
            let mapeo = document.createElement("p");
            usuarios_array[1].map((data, i) => {

                var nombre = data.name
                for (var j = 0; j < abecedario.length; j++) {
                    if (abecedario[j].toLowerCase() == nombre.substring(0, 1).toLowerCase()) {
                        arreglo_respuesta[j] = " " + abecedario[j] + " : true"
                    } else if (arreglo_respuesta[j] == null) {
                        arreglo_respuesta[j] = " " + abecedario[j] + " : false"
                    }
                }

            })
            mapeo.innerHTML = "<br><h3>Existe al menos un nombre con una letra del abecedario</h3>" + arreglo_respuesta.toString()
            divUsuarios.append(mapeo)

        })
    //estado con vida
    fetch('https://rickandmortyapi.com/api/character/?page=3')
        .then(data => data.json())
        .then(data => {
            usuarios = data
            var usuarios_array = Object.values(usuarios) //convertir a un arreglo de objetos
            let titulo = document.createElement("h3")
            titulo.innerHTML ="<br>Personajes con status con vida<br>"
            divUsuarios.append(titulo)
            usuarios_array[1].map((data, i) => {
                let mapeo = document.createElement("p");
                if(data.status.toLowerCase()=="Alive".toLowerCase()){
                    mapeo.innerHTML = "<br>Name: " + data.name + "<br>Status: "+data.status
                }
                divUsuarios.append(mapeo)
            })
        })
    //numero de episodios por personaje
    const array_respuesta = []
    fetch('https://rickandmortyapi.com/api/character/?page=3')
        .then(data => data.json())
        .then(data => {
            usuarios = data
            var usuarios_array = Object.values(usuarios) //convertir a un arreglo de objetos
            let mapeo = document.createElement("p");
            usuarios_array[1].map((data, i) => {
                var episodios = Object.values(data.episode)
                array_respuesta[i] = "<br><br> nombre: " + data.name + "<br>" + " numeroEpisodios: " + episodios.length
            })
            console.log(array_respuesta)
            mapeo.innerHTML = "<br><h3>Cuantos episodios existen por personaje </h3>" + array_respuesta.toString()
            divUsuarios.append(mapeo)
        })
});