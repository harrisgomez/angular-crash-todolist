import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element to be replaced by the component specified by the 'templateUrl'
  templateUrl: './app.component.html', // this template is rendered onto the specified selector element
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
}
