import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyMainComponent } from './currency-main/currency-main.component';

import { StoreModule } from '@ngrx/store';
import { convertReducer } from './currency-main/convert.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyMainComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: convertReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
