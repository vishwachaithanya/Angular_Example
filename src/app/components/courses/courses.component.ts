import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent 
{
  vc3:any;
  courses:any=[
// {
//     id:"01",
//     Name:"Core java"
//   },
// {
//   id: "02",
//   Name:"Adv Java"
// },
// {
//   id:"03",
//   Name:"Spring"
// }
  ];
  constructor(private __courses:CoursesService,private _router:Router,private _ar:ActivatedRoute)
  {
  }
  ngOnInit(){
  this.courses=this.__courses.getcourses();
  this.getEmployeeData();
  this.vc3=this._ar.snapshot.paramMap.get("id");

  }
  
  getEmployeeData() {
    this.__courses.getEmployeeList().subscribe(
      (res) =>{
        console.log(res);
      }
    )
    
  }
  onselect(course:any)
  {
    this._router.navigate(['/details',course.id])

  }
  selected(course:any){
    return course.id==this.vc3

  }

}


