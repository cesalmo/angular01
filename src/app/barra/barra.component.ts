import { Component, OnInit } from '@angular/core';d

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e): void { console.log(e)  }

}
