import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';

const material= [
  MatButtonModule,
  MatTreeModule
];

@NgModule({
  declarations: [],
  imports: [
  material
  ],
  exports:[material]

})
export class AngularMaterialModule { 

}
