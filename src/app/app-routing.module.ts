import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogCompComponent } from './blog-comp/blog-comp.component';
import { LessonCompComponent } from './lesson-comp/lesson-comp.component';
import { E404Component } from './e404/e404.component'

// { path: 'todo', component: HeaderComponent }
const routes: Routes = [
  { path: 'blog', component: BlogCompComponent },
  { path: 'lesson', component: LessonCompComponent },
  { path: '**', component: E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [BlogCompComponent, LessonCompComponent, E404Component ];
