import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios.listado.component.html',
  styles: [
  ]
})
export class UsuariosListadoComponent implements OnInit {

  get usuariosMostrar(){
    return this.usuarioService.usuariosRespuesta;
  }
  
  constructor( private usuarioService:UsuarioService ) { }

  ngOnInit(){
    this.usuarioService.obtenerUsuarios();
  }

}
