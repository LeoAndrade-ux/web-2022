import { Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms'
import { CargarService } from '../../services/cargar.service';
import { Global } from 'src/app/services/global';
import { Carne } from '../../model/carne';
import { CarneService } from '../../services/carne.service';

@Component({
  selector: 'app-createcarne',
  templateUrl: './createcarne.component.html',
  styleUrls: ['./createcarne.component.css'],
  providers: [CarneService, CargarService]
})
export class CreatecarneComponent implements OnInit {

  public titulo: String;
  public carne: Carne;
  public carneGuardar: Carne;
  public url: String;
  public status: String;
  public idGuardado: String;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;
  constructor(
    private carneService: CarneService,
    private cargarService: CargarService
  ){
    this.titulo = 'Registrar Producto Carne';
    this.url = Global.url
    this.carne = new Carne('','',0.0,'','','')
    this.carneGuardar = new Carne('','',0.0,'','','')
    this.status = ""
    this.idGuardado = ""
    this.archivosParaCargar = []
  }

  ngOnInit(): void {
  }
  guardarCarne(form:NgForm){
    this.carneService.guardarCarne(this.carne).subscribe(
      response =>{
        if (response.carne){
          if(this.archivosParaCargar){
            this.cargarService.peticionRequest(Global.url+"subir-imagenes/"+response.carne._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.carneGuardar = result.response;
              this.status= 'success'
              console.log(result.carne._id)
              this.idGuardado = result.carne._id
              console.log(this.idGuardado)
              form.reset()
              this.fileInput.nativeElement.value = ""
            })
          }else{
            this.status = 'error'
          }
        }else{
          this.status = 'error'
        }
      },
      error =>{
        console.log(<any>error)
      }
    )
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar = <Array<File>>archivoSeleccionado.target.files
  }
}
