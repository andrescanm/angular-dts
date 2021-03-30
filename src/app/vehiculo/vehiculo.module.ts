import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VehiculoFormularioComponent } from './vehiculoFormulario/vehiculo.formulario.component';
import { VehiculosListadoComponent } from './vehiculoListado/vehiculo.listado.component';



@NgModule({
  declarations: [
    VehiculoFormularioComponent,
    VehiculosListadoComponent
  ],
  exports : [
    VehiculoFormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class VehiculoModule { }
