import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCrossedText]'
})
export class CrossedTextDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textDecoration = "line-through";
 }

}
