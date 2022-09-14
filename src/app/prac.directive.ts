import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appPrac]'
})
export class PracDirective {

  constructor(element:  ElementRef) {
    element.nativeElement.style.backgroundColor = "green";
   }

}
