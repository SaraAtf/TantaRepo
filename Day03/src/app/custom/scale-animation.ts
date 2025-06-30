import { Directive, ElementRef, HostListener } from '@angular/core';

// act as directives
@Directive({
  selector: '[appScaleAnimation]',
})
export class ScaleAnimation {
  constructor(private element: ElementRef) {
    console.log(this.element);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.transform = 'scale(1.1)';
    this.element.nativeElement.style.transition = 'all 0.5s ease-in-out';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.transform = 'scale(1)';
    this.element.nativeElement.style.transition = 'all 0.5s ease-in-out';
  }
}
