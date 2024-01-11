import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voterlist';
  sarr:any[]=[];
  ab(name:string,age:string)
  {
this.sarr.push({name,age});
console.log(this.sarr);
  }
}
