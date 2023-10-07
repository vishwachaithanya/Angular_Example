import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
  constructor(){
    console.log("this is constructor");
  }
  ngOnDestroy(){
    console.log("destroy");
  }
 ngOnInit()
 {
  let promise = new Promise((res , err)=>{
    console.log("this is promise");
    res("this is vc1");
    res("vishwa1");
  }
  )
  let observer=new Observable((res)=>{
    console.log("this is observable");
    res.next("this is vc");
    res.next("vishwa");

  }
  )

  promise.then((res)=>{
    console.log(res)
  })
  observer.subscribe((Res)=>
  console.log(Res))
 }
 
 



}
