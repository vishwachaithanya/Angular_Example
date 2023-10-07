import{Component} from '@angular/core';
// import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  myText: string = "";
  public val: string = "";
  public val2: string = "";
  onclick(h: any) {
    this.val = h.value;
  }
  onclicked(course: any) {
    this.val2 = course.value;
  }
}
