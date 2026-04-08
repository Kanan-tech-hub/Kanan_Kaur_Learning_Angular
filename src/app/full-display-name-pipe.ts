import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'fullDisplayName', 
  standalone: true
})
export class FullDisplayNamePipe implements PipeTransform {
  transform(car: Content): string {
    if (!car) return '';
    // This combines the Brand and the Title
    return `${car.creator.toUpperCase()} - ${car.title}`;
  }
}