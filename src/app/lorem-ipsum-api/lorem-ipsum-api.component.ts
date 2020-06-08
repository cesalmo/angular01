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
      data => this.processData(data),
      error => console.log('oops', error)
    );
  }

  processData(data){
    for (var a in data ){ 
      if ( data[a].userId === 3 ){ 
        this.datosService.Tplace.push(data[a])
      };
    };
  };
}
