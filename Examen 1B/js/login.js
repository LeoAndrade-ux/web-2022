'use strict'
window.addEventListener('load', () => {
    /*mostrar icono*/
    let logout = $("#logout");
    let logout_text = $("#text-logout");
    logout.hide();
    logout_text.hide();
    /*formulario*/
    var entrar = document.querySelector("#entrar");
    var formulario = document.querySelector("#formLogin");
    var logout1 = document.querySelector("#logout")


    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    entrar.addEventListener("click", function () {
        var nameInput = document.querySelector("#addUser").value;
        var emailInput = document.querySelector("#addEmail").value;
        var passwordInput = document.querySelector("#addPsw").value;
        if (nameInput.length > 1) {
            localStorage.setItem("nombre", nameInput)
        }
        if (emailInput.length > 1) {
            localStorage.setItem("email", emailInput)
        }
        if (passwordInput.length > 1) {
            localStorage.setItem("password", passwordInput)
        }
        var nameStored = localStorage.getItem("nombre")
        var emailStored = localStorage.getItem("email")
        var passwordStored = localStorage.getItem("password")

        if (nameInput == nameStored) {
            if (emailInput == emailStored) {
                if (passwordInput == passwordStored) {
                    var msg = document.querySelector("#descripcion")
                    msg.innerHTML = "Bienvenido, " + nameStored
                    formulario.style.display = "none";
                    logout.show();
                    logout_text.show();
                } else {
                    var msg = document.querySelector("#descripcion")
                    msg.innerHTML = "datos incorrectos"
                }
            } else {
                var msg = document.querySelector("#descripcion")
                msg.innerHTML = "datos incorrectos"
            }
        } else {
            var msg = document.querySelector("#descripcion")
            msg.innerHTML = "datos incorrectos"
        }
    });

    logout1.addEventListener("click", function(){
        window.location.reload()
    });


});