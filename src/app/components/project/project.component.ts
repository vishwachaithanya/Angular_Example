import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private _data:CoursesService,private _go:Router){}
  courses:any=[];
  ngOnInit(){
    this.courses=this._data.getcourses();
  }
  select(x:any)
  {
    this._go.navigate(['/received', x.id])
  }

}
