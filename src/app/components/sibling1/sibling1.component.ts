import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
  text2:string="";
  constructor(public data:DataService){}
  updatetext(text:any){
    this.data.updatedata(text);
  }
  ngOnInit(){
    this.data.share.subscribe(res=>this.text2=res);
    
  }

  }

