'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var AutoSchema=Schema({
    fabricante:String,
    modelo:String,
    color:String,
    matricula:String,
    anio:Number,
    precio:Number,
    imagen:String
});
module.exports=mongoose.model('Auto',AutoSchema);
//mongoose toma el 1er parametros lo pone en minusculas y en plural
//auto se guarde en la bdd