import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-error',
  standalone: true,
  template: `
    <h5>Widget Error: </h5>
    <p class="message">{{error?.message}}</p>
  `,
  styles: [`
    :host { padding: 5px 15px; box-sizing: border-box; display: block; color: red; background-color: #ffe2e2; }
    p, h5 { margin: 0 }
    p {font-size: 10px}
    h5 { margin-bottom: 3px; font-size: 12px }
  `]
})
export class WidgetErrorComponent {
  @Input()
  error: Error | null = null;
}
