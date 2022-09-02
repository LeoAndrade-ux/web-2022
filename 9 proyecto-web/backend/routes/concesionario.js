'use strict'
var express=require('express');
var ConcesionarioController=require('../controllers/concesionario');
var router=express.Router();
var multipart=require('connect-multiparty');
var multiPartMiddleWare=multipart({uploadDir:'./uploads'});

//pagina de inicio
router.get('/home',ConcesionarioController.home);
//guardar informacion de un auto
router.post('/guardar-auto',ConcesionarioController.saveAuto);
//ver información de autos
router.get('/autos',ConcesionarioController.getAutos);
//ver informacion de un auto
router.get('/auto/:id',ConcesionarioController.getAuto);
//eliminar un auto
router.delete('/auto/:id',ConcesionarioController.deleteAuto);
//actualizar un auto
router.put('/auto/:id',ConcesionarioController.updateAuto);
//agregar imagenes
router.post('/subir-imagen/:id',multiPartMiddleWare,ConcesionarioController.uploadImagen);
//recuperar imagen
router.get('/get-imagen/:imagen',ConcesionarioController.getImagen);
module.exports=router;