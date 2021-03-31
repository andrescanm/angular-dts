import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { UsuarioInterface } from '../usuarioInterfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private endPoint:String = "http://localhost:8080/dts/";
  private metodo:String = '';
  public usuariosRespuesta:UsuarioInterface[] = [];
  
  constructor( private http:HttpClient ) { }

  obtenerUsuarios():void{
    this.metodo = 'listar_usuarios';
    let url = `${this.endPoint}${this.metodo}`;
    this.http.get(url).subscribe( (respuesta:any) => { this.usuariosRespuesta=respuesta; } );
  }
  
  guardarUsuario(usuario:String):void{

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
    this.metodo = 'guardar_usuario';
    let url = `${this.endPoint}${this.metodo}`;
    this.http.post(url, usuario, httpOptions).subscribe( (respuesta:any) => {console.log(respuesta);} );
    this.obtenerUsuarios();
  }

}
