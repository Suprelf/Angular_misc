import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']})
export class HomeComponent implements OnInit {
  public username: string = '';
  private users!: { username: string; password: string; auth: boolean }[];
  public loginFailure = false;
  
  constructor(
    private UserList: UsersService,
  ) {  }

  ngOnInit(): void {
    this.users = this.UserList.getUsers();
    this.users.map((user) => {
      console.log(user)
      if (user.auth == true) {
        this.username = user.username
      }
    });
    

  }

}
