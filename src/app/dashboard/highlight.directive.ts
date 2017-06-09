import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.background = '#f00';
  }

  @Input('appHighlight')
  highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.background = this.highlightColor || 'transparent';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.background = '#f00';
  }

}
