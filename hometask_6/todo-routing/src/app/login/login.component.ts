import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']})
export class LoginComponent implements OnInit {
  constructor(
    private UserList: UsersService,
    private router: Router
  ) { }

  public username: string = '';
  public password: string = '';
  private users!: { username: string; password: string; auth: boolean }[];
  public loginFailure = false;

  ngOnInit(): void {
    this.users = this.UserList.getUsers();
  }

  onLogin() {
    console.log(this.users)

    for (var user = 0; user < this.users.length; user++) {
      console.log(this.users[user])
      if (this.username == this.users[user].username && this.password == this.users[user].password) {
        console.log('ok');
        this.loginFailure = false;
        this.users[user].auth = true;
        console.log(this.users[user])

        this.router.navigate(['/home']);
        break;
      }
      else {
        console.log('invalid');
        this.loginFailure = true;
      }
    }


    
  }
}
