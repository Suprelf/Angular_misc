import { Component} from '@angular/core';

@Component({
  selector: 'app-app-card',
  template: `
      <p>
        <ng-content select=[head_content]>  </ng-content>
        <ng-content #bodycontent select=[body_content]> </ng-content>
      </p>
  `   
})

export class AppCardComponent {}
