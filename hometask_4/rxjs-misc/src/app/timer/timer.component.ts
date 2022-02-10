import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  seconds = 0;
  minutes = 5;
  timer_tick = timer(1000, 1000);
  subscribe_sec: any;
  message = "";

  public checkMin(min: number) {
    if (min < 0) {
      this.subscribe_sec.unsubscribe();
      this.minutes = 0;
      this.seconds = 1;
      //console.log('fin');
      this.message = "Time is off!"
    }
  }
  public removeMin() {
    this.minutes = this.minutes - 1;
    this.checkMin(this.minutes);
  }
  public checkSec(sec: number) {
    if (sec <= 0) {
      this.seconds = 60;
      this.removeMin();
    }
  }

  public startTimer() {
    this.message = ""
    this.subscribe_sec = this.timer_tick.subscribe(val => {
      this.checkSec(this.seconds);
      this.seconds = this.seconds - (val-(val-1))
    });
  }
  public resetTimer(){
    this.subscribe_sec.unsubscribe();
    this.message = ""
    this.minutes = 5;
    this.seconds = 0;
  }

  

  
}
