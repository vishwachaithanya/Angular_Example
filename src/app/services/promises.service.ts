import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {
  url:string="https://restcountries.com/v3.1/name/";

  constructor(private _http:HttpClient) { }
  pass(Val:any):Promise<any>{
    // return this._http.get<any>(this.url+Val).toPromise();
    return firstValueFrom(this._http.get<any>(this.url+Val));

  }

}
