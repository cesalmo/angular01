import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `

  <app-barra [item]="f1"></app-barra>
  <H2 [style]="estilo1">fin componente app en {{title}}</H2>
  
   `
})
export class AppComponent {
  title = 'Mi CV';
  estilo1: string = "font-size: 4vw";
  f1: string = "Home";
}
