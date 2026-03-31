import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input() focusColor = 'lightyellow';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.backgroundColor = this.focusColor;
    this.el.nativeElement.style.border = '2px solid #3498db';
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.style.border = null;
  }
}