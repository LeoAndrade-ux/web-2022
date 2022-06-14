'use strict'
window.addEventListener('load', () => {
    //localstorage para almacenar informacion de forma local
    if (typeof (Storage) != 'undefined') {
        console.log("localstorage disponible");
    } else {
        console.log("localstorage no disponible");
    }

    //Guardar datos
    //key-value
    localStorage.setItem("nombre", "Aplicaciones web");

    //Recuperar
    console.log(localStorage.getItem("nombre"));

    //Guardar json
    var user = {
        nombre: "Daniel",
        correo: "daniel.perez@epn.edu.ec",
        sitio: "sitio.epn.edu.ec"
    }
    console.log(user);
    //Convertir de JSON a string
    localStorage.setItem("user", JSON.stringify(user));
    console.log(localStorage.getItem("user"));

    //Convertir de string a JSON
    var users = JSON.parse(localStorage.getItem("user"));
    console.log(users);

    //Borrar datos del localstorage
    localStorage.removeItem("user");

    //Vaciar todo el localstorage
    localStorage.clear();
});