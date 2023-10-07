import { Component } from '@angular/core';
import { PromisesService } from 'src/app/services/promises.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent
 {
  msg:any;
  constructor(private _comp:PromisesService){}
  get(Val:any){
    return this._comp.pass(Val).then(
      (res)=>
      {console.log(res);
       this.msg=res;
      }
    )
  }

}
