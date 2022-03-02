import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { Task } from '../app.component'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../app.component.css']})
export class ListComponent implements OnInit {
  public TaskList: Task[];

  public username: string = '';
  private users!: { username: string; password: string; auth: boolean }[];
 
  public currentDate = Date.now();
  public todoName: string = '';
  public inputState = false;

  constructor(public TodoService: TodoListService, private UserList: UsersService) { 
    this.TaskList = this.TodoService.getTasks();
  }

  ngOnInit(): void {
    this.countComplete();
    
    this.users = this.UserList.getUsers();
    this.users.map((user) => {
      console.log(user)
      if (user.auth == true) {
        this.username = user.username
      }
    });

  }

  setInputState(state: boolean) {
    this.inputState = state;
  }
  addNew() {
    console.log(this.todoName)
    this.TodoService.addTask(this.todoName)
    console.log(this.TodoService.getTasks())
  }
  btnCancel() {
    this.todoName = ''
  }
  countComplete(){
    var buffer = this.TodoService.countComplete();
    console.log(buffer);
  }
  
}
