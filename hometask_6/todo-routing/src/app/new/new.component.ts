import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['../app.component.css']
})
export class NewComponent implements OnInit {
  public username: string = '';
  private users!: { username: string; password: string; auth: boolean }[];
  
  constructor(private TodoService: TodoListService, private UserList: UsersService) { }

  public currentDate = Date.now();
  public todoName: string = '';

  ngOnInit(): void {
    console.log(this.currentDate);

    this.users = this.UserList.getUsers();
    this.users.map((user) => {
      console.log(user)
      if (user.auth == true) {
        this.username = user.username
      }
    });
  }
  
  addNew() {
    console.log(this.todoName)
    this.TodoService.addTask(this.todoName)
    console.log(this.TodoService.getTasks())
  }
  btnCancel() {
    this.todoName = ''
  }

}
