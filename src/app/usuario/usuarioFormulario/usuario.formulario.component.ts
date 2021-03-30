import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './usuario.formulario.component.html',
  styles: [
  ]
})
export class UsuarioFormularioComponent implements OnInit {

  formularioUsuario:FormGroup = this.form.group({
    tipoIdentificacion:   ['',[Validators.required, Validators.minLength(2)]],
    numeroIdentificacion: ['',[Validators.required, Validators.minLength(3)]],
    nombre:               ['',[Validators.required, Validators.minLength(3)]],
    direccion:            ['',[Validators.required, Validators.minLength(3)]],
    ciudad:               ['',[Validators.required, Validators.minLength(3)]],
    departamento:         ['',[Validators.required, Validators.minLength(3)]],
    pais:                 ['',[Validators.required, Validators.minLength(3)]],
    telefono:             ['',[Validators.required, Validators.minLength(3)]]
  });

  constructor(  private usuarioService:UsuarioService, private form:FormBuilder = new FormBuilder ) { }

  ngOnInit(): void {
    
  }

  guardarUsuario( formulario:FormGroup ){
    console.log(JSON.stringify(formulario.value));
    let data = JSON.stringify(formulario.value);
    this.usuarioService.guardarUsuario(data);
    this.usuarioService.obtenerUsuarios();
    formulario.reset();
  }

}
