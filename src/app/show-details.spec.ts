import { ElementRef } from '@angular/core';
import { ShowDetailsDirective } from './show-details';

describe('ShowDetailsDirective', () => {
  it('should create an instance', () => {
    // Create a "mock" element to satisfy the constructor
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ShowDetailsDirective(mockElementRef);
    
    expect(directive).toBeTruthy();
  });
});