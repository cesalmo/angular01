import { Component, OnInit, Input } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  texto_accion: string;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {}

  onClick(e: MouseEvent) {
    e.preventDefault();

    if (this.texto_accion) {

      this.datosService.Tdatos.push(this.texto_accion);
      this.texto_accion = '';
    }
  }
}
