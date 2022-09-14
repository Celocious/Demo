import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewdir]'
})
export class NewdirDirective {

  constructor(element: ElementRef) { 

  element.nativeElement.style.backgroundColor = `red`;

  }
  
}
