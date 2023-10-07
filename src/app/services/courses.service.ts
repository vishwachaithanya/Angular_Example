import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url:string="https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
  constructor(private _data:HttpClient) { 

  }
  getEmployeeList():Observable<[]>
  {
    return this._data.get<[]>(this.url);
    }

  getcourses(){
    return[
    {
      id:"01",
      Name:"Core java"
    },
  {
    id: "02",
    Name:"Adv Java"
  },
  {
    id:"03",
    Name:"Spring"
  }
  ]
}


}
