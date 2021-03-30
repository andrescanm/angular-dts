import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../services/vehiculo.service';

@Component({
  selector: 'app-vehiculos-listado',
  templateUrl: './vehiculo.listado.component.html',
  styles: [
  ]
})
export class VehiculosListadoComponent implements OnInit {

  get vehiculosMostrar(){
    return this.vehiculoService.vehiculosRespuesta;
  }
  
  constructor( private vehiculoService:VehiculoService ) { }

  ngOnInit(){
    this.vehiculoService.obtenerVehiculos();
  }

}
