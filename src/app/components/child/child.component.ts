import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
  @Input() postman:string="";
  @Input() postData:any;
   @Input() postArray:any;
   msg:string="child to parent";
   msgviewchild:string="chey";
   @Output() message=new EventEmitter();
   passing(){
    return this.message.emit(this.msg);
   }
   update(data:any){
    this.msg=data.target.value;
   }
   ngOnChanges(changes: SimpleChanges)
   {
    console.log("this is on changes");

   }
   constructor(){
    console.log("this is constructor child ");
   }

}
