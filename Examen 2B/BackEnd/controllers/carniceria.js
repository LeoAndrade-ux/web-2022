'use strict'
const carne = require("../models/carne")
var Carne = require("../models/carne")
var path = require('path')
var fs = require('fs')

var controller = {
    home:function(req,res){
        return res.status(201).send(
        "<h1>Hola desde el controlador</h1>"
        )
    },
    getProductos:function(req,res){
        Carne.find({}).sort().exec((err,carnes)=>{
            if(err) return res.status(500).send({message:'Error al recuperar las carnes'})
            if(!carnes) return res.status(404).send({message:'No hay autos que mostrar'})
            return res.status(200).send({carnes})
        })
    },
    saveCarne:function(req,res){
        var carne = new Carne()
        var params = req.body
        carne.tipocarne = params.tipocarne
        carne.precio = params.precio
        carne.corte = params.corte
        carne.subTipocarne = params.subTipocarne
        carne.save((err,carneStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar'})
            if(!carneStored) return res.status(404).send({message:'No se guardo la carne'})
            return res.status(200).send({carne:carneStored})
        })
    },
    getCarne:function(req,res){
        var carneId = req.params.id;
        if (carneId == null) return res.status(404).send({message:'La carne no existe'})
        Carne.findById(carneId,(err,carne)=>{
            if(err) return res.status(500).send({message:'Error al recuperar los datos'})
            if(!carne) return res.status(404).send({message:'La carne no existe'})
            return res.status(200).send({carne})
        })
    },
    deleteCarne:function(req,res){
        var carneId=req.params.id;
        Carne.findByIdAndRemove(carneId,(err,carneRemoved)=>{
            if (err) return res.status(500).send({message:'Error al eliminar los datos'});
            if(!carneRemoved) return res.status(404).send({message:'No se puede eliminar la carne'});
            return res.status(200).send({carne:carneRemoved});
        })
    },
    updateCarne:function(req,res){
        var carneId=req.params.id;
        var update=req.body;
        Carne.findByIdAndUpdate(carneId,update,{new:true},(err,carneUpdate)=>{
            if (err) return res.status(500).send({message:'Error al actualizar los datos'});
            if(!carneUpdate) return res.status(404).send({message:'El auto no existe para actualizar'});
            return res.status(200).send({carne:carneUpdate});
        })
    },
    uploadImagen:function(req,res){
        var carneId=req.params.id;
        var fileName='Imagen no subida';

        if(req.files){
            var filePath=req.files.imagen.path;
            var file_split=filePath.split('\\');
            var fileName=file_split[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' || fileExt=='gif'){
                Carne.findByIdAndUpdate(carneId,{imagen:fileName},{new:true},(err,carneUpdated)=>{
                    if (err) return res.status(500).send({message:'La imagen no se ha subido'});
                    if(!carneUpdated) return res.status(404).send({message:'El auto no existe y no se subio la imagen'});
                    return res.status(200).send({carne:carneUpdated});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extensión no es válida'})
                });
            }
        }else{
            return res.status(200).send({message:fileName});
        }
    },
    getImagen:function(req,res){
        var file=req.params.imagen;
        var path_file="./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:'No existe la imagen'});
            }
        })
    }
}

module.exports = controller