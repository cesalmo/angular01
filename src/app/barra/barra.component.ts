import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-barra',
    template: `

  <nav>
    <ul>
        <li>
            <a href="#aboutMe">Home</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#CV">CV</a>
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
