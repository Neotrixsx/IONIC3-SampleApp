
import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[background-image]' // Attribute selector
})
export class BackgroundImageDirective {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    console.log('Hello BackgroundImageDirective Directive');
      this.el = el.nativeElement;
  }

  @Input('background-image') backgroundImage: string;

  ngAfterViewInit() {
      this.el.style.backgroundImage = 'url(' + this.backgroundImage + ')';
  }

}
