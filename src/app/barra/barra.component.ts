import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-barra',
    template: `

  <nav>
    <ul>
        <li>
            <a routerLink='/'>Home</a>
        </li>
        <li>
            <a routerLink='/todo'>Todo</a>
        </li>
        <li>
            <a routerLink='/LoreIpsum'>LoremIpsum API</a>
        </li>
    </ul>
</nav>
`

})
export class BarraComponent implements OnInit {


    constructor() { }

    ngOnInit(): void {
    }

}
