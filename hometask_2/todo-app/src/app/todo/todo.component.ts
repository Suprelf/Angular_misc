import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  panel1OpenState = false;
  panel2OpenState = false;
  inputState = false;
  firstInputState = true;
  
  TaskList: Task[];
 
  constructor(private taskService: TasksService ) {
    this.TaskList = this.taskService.getTasks();
  }
  
  
  currDate = Date.now();

  public countComplete(){
    let completed = 0;
    let uncompleted = 0;
    this.TaskList.forEach((element) => {
      if (element.checked == true) {completed += 1}
      else uncompleted += 1
    });

    return {completed, uncompleted}
  };
  
  public setInputState(newInputState: boolean) {
    this.inputState = newInputState;
    if (this.TaskList.length == 0 ) {
      this.firstInputState = true;
    }
  };
  
  public addTask() {
    this.taskService.setTasks();
  };

  public toogleBox(elemId: number) {
    this.TaskList.forEach((element) => {
      if (element.id == elemId) {element.checked = !element.checked}
    });
  }

  ngOnInit(): void {  }
}

export interface Task {
  id: number,
  name: string,
  checked: boolean
}
