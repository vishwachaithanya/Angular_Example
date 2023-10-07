import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { SBindingComponent } from './components/s-binding/s-binding.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { CoursesService } from './services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { PromisesComponent } from './components/promises/promises.component';
import { Sibling1Component } from './components/sibling1/sibling1.component';
import { Sibling2Component } from './components/sibling2/sibling2.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ProjectComponent } from './components/project/project.component';
import { ReceivedProjectComponent } from './components/received-project/received-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    EBindingComponent,
    PBindingComponent,
    CBindingComponent,
    TwoWayBindingComponent,
    SBindingComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    ParentComponent,
    ChildComponent,
    PagenotfoundComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    PromisesComponent,
    Sibling1Component,
    Sibling2Component,
    ObservableComponent,
    ProjectComponent,
    ReceivedProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
