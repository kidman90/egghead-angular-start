import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>

<ul>
  <li *ngFor="let message of mail.messages">
    {{message}}
  </li>
</ul>
  
  </div>`
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    @Inject('mail') private mail
  ) { }
}
