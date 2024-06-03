
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task1Component } from './task1/task1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Task1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RxJxProject';
}
