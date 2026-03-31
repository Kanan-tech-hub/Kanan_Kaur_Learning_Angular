import { Component, Input, Output, EventEmitter } from '@angular/core'; // Added Input, Output, EventEmitter
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
  // Step 4/Instruction Requirement: Use @Input to receive data
  @Input() car?: Content;

  // Bonus Requirement: EventEmitter to send data back to parent
  @Output() carClicked = new EventEmitter<Content>();

  onImageClick(): void {
    if (this.car) {
      this.carClicked.emit(this.car); // "Broadcast" the car that was clicked
    }
  }
}