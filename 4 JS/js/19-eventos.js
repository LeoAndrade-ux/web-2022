'use strict'
window.addEventListener('load', () => {
    //eventos cuando el usuario da click, pasa por un elemento
    var boton = document.querySelector("#boton");
    var boton2 = document.querySelector("#boton2");
    console.log(boton);

    function cambiarColor() {
        console.log("He sido presionado");
        var bg = boton.style.background;

        if (bg == "blue none repeat scroll 0% 0%") {
            boton.style.background = "red";
            boton.style.padding = "10px";
        } else {
            boton.style.background = "blue";
            boton.style.padding = "5px";
        }
    }

    //Evento
    boton2.addEventListener('click', function () {
        this.style.border = "10px solid black";
    });

    //Evento mouseover
    boton2.addEventListener('mouseover', function () {
        this.style.background = "yellow";
    });

    //Evento mouseout
    boton2.addEventListener('mouseout', function () {
        this.style.background = "pink";
    });

    //Evento focus
    var input = document.querySelector("#nombre");
    input.addEventListener('focus', function () {
        console.log("focus-estoy dentro del input");
    });

    //Evento blur
    input.addEventListener('blur', function () {
        console.log("blur-estoy fuera del input");
    });

    //Evento keydown
    input.addEventListener('keydown', function () {
        console.log("keydown-estoy presionando la tecla", String.fromCharCode(event.keyCode));
    });

    //Evento keypress
    input.addEventListener('keypress', function () {
        console.log("keypress-estoy presionando la tecla", String.fromCharCode(event.keyCode));
    });

    //Evento keyup
    input.addEventListener('keypress', function () {
        console.log("keypress-estoy soltando la tecla", String.fromCharCode(event.keyCode));
    });

});