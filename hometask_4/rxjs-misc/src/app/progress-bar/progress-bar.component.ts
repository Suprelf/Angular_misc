import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewInit {
  constructor() {}

  doc: any;
  winScroll: any;
  bar_width: any;
  
  @ViewChild('bar') bar !: ElementRef;
 
  ngAfterViewInit(): void { 
    fromEvent(document, 'scroll').subscribe(()=> {
      console.log( );
      console.log(Math.round(window.pageYOffset) , window.innerHeight, window.innerWidth ); 

      
      this.bar_width = (((window.innerWidth * Math.round(window.pageYOffset)) / window.innerHeight) ).toString() + 'px';
      this.bar.nativeElement.style.width = this.bar_width;
      if (this.bar_width > window.innerHeight) {
        
      }
    })
  }

  

}
