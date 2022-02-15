import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form !: FormGroup;
  constructor(private fb: FormBuilder) { }

  get hards() {
    return this.form.get('hards') as FormArray;
  }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get sex() { return this.form.get('sex'); }
  get country() { return this.form.get('country'); }
  get state() { return this.form.get('state'); }
  get password() { return this.form.get('password'); }

  public hardsValues: Array<any> = [
    {_label: 'Angular', val: 'Angular'},
    {_label: 'HTML', val: 'HTML'},
    {_label: 'CSS', val: 'CSS'}
  ];
  public passwordIndication = 0;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      sex: new FormControl(Validators.required),
      country: new FormControl('',  Validators.required),
      state: new FormControl(''),
      hards: this.fb.array([
        this.fb.group({hard: false, label: 'Angular'}),
        this.fb.group({hard: false, label: 'CSS'}),
        this.fb.group({hard: false, label: 'HTML'}),
      ], Validators.required),

      password: new FormControl('',  Validators.required),
    })

    


    this.form.get('country')?.valueChanges.subscribe(val => {
      if (val == 'USA') {
        this.form.controls['state'].setValidators([Validators.required]);
      } else {
        this.form.controls['state'].clearValidators;
      }
      this.form.controls['state'].updateValueAndValidity();
    })

    
    this.form.get('password')?.valueChanges.subscribe(val => {
      var regexEasy =/^[a-zA-Z]*$|^[0-9]*$/;
      var regexContainDigits = /(.*\d.*)/; 
      var regexContainSymbols = /(.*[A-z].*)/;
      var regexContainSpecial = /(.*\W.*)/;
      
      if (val == '') {
        this.passwordIndication = 0;
        this.form.controls['password'].setErrors({'incorrect': true});
      } 
      else if (val != '' && regexContainSpecial.test(val) && regexContainSymbols.test(val) && regexContainDigits.test(val))  {
        this.passwordIndication = 3;
        
      }
      else if ( val != '' && regexContainSymbols.test(val) && regexContainDigits.test(val)) {
        this.passwordIndication = 2;
      } 
      else if ( val != '' && regexEasy.test(val)) {
        this.passwordIndication = 1;
        this.form.controls['password'].setErrors({'incorrect': true});
      }
      
      
    })


  }
  onSubmit() {
    console.log(this.form.value)
  }

}
