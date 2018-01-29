import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>

  <app-simple-form></app-simple-form>

  {{mail.message}}
  <hr>
  {{api}}
  
  </div>`
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started!`;

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api
  ) { }
}
