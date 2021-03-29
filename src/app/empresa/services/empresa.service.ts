import { Injectable } from '@angular/core';
import { EmpresaInterface } from '../empresaInterfaces/empresa.interface';
import { HttpClient } from '@angular/common/http';

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
}
