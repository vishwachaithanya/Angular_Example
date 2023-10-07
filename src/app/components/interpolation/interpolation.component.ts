import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent
 {
  public firstName:string ="vishwa";
  emp={
    fname:'vc',
    lname:'shirla',
    age : 23,
    ls: null
  }
  arr=[{name:"vc",age: 23},{name:"kalyan",age:24}]
  url:string='../../../assets/img/6c295cc0-38f7-4f7e-bc62-9c94843d9671.jpg'
  public getMyname(){
    return this.firstName
    //return "vishwa"
    //return `${this.name}`
  }
  
}
