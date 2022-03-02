import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-routing';
}

export interface Task {
  id: number,
  name: string,
  info: string,
  creationDate: any,
  checked: boolean
}