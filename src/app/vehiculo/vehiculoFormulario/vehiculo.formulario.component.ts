import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../services/vehiculo.service';

@Component({
  selector: 'app-formulario-vehiculo',
  templateUrl: './vehiculo.formulario.component.html',
  styles: [
  ]
})
export class VehiculoFormularioComponent implements OnInit {

  formularioVehiculo:FormGroup = this.form.group({
    tipoIdentificacion:   ['',[Validators.required, Validators.minLength(2)]],
    numeroIdentificacion: ['',[Validators.required, Validators.minLength(3)]],
    nombre:               ['',[Validators.required, Validators.minLength(3)]],
    direccion:            ['',[Validators.required, Validators.minLength(3)]],
    ciudad:               ['',[Validators.required, Validators.minLength(3)]],
    departamento:         ['',[Validators.required, Validators.minLength(3)]],
    pais:                 ['',[Validators.required, Validators.minLength(3)]],
    telefono:             ['',[Validators.required, Validators.minLength(3)]]
  });

  constructor(  private vehiculoService:VehiculoService, private form:FormBuilder = new FormBuilder ) { }

  ngOnInit(): void {
    
  }

  guardarVehiculo( formulario:FormGroup ){
    console.log(JSON.stringify(formulario.value));
    let data = JSON.stringify(formulario.value);
    this.vehiculoService.guardarVehiculo(data);
    this.vehiculoService.obtenerVehiculos();
    formulario.reset();
  }

}
