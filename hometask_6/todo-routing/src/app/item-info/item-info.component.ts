import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TodoListService } from '../todo-list.service';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../app.component';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['../app.component.css']})
export class ItemInfoComponent implements OnInit {
  public username: string = '';
  private users!: { username: string; password: string; auth: boolean }[];
  public currentDate = Date.now();
  public TaskList: Task[];

  public nameDetails: string = '';
  public createdDetails: number = 0;
  public infoDetails: string = '';
  public todoId: number = 0;

  constructor(
    private location: Location, 
    private UserList: UsersService,
    private TodoService: TodoListService,
    private route: ActivatedRoute) { 
      this.TaskList = this.TodoService.getTasks();
     }

  

  ngOnInit(): void {
    this.todoId = this.route.snapshot.params['id'];

    this.users = this.UserList.getUsers();
    this.users.map((user) => {
      console.log(user)
      if (user.auth == true) {
        this.username = user.username
      }
    });

    this.TaskList.map((task)=>{
      if (task.id == this.todoId){
        this.nameDetails = task.name;
        this.createdDetails = task.creationDate;
        this.infoDetails = task.info;
      }
    });


    
    
  }

  clickBack() {
    this.location.back();
  }
}
