import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global';
import {NgForm} from '@angular/forms'
import { Carne } from '../../model/carne';
import { CargarService } from '../../services/cargar.service';
import { CarneService } from '../../services/carne.service';

@Component({
  selector: 'app-editarcarne',
  templateUrl: '../createcarne/createcarne.component.html',
  styleUrls: ['./editarcarne.component.css'],
  providers: [CarneService, CargarService]
})
export class EditarcarneComponent implements OnInit {
  public titulo: String;
  public carne: Carne;
  public carneGuardar: Carne;
  public url: String;
  public archivosParaCargar: Array<File>;
  public status: String;
  public idGuardado: String;
  
  constructor(
    private carneService: CarneService,
    private cargarService: CargarService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.titulo = "Editar Elemento"
    this.url = Global.url
    this.carne = new Carne('','',0.0,'','','')
    this.carneGuardar = new Carne('','',0.0,'','','')
    this.archivosParaCargar = []
    this.status = ""
    this.idGuardado = ""
   }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      let id = params['id'];
      console.log(id)
      this.getCarne(id)
    })
  }
  getCarne(id:String){
    this.carneService.getCarne(id).subscribe(
      response =>{
        this.carne = response.carne
      },
      error => {
        console.log(<any>error)
      }
    )
  }
  guardarCarne(form:NgForm){
    this.carneService.updateCarne(this.carne).subscribe(
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
              //this.fileInput.nativeElement.value = ""
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
