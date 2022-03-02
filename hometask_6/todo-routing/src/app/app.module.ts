import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LoginFalseComponent } from './login-false/login-false.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { AccountComponent } from './account/account.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ItemInfoEditComponent } from './item-info-edit/item-info-edit.component';
import { CrossedTextDirective } from './crossed-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    LoginFalseComponent,
    HomeComponent,
    NewComponent,
    ListComponent,
    AccountComponent,
    ItemInfoComponent,
    ItemInfoEditComponent,
    CrossedTextDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
