import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, WidgetComponent]
})
export class AppComponent {
}
