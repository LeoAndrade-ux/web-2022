import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/auto';
import { AutoService } from 'src/app/services/auto.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-createauto',
  templateUrl: './createauto.component.html',
  styleUrls: ['./createauto.component.css'],
  providers:[AutoService]
})
export class CreateautoComponent implements OnInit {

  public titulo:string;
  public auto:Auto;
  public autoGuardar:Auto;
  public url:string;
  public status:string;
  public idGuardado:string;

  constructor(
    private _autoService:AutoService
  ) {
    this.titulo="GUARDAR AUTO";
    this.url=Global.url;
    this.auto= new Auto('','','','','',2022,10000,'');
    this.autoGuardar= new Auto('','','','','',2022,10000,'');
    this.status="";
    this.idGuardado="";
   }

  ngOnInit(): void {
  }
  

}
