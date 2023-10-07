import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  names=['chey','mb','kalyan','vishwa'];
  emp=[
       {name:'vishwachaithanya',roll:355,clg:'kucet'},
       {name:'chaithanya',roll:345,clg:'mrec'}
      ];

}
