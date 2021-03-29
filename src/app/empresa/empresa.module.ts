import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmpresaFormularioComponent } from './empresaFormulario/empresa.formulario.component';
import { EmpresasListadoComponent } from './empresasListado/empresas.listado.component';



@NgModule({
  declarations: [
    EmpresaFormularioComponent,
    EmpresasListadoComponent
  ],
  exports : [
    EmpresaFormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmpresaModule { }
