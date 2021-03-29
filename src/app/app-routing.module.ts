import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresaFormularioComponent } from './empresa/empresaFormulario/empresa.formulario.component';


const routes: Routes = [
  {
    path: '',
    component: EmpresaFormularioComponent,
    pathMatch: 'full'
  },
  {
    path: 'vehiculos',
    component: EmpresaFormularioComponent
  },
  {
    path: 'empresas',
    component: EmpresaFormularioComponent
  },
  {
    path: 'empresa/:idEmpresa',
    component: EmpresaFormularioComponent
  },
  {
    path: 'usuarios',
    component: EmpresaFormularioComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
