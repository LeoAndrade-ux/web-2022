'use strict'
/*
fetch (ajax) permite realizar peticiones a servicios / api rest --> servicio remoto
recibe un url que devuelve un json
promesas que permiten capturar datos utilizando el metodo then
se se produce un error se captura con el catch
Tres estados: pendiente, cumplida, rechazada
*/
var divUsuarios = document.querySelector("#usuarios");
var usuarios = [];
fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json) //Recibir un parametro y convertirlo en JSON
.then(data => {
    usuarios = data;
    console.log(usuarios);
    usuarios.map((data,i)=>{
        let nombre = document.createElement("h3");
        nombre.innerHTML = i+"-"+ data.name+"-"+data.address.street;
        divUsuarios.append(nombre);
    })
})