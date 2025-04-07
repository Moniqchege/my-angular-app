import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  Welcome to Angular, {{ city }}, {{ 1 + 1}}
  `,
  styles: `
  :host {
  color: #a144eb;
  }
  `
  
})
export class AppComponent {
  title = 'my-angular-app';
  city = 'Nairobi';
}
