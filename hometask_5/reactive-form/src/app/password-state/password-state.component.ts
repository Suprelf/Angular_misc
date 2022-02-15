import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-state',
  templateUrl: './password-state.component.html',
  styleUrls: ['./password-state.component.css'],
  providers: [ 
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordStateComponent,
      multi: true
    },
  ],
})
export class PasswordStateComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
