'use strict'
var express = require('express')
var CarniceriaController = require('../controllers/carniceria')
var router = express.Router();
var multipart = require('connect-multiparty')
var multiPartMiddleWare=multipart({uploadDir:'./uploads'});

//pagina de inicio
router.get('/home',CarniceriaController.home)

// ver informacion de las carniceria
router.get('/carnes',CarniceriaController.getProductos)

//guardar informacion
router.post('/guardar-carne',CarniceriaController.saveCarne)

//ver informacion de una carne
router.get('/carne/:id',CarniceriaController.getCarne)

//eliminar informacion de una carne
router.delete('/carne/:id',CarniceriaController.deleteCarne);

//actualziar informacion de una carne
router.put('/carne/:id',CarniceriaController.updateCarne);

//agregar imagenes
router.post('/subir-imagenes/:id',multiPartMiddleWare,CarniceriaController.uploadImagen)

//ver imagen
router.get('/get-imagen/:imagen',CarniceriaController.getImagen)

//buscar por corte
router.get('/get-carne/:corte', CarniceriaController.getCarneCorte);


module.exports = router;