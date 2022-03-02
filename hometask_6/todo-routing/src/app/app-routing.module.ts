import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CheckAuthGuard } from './check-auth.guard';
import { HomeComponent } from './home/home.component';
import { ItemInfoEditComponent } from './item-info-edit/item-info-edit.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ListComponent } from './list/list.component';
import { LoginFalseComponent } from './login-false/login-false.component';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login',                                             component: LoginComponent },
  { path: 'home',               canActivate: [CheckAuthGuard], component: HomeComponent },
  { path: 'account',            canActivate: [CheckAuthGuard], component: AccountComponent },
  { path: 'create-new-todo',    canActivate: [CheckAuthGuard], component: NewComponent },
  { path: 'todo-list',          canActivate: [CheckAuthGuard], component: ListComponent},
  { path: 'todo-list/:id',      canActivate: [CheckAuthGuard], component: ItemInfoComponent}, 
  { path: 'todo-list/:id/edit', canActivate: [CheckAuthGuard], component: ItemInfoEditComponent },
  { path: 'not-auth',                                          component: LoginFalseComponent },  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
