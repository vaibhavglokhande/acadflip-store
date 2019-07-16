
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEvenOdd]'
})
export class EvenOddDirective {

  @Input('appEvenOdd') number: number;

  constructor(private element: ElementRef) { 
    
  }

  ngOnInit(): void {
    if(this.number%2==0){
      this.element.nativeElement.innerHTML = this.number + ' is even.';
    }else{
      this.element.nativeElement.innerHTML = this.number + ' is odd.';
    }
  }

}
