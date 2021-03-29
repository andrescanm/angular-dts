import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-empresas-listado',
  templateUrl: './empresas.listado.component.html',
  styles: [
  ]
})
export class EmpresasListadoComponent implements OnInit {

  get empresasMostrar(){
    return this.empresaService.empresasRespuesta;
  }
  
  constructor( private empresaService:EmpresaService ) { }

  ngOnInit(){
    this.empresaService.obtenerEmpresas();
  }

}
