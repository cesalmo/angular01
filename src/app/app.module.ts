import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BlogCompComponent } from './blog-comp/blog-comp.component';
import { LessonCompComponent } from './lesson-comp/lesson-comp.component';
import { E404Component } from './e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
