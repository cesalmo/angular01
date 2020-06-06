import { Component } from '@angular/core';
import { DatosService } from './datos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  
 
  Tdatos: string[];

  constructor( private datosService: DatosService ){

    this.Tdatos = datosService.Tdatos;
    

  }

  procesaEmite(e) {
    console.log(e);
  }
}
