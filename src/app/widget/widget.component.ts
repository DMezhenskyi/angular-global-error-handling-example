import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Task } from '../task.model';
import { WidgetDataService } from './widget-data.service';
import { WidgetErrorComponent } from './widget-error/widget-error.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDividerModule, MatButtonModule, WidgetErrorComponent],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  tasks$!: Observable<Task[]>;
  error: Error | null = null;

  constructor(private widgetData: WidgetDataService) { }

  ngOnInit(): void {
    this.tasks$ = this.widgetData.load().pipe(
      map(data => {
        console.log('Data transformation...')
        return data.map(data => data);
      }),
      tap({
        error: (error) => {
          this.error = error;
          console.log(`Update component's 'error' property showing the error banner`);
        }
      }),
      catchError(err => {
        console.log(`Replacing the failed observable with an empty array`);
        return of([]);
      }),
    );
  }

  addTask() {
    // unreliable method
    try {
      this.widgetData.addTaskSync({ id: 0, title: 'New Task' });
    } catch (error) {
      if (error instanceof Error) {
        this.error = error;
        throw error;
      }
    }
  }
}
