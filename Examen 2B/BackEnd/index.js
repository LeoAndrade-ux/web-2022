'use strict'
var mongoose = require('mongoose');
var port = '3600';
mongoose.promise = global.Promise;
var app = require('./app.js');
mongoose.connect('mongodb://localhost:27017/carniceria')
.then(() =>{
    console.log("Conexion establecida con la bdd")
    app.listen(port,() =>{
        console.log("Conexion establecida con la url: localhost:3600")
    })
})
.catch(err => console.log(err))
