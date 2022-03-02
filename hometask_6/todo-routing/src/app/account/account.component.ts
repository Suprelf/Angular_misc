import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TodoListService } from '../todo-list.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../app.component.css']})
export class AccountComponent implements OnInit {
  public username: string = '';
  private users!: { username: string; password: string; auth: boolean }[];

  constructor(
    private location: Location,
    public TodoService: TodoListService,
    private UserList: UsersService,

  ) { }

  ngOnInit(): void {
    this.users = this.UserList.getUsers();
    this.users.map((user) => {
      console.log(user)
      if (user.auth == true) {
        this.username = user.username;
      }
    });
    
  }

  clickBack() {
    this.location.back()
  }

}
