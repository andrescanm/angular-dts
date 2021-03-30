import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmpresaFormularioComponent } from './empresaFormulario/empresa.formulario.component';
import { EmpresasListadoComponent } from './empresasListado/empresas.listado.component';



@NgModule({
  declarations: [
    EmpresaFormularioComponent,
    EmpresasListadoComponent
  ],
  exports : [
    EmpresaFormularioComponent,
    EmpresasListadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
