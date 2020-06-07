import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-lorem-ipsum-api',
  templateUrl: './lorem-ipsum-api.component.html',
  styles: [
  ]
})
export class LoremIpsumAPIComponent implements OnInit {

  constructor(public datosService: DatosService) { }

  ngOnInit(): void {
  }

  onGetData(){
    this.datosService.getLorenIpsum().subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }

}
