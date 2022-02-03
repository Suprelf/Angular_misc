import { Injectable } from '@angular/core';
import { Task } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public Data: Task[] = [
    /*
    { id: 0, name: "buy milk", checked: true},
    { id: 1, name: "buy bread", checked: true},
    { id: 2, name: "go to shop", checked: true},
    { id: 3, name: "do hometask", checked: false},
    { id: 4, name: "sleep", checked: false},
    { id: 5, name: "wake", checked: false},
    { id: 6, name: "do cleaning", checked: false},
    */
  ];

  constructor() { }

  public getTasks() {
    return this.Data;
  }

  public setTasks() {
    if ((<HTMLInputElement>document.getElementById('InputName')).value != '')
    if (this.Data.length == 0) {
      this.Data.push({
        id: 0,
        name: (<HTMLInputElement>document.getElementById('InputName')).value,
        checked: false
      });
    }
    else {
      this.Data.push({
        id: Math.max.apply(Math, this.Data.map(function(o) {return o.id}))+1,
        name: (<HTMLInputElement>document.getElementById('InputName')).value,
        checked: false
      });
    }
    
  }
  


}

