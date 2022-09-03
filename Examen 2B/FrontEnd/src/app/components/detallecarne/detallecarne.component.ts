import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import { Carne } from '../../model/carne';
import { CarneService } from '../../services/carne.service';

@Component({
  selector: 'app-detallecarne',
  templateUrl: './detallecarne.component.html',
  styleUrls: ['./detallecarne.component.css'],
  providers:[CarneService]
})
export class DetallecarneComponent implements OnInit {
  public url: string;
  public carne: Carne;
  public confirm: boolean;

  constructor(
    private carneService: CarneService,
    private router: Router,
    private route: ActivatedRoute,
  ){
    this.url= Global.url;
    this.carne = new Carne('','',0.0,'','','')
    this.confirm = false;
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log(id)
      this.getCarne(id)
    })
  }
  getCarne(id:String){
    this.carneService.getCarne(id).subscribe(
      response =>{
        this.carne = response.carne;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }
  setConfirm(confirm:boolean){
    this.confirm = confirm;
  }

  borrarCarne(id:String){
    this.carneService.deleteCarne(id).subscribe(
      response =>{
        if (response.carne){
          this.router.navigate(['/carnes'])
        }
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

}
