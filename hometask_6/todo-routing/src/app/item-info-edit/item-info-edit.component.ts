import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../todo-list.service';
import { Task } from '../app.component';

@Component({
  selector: 'app-item-info-edit',
  templateUrl: './item-info-edit.component.html',
  styleUrls: ['../app.component.css']})
export class ItemInfoEditComponent implements OnInit {
  public username: string = '';
  private users!: { username: string; password: string; auth: boolean }[];
  public todoId: number = 0;
  public TaskList: Task[];
  public todoName: string = '';
  public todoInfo: string = '';
  public currentDate = Date.now();
  
  constructor(
    private location: Location, 
    private UserList: UsersService,
    private TodoService: TodoListService,
    private route: ActivatedRoute) { 
      this.TaskList = this.TodoService.getTasks();
    }

  ngOnInit(): void {
    this.users = this.UserList.getUsers();
    this.users.map((user) => {
      console.log(user)
      if (user.auth == true) {
        this.username = user.username
      }
    });

   

  }
  clickBack() {
    this.location.back();
  }
  editTask() {
    this.todoId = this.route.snapshot.params['id'];
    this.TaskList.map((task)=>{
      if (task.id == this.todoId){
        console.log(task);
        task.name = this.todoName;
        task.info = this.todoInfo;
        console.log(task);
  
      }
      
    })
  }
  
}
