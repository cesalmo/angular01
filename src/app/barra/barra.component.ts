import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra',
  template: `

  <nav>
    <ul>
        <li>
            <a href="#aboutMe">{{item}}</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#CV">CV</a>
        </li>
    </ul>
</nav>
<input type="button" value="Click me" (click)="onClick($event)">
`

})
export class BarraComponent implements OnInit {

  constructor() { }

  @Input() item: string

  ngOnInit(): void {
  }

  onClick(e): void { console.log(e)  }

}
