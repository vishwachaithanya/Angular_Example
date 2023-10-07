import { Component } from '@angular/core';

@Component({
  selector: 'app-c-binding',
  templateUrl: './c-binding.component.html',
  styleUrls: ['./c-binding.component.css']
})
export class CBindingComponent {
  textSize:string="textSize";
  myobject=
  {
  'textcolor':true,
  'fontcolor':true
  }
user:boolean=false;
online:string="online";
offline:string="offline";
isrequired(){
  return true;
}
required:boolean=true;

}

