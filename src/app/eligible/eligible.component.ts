import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-eligible',
  templateUrl: './eligible.component.html',
  styleUrls: ['./eligible.component.scss']
})
export class EligibleComponent {
  @Input() arr:any;

}
