import { Injectable } from '@angular/core';
import { EmpresaInterface } from '../empresaInterfaces/empresa.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private empresas:EmpresaInterface[] = [];
  private endPoint:String = "http://localhost:8080/dts/";
  private metodo:String = '';
  
  constructor( private http:HttpClient ) { }

  obtenerEmpresas():String{
    this.metodo = 'listar_empresas';
    this.http.get('http://localhost:8080/dts/listar_empresas').subscribe( respuesta => { console.log(respuesta); } );
    return this.endPoint+""+this.metodo ;
  }
}
