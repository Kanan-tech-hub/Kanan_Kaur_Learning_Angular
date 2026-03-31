import { Component, Input } from '@angular/core'; // 1. Add Input here
import { CommonModule } from '@angular/common';
import { Content } from '../models/content';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list-item.html',
  styleUrls: ['./car-list-item.css']
})
export class CarListItemComponent {
  // 2. This allows the List to "pass" a car into this component
  @Input() car?: Content; 
}