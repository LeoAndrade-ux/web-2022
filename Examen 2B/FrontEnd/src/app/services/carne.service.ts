import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Carne} from '../model/carne';
import {Global} from '../services/global';
import {Observable} from 'rxjs';

@Injectable()
export class CarneService {
    public url:string;
    constructor(
        private http: HttpClient
    ){
        this.url = Global.url;
    }
    //ver informacion de todas las carnes
    getCarnes(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.get(this.url + 'carnes',{headers: headers})
    }
    //guardar carne
    guardarCarne(carne: Carne): Observable<any> {
        let params  = JSON.stringify(carne)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.post(this.url + 'guardar-carne',params,{headers: headers})
    }
    //obtener datos de una carne
    getCarne(id:String): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.get(this.url + 'carne/'+id, {headers: headers})
    }
    //actualizar datos de una carne
    updateCarne(carne: Carne): Observable<any> {
        let params = JSON.stringify(carne)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.put(this.url + 'carne/'+carne._id, params, {headers: headers})
    }
    //eliminar una carne
    deleteCarne(id:String): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.delete(this.url + 'carne/'+id, {headers: headers})
    }
}