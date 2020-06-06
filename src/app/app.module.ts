import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { HeaderComponent } from './header/header.component';
import { DatosService } from './datos.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
