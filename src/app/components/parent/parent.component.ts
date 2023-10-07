import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterContentChecked {
@ViewChild(ChildComponent) MsgFromchild: any;
  displayText:string="vishwachaithanya";
  myObject:any={name:"vc",class:"codingHub"}
  arr:any=[{name:"vc",rno:55}];
  getmsg:string="";
  getmsg2:any;
  received($event:any)
  {
    this.getmsg=$event;
  }
  ngAfterContentChecked() {
   this.getmsg2=this.MsgFromchild?.msgviewchild
  }
}
