import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-noteligible',
  templateUrl: './noteligible.component.html',
  styleUrls: ['./noteligible.component.scss']
})
export class NoteligibleComponent {
  @Input() arr1:any;

}
