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
        body.style.background ="url('/Examen 1B/css/img/fondo1.jpeg') fixed";

    });

    boton2.addEventListener('click', function () {
        if (enlace.length!=0){
            enlace.forEach(function (enlace){
                enlace.style.background =" #cb3010";
            });
        }
        logo.style.background =" #cb3010";
        body.style.background ="url('/Examen 1B/css/img/fondo2.jpg') fixed";
        
    });

    boton3.addEventListener('click', function () {
        if (enlace.length!=0){
            enlace.forEach(function (enlace){
                enlace.style.background =" #0470bc ";
            });
        }
        logo.style.background =" #0470bc ";
        body.style.background ="url('/Examen 1B/css/img/fondo3.jpg') fixed";
    });
});