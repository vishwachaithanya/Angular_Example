import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {
  public text : string="";
  constructor(public data:DataService){}
  ngOnInit(){
    this.data.share.subscribe(x=>this.text=x)
  }


}
