import { Injectable } from '@angular/core';
import { Task } from './app.component'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  constructor() {
    this.countComplete();
   }

  public completed = 0;
  public uncompleted = 0;

  public Data: Task[] = [
     
    { id: 0, name: "buy milk", info: '', creationDate: 0, checked: true},
    { id: 1, name: "buy bread", info: '', creationDate: 0,  checked: true},
    { id: 2, name: "buy milk1", info: '', creationDate: 0, checked: true},
    { id: 3, name: "buy bread2", info: '', creationDate: 0,  checked: true},
    { id: 4, name: "buy milk", info: '', creationDate: 0, checked: false},
    { id: 5, name: "buy bread", info: '', creationDate: 0,  checked: false},

  ]

  public getTasks(){
    return this.Data
  }

  public addTask(inputElementValue: string){
    if (this.Data.length == 0) {
      this.Data.push({
        id: 0,
        name: inputElementValue,
        info: '', 
        creationDate: Date.now(),
        checked: false,
      });
    }
    else {
      this.Data.push({
        id: Math.max.apply(Math, this.Data.map(function(o) {return o.id}))+1,
        name: inputElementValue,
        info: '', 
        creationDate: Date.now(),
        checked: false,
      });
    }
  }

  public ToogleTask(idCurr: any) {
    console.log('id ', idCurr);
    this.Data.map((task)=>{
      if (task.id == idCurr) {
        task.checked = !task.checked
      }
    });
    console.log(this.Data)

  }
  
  public countComplete(){
     this.completed = 0;
     this.uncompleted = 0;
    this.Data.forEach((element) => {
      if (element.checked == true) {this.completed += 1}
      else this.uncompleted += 1
    });
  }
}
