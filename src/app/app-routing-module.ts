import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'
import { Comp404Component } from './comp404/comp404.component'
import { LoremIpsumAPIComponent } from './lorem-ipsum-api/lorem-ipsum-api.component'


const routes: Routes = [
{ path: 'todo', component: HeaderComponent },
{ path: '', component: HomeComponent },
{ path: 'LoreIpsum', component: LoremIpsumAPIComponent },
{ path: '**', component: Comp404Component }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ HeaderComponent , HomeComponent, LoremIpsumAPIComponent ];