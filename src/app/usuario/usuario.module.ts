import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuarioFormularioComponent } from './usuarioFormulario/usuario.formulario.component';
import { UsuariosListadoComponent } from './usuariosListado/usuarios.listado.component';



@NgModule({
  declarations: [
    UsuarioFormularioComponent,
    UsuariosListadoComponent
  ],
  exports : [
    UsuarioFormularioComponent,
    UsuariosListadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
