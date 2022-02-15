import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStateComponent } from './password-state/password-state.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PasswordStateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
