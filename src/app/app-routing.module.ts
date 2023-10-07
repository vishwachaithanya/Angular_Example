import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifComponent } from './components/ngif/ngif.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { PromisesComponent } from './components/promises/promises.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ProjectComponent } from './components/project/project.component';
import { ReceivedProjectComponent } from './components/received-project/received-project.component';

const routes: Routes = [
  {
    path:'ngif',
    component:NgifComponent
  },{
    path:'pagenotfound',
    component:PagenotfoundComponent
  },{
    path:'home',
    component:HomeComponent
  },
  {
    path:'pagenotfound',
    component:PagenotfoundComponent
  },{
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'project',
    component:ProjectComponent

  },
  {
    path:'details/:id',
    component:CoursesDetailsComponent
  },
  {
    path:'promises',
    component:PromisesComponent
  },
  {
    path:'received/:id',
    component:ReceivedProjectComponent
  },
  {
    path:'observer',
    component:ObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
