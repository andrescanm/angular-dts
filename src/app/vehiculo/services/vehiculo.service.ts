import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { VehiculoInterface } from '../vehiculoInterfaces/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private endPoint:String = "http://localhost:8080/dts/";
  private metodo:String = '';
  public vehiculosRespuesta:VehiculoInterface[] = [];
  
  constructor( private http:HttpClient ) { }

  obtenerVehiculos():void{
    this.metodo = 'listar_vehiculos';
    let url = `${this.endPoint}${this.metodo}`;
    this.http.get(url).subscribe( (respuesta:any) => { this.vehiculosRespuesta=respuesta; } );
  }
  
  guardarVehiculo(vehiculo:String):void{

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
    this.metodo = 'guardar_vehiculo';
    let url = `${this.endPoint}${this.metodo}`;
    this.http.post(url, vehiculo, httpOptions).subscribe( (respuesta:any) => {console.log(respuesta);} );
  }

}
