import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresaFormularioComponent } from './empresa/empresaFormulario/empresa.formulario.component';
import { UsuarioFormularioComponent } from './usuario/usuarioFormulario/usuario.formulario.component';
import { VehiculoFormularioComponent } from './vehiculo/vehiculoFormulario/vehiculo.formulario.component';


const routes: Routes = [
  {
    path: '',
    component: EmpresaFormularioComponent,
    pathMatch: 'full'
  },
  {
    path: 'vehiculos',
    component: VehiculoFormularioComponent
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
    component: UsuarioFormularioComponent
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
