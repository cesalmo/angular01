import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core'; // fiori shellbar
// import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform'; // fiori shellbar
// import { ReactiveFormsModule } from '@angular/forms'; // fiori shellbar
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // fiori shellbar
// import { CdkTableModule } from '@angular/cdk/table'; // fiori shellbar
// import { ShellbarModule } from '@fundamental-ngx/core';
// import { ButtonModule } from '@fundamental-ngx/core';
// import { DragDropModule } from '@angular/cdk/drag-drop'
// import { IconModule } from '@fundamental-ngx/core';
// import { SideNavigationModule } from '@fundamental-ngx/core';

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
  schemas: [  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FundamentalNgxCoreModule,
    // FundamentalNgxPlatformModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    // CdkTableModule,
    // ShellbarModule,
    // ButtonModule,
    // DragDropModule,
    // IconModule,
    // SideNavigationModule
    
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
