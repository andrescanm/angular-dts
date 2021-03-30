import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { EmpresaInterface } from '../empresaInterfaces/empresa.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private endPoint:String = "http://localhost:8080/dts/";
  private metodo:String = '';
  public empresasRespuesta:EmpresaInterface[] = [];
  
  constructor( private http:HttpClient ) { }

  obtenerEmpresas():void{
    this.metodo = 'listar_empresas';
    let url = `${this.endPoint}${this.metodo}`;
    this.http.get(url).subscribe( (respuesta:any) => { this.empresasRespuesta=respuesta; } );
  }
  
  guardarEmpresa(empresa:String):void{

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
    this.metodo = 'guardar_empresa';
    let url = `${this.endPoint}${this.metodo}`;
    this.http.post(url, empresa, httpOptions).subscribe( (respuesta:any) => {console.log(respuesta);} );
  }

}
