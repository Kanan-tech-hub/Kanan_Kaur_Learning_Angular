import { ElementRef } from '@angular/core';
import { ShowDetailsDirective } from './show-details';

describe('ShowDetailsDirective', () => {
  it('should create an instance', () => {
    
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ShowDetailsDirective(mockElementRef);
    
    expect(directive).toBeTruthy();
  });
});