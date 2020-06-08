import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { DatosService } from './datos.service';
import { AppRoutingModule, routingComponents } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    routingComponents
  ],
  schemas: [ ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
