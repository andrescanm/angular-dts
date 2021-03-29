import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-tabla-empresa',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent implements OnInit {

  constructor( private empresaService:EmpresaService ) { }

  ngOnInit(): void {
    this.empresaService.obtenerEmpresas();
  }

}
