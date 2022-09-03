import { Component, OnInit } from '@angular/core';
import { Carne } from '../../model/carne';
import { CarneService } from '../../services/carne.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.component.html',
  styleUrls: ['./carnes.component.css'],
  providers: [CarneService]
})
export class CarnesComponent implements OnInit {
  public carnes: Carne[]
  public url: string

  constructor(
    private _carneService: CarneService
  ) {
    this.url = Global.url
    this.carnes =[]
  }

  ngOnInit(): void {
    this.getCarnes()
  }

  getCarnes(){
    this._carneService.getCarnes().subscribe(
      response =>{
        if(response.carnes){
          this.carnes = response.carnes
        }
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

}
