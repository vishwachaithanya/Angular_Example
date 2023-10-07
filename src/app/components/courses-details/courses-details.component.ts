import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { CourseDetailsService } from 'src/app/services/course-details.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css'],
})
export class CoursesDetailsComponent
 {

  details: any = [];
  msg:any=[];
  vc:any;
  vc2:any;
  vc3:any;
  public country=new FormControl;
   test: any;
  constructor(private _courses: CourseDetailsService,private _retrive:ActivatedRoute,private _nav:Router) {
         this.test = _courses;
  }
  ngOnInit() {
    // this.details=this.__courses.getcourses();
    this.country.valueChanges.pipe(debounceTime(5000)).subscribe(
      (country)=>{
      this.search(country)
    })
    this._courses.deleteOperation(1).subscribe({
      next: (res) => {
        console.log(res);
        
      },
      
      error: (error) => console.log(error.message),
    });
    this.vc=this._retrive.snapshot.paramMap.get("id");
    this._retrive.paramMap.subscribe((params:ParamMap)=>{
      this.vc2=params.get("id")
    })

  }
  search(value:any)
 {
  this._courses.hit(value).subscribe(

    (res)=>this.msg=res
  )
  
}
onBack(){
  this._nav.navigate(["/courses",{id:this.vc}])

}

}
