import { Component } from '@angular/core';

@Component({
  selector: 'app-s-binding',
  templateUrl: './s-binding.component.html',
  styleUrls: ['./s-binding.component.css']
})
export class SBindingComponent {
  myColor:string="blue"
  myobject:object={
    color:'red',
    background:"green"
  }
  user:boolean=true;
  offline:string="red";
  online:string="blue "


}
