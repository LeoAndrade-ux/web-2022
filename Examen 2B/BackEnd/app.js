'use strict'
var express = require('express')
var bodyParser = require('body-parser')

var app = express() 
var carniceria_routes = require('./routes/carniceria')
//todo lo que llega lo convierte a json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//configuracion de las cabeceras
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With,Content-Type,Accept, Access-Control-Allow,Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});

//rutas
/*
app.get('/',(req,res)=>{
    res.status(201).send(
    "<h1>Bienvenido al BackEnd</h1>"
    )
})*/
app.use('/',carniceria_routes)

module.exports = app