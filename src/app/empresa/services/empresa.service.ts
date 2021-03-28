import { Injectable } from '@angular/core';
import { EmpresaInterface } from '../interfaces/empresa.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private empresas:EmpresaInterface[] = [];
  private endPoint:String = "http://localhost:8080/dts/";
  private metodo:String = '';
  constructor() { }

  obtenerEmpresas():String{
    this.metodo = 'listar_empresas';
    return this.endPoint+""+this.metodo ;
  }
}
