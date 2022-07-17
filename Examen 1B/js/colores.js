'use strict'
window.addEventListener('load', () => {

    var boton = document.querySelector("#gris")
    var boton2 = document.querySelector("#rojo")
    var boton3 = document.querySelector("#azul")
    var enlace = document.querySelectorAll(".readmore")
    var logo = document.querySelector("#logo")
    var body = document.querySelector("#body")

    boton.addEventListener('click', function () {

        if (enlace.length!=0){
            enlace.forEach(function (enlace){
                enlace.style.background ="#59718d";
            });
        }
        logo.style.background ="#59718d";
        body.style.background ="url('/Examen 1B/css/img/fondo1.jpeg')";
    });

    boton2.addEventListener('click', function () {
        if (enlace.length!=0){
            enlace.forEach(function (enlace){
                enlace.style.background ="red";
            });
        }
        logo.style.background ="red";
        body.style.background ="url('/Examen 1B/css/img/fondo2.jpg')";
    });

    boton3.addEventListener('click', function () {
        if (enlace.length!=0){
            enlace.forEach(function (enlace){
                enlace.style.background ="blue";
            });
        }
        logo.style.background ="blue";
        body.style.background ="url('/Examen 1B/css/img/fondo3.jpg')";
    });
});