import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
// import { ShellbarUser, ShellbarUserMenu } from '@fundamental-ngx/core';



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

// *******************************************
  condensed: boolean = false;
//   user: ShellbarUser = {
//     initials: 'WW',
//     colorAccent: 11
// };

// userMenu: ShellbarUserMenu[] = [
//     { text: 'Settings', callback: this.settingsCallback },
//     { text: 'Sign Out', callback: this.signOutCallback }
// ];

//   settingsCallback() {
//     alert('Settings Clicked');
// }

// signOutCallback() {
//     alert('Sign Out Clicked');
// }
}
