import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [
    FormularioComponent,
    TablaComponent
  ],
  exports : [
    FormularioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpresaModule { }
