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
    placa:             ['',[Validators.required, Validators.minLength(6)]],
    motor:             ['',[Validators.required, Validators.minLength(3)]],
    chasis:            ['',[Validators.required, Validators.minLength(3)]],
    modelo:            ['',[Validators.required, Validators.minLength(3)]],
    fechaMatricula:    ['',[Validators.required, Validators.minLength(8)]],
    pasajerosSentados: ['',[Validators.required, Validators.minLength(1)]],
    pasajerosPie:      ['',[Validators.required, Validators.minLength(1)]],
    pesoSeco:          ['',[Validators.required, Validators.minLength(2)]],
    pesoBruto:         ['',[Validators.required, Validators.minLength(2)]],
    cantidadPuertas:   ['',[Validators.required, Validators.minLength(1)]],
    marca:             ['',[Validators.required, Validators.minLength(3)]],
    linea:             ['',[Validators.required, Validators.minLength(3)]],
    idEmpresa:         ['',[Validators.required, Validators.minLength(1)]]
  });

  constructor(  private vehiculoService:VehiculoService, private form:FormBuilder = new FormBuilder ) { }

  ngOnInit(): void {
    
  }

  guardarVehiculo( formulario:FormGroup ){
    let data = JSON.stringify(formulario.value);
    this.vehiculoService.guardarVehiculo(data);
    this.vehiculoService.obtenerVehiculos();
    formulario.reset();
  }

}
