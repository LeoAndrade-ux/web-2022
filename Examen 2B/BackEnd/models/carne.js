'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var CarneSchema = Schema({
    tipocarne: String,
    precio: Number,
    corte: String,
    subTipocarne: String,
    imagen: String
})
module.exports = mongoose.model('Carne', CarneSchema)
// moongose toma el 1er parametro lo pone en minusculas y en plural
// carne se guarda en la bdd