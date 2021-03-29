import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './empresa.formulario.component.html',
  styles: [
  ]
})
export class EmpresaFormularioComponent implements OnInit {

  formularioEmpresa:FormGroup = this.form.group({
    tipoIdentificacion:   ['',[Validators.required, Validators.minLength(2)]],
    numeroIdentificacion: ['',[Validators.required, Validators.minLength(3)]],
    nombre:               ['',[Validators.required, Validators.minLength(3)]],
    direccion:            ['',[Validators.required, Validators.minLength(5)]],
    ciudad:               ['',[Validators.required, Validators.minLength(3)]],
    departamento:         ['',[Validators.required, Validators.minLength(3)]],
    pais:                 ['',[Validators.required, Validators.minLength(3)]],
    telefono:             ['',[Validators.required, Validators.minLength(3)]]
  });

  constructor(  private empresaService:EmpresaService, private form:FormBuilder = new FormBuilder ) { }

  ngOnInit(): void {
    
  }

  agregarEmpresa( formulario:FormGroup ){
    console.log( formulario.value);
  }

}
