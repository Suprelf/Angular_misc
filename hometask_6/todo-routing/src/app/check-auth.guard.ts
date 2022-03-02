import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthGuard implements CanActivate {
  constructor( private userService: UsersService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var Authorised = false;
      var userCount = 0;
      const users = this.userService.getUsers();
      users.map((user)=>{
        if (user.auth == true){
          Authorised = true;
        } 
        if (user.auth == false){
          userCount+=1;
        } 
        if (userCount == users.length){
          this.router.navigate(['/not-auth']);
        } 
        
      })

      return Authorised;
  }
  
}
