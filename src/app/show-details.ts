import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowDetails]',
  standalone: true
})
export class ShowDetailsDirective implements OnInit {
  @Input('appShowDetails') details: string | number = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
  
    this.el.nativeElement.title = `Vehicle ID: ${this.details}`;
  }
}