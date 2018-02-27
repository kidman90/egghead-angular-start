import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core/src/facade/async';

@Component({
  selector: 'app-simple-form',
  template: `
    <input
      #myInput
      type="text"
      [(ngModel)]="message"
      [ngClass]="{ mousedown: isMousedown }"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
    >
    <button (click)="update.emit({ text: message })">Click me!</button>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }

    .mousedown {
      border: 2px solid green;
    }

    * {
      font-family: monospace;
    }

    input:focus {
      font-weight: bold;
      outline: none;
    }

    button {
      border: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
