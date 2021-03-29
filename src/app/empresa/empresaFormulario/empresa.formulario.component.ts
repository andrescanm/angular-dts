import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './empresa.formulario.component.html',
  styles: [
  ]
})
export class EmpresaFormularioComponent implements OnInit {

  constructor( private empresaService:EmpresaService ) { }

  ngOnInit(): void {
    
  }

  agregarEmpresa( formulario:HTMLFormElement ){
    console.log( formulario );
  }

}
