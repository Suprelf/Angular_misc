import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  Users = [
    { username: 'admin', password: 'admin', auth: false },
    { username: 'Oleg', password: '123', auth: false }
  ]

  getUsers() {
    return this.Users;
  }
}
