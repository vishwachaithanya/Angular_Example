import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent 
{
  
  ngOnInit()
  {
    console.log("ng on in it")
    let o=new Observable((res)=>{
      res.next("hi this is vc");
      res.next("hi this is vc");
      console.log("vc")
    

    })
    o.subscribe((res)=>{
      console.log(res)

    })

    let p=new Promise((res)=>{ 
      console.log("vishwa");
      res("vishwa2")
      res("vishwa3")
    }
    )
    p.then((res)=>{
      console.log(res)

    })
  }

}
