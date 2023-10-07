import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {
  onclick(){
    alert("onclicked")
  }
  ondbl(){
    alert("on double click")
  }
  mouse(){
    alert("mouse over")
  }
  out(){
    alert("mouse out")
  }
  move(){
    alert("mouse move")
  }
  key(){
    alert("key down")
  }
  keydown(){
    alert("keydwon")
  }
  keyup(){
    alert("keyup")
  }
  keypress(){
    alert("keypress")
  }
  onfocus(){
    alert("focus")
  }
  onblur(){
    alert("blur")
  }
  oninput()
  {
    alert("input")
  }


  }


