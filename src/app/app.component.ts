import { Component } from '@angular/core';
import { MailService } from 'app/mail.service';

@Component({
  selector: 'app-root',
  template: `<div>

  <app-simple-form></app-simple-form>

  {{mail.message}}
  
  </div>`
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started!`;

  constructor(private mail:MailService){}
}
