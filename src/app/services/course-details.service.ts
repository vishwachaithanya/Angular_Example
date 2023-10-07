import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  url:string="https://dummyjson.com/products/";
  constructor(private _delete:HttpClient) { }
  deleteOperation(id: Number):Observable<any>{
    return this._delete.get<any>(this.url+id);
  }
  url1:string="https://restcountries.com/v3.1/name/";
  hit(name:string):Observable<any>
  {  
    return this._delete.get<any>(this.url1+name);
  }

}
