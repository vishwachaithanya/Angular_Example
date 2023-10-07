import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private _content=new BehaviorSubject("default data")
public share=this._content.asObservable();

  constructor() { }
  updatedata(text:any)
  {
    this._content.next(text);
  }


}
