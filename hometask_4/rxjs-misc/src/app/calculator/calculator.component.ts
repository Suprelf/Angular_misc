import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements AfterViewInit {
  constructor() { }

  final_res = 0;
  amount = 0;
  rate = 0;
  length = 0;
  down = 0;
  message ='';

  @ViewChild('amount_inp') amount_inp !: ElementRef;
  @ViewChild('rate_inp') rate_inp !: ElementRef;
  @ViewChild('length_inp') length_inp !: ElementRef;
  @ViewChild('down_inp') down_inp !: ElementRef;
  ngAfterViewInit(): void { 

    

    fromEvent(this.amount_inp.nativeElement, 'keyup').subscribe(() => {
      this.amount = this.amount_inp.nativeElement.value;
      this.CountMort();
    });
    fromEvent(this.rate_inp.nativeElement, 'keyup').subscribe(() => {
      this.rate = this.rate_inp.nativeElement.value;
      this.CountMort();
    });
    fromEvent(this.length_inp.nativeElement, 'keyup').subscribe(() => {
      this.length = this.length_inp.nativeElement.value;
      this.CountMort();
    });
    fromEvent(this.down_inp.nativeElement, 'keyup').subscribe(() => {
      this.down = this.down_inp.nativeElement.value;
      this.CountMort();
    });


   }


  public CountMort() {
    if (
      this.rate < 0 || 
      this.amount < 0 || 
      this.down < 0 || 
      this.length < 0 || 
      this.rate > 100 ||
      (this.amount-this.down) < 0
      ) 
      {
        this.final_res = 0;
        this.message = " Input correct values!";
      }
    
    else {
      this.final_res = (this.amount-this.down) * 
      Math.floor( this.rate * ((Math.pow((1 + this.rate), this.length)) / (Math.pow((1 + this.rate), this.length) - 1 )))
      
      
      
      

      
      this.message = "";
    }


    
    
  }

}
