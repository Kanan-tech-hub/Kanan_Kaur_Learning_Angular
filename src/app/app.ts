import { Component, OnInit } from '@angular/core';
import { Content } from './models/content';
import { CarService } from './car'; // Adjust path if needed
import { CarListComponent } from './car-list/car-list';
import { CarListItemComponent } from './car-list-item/car-list-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CarListComponent, CarListItemComponent],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  // This will hold the single car for the top of the page
  featuredCar?: Content;

  // Step 11: Inject the service
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Step 12: Retrieve car with ID 1 (or any ID from your mock-content)
    this.carService.getItem(1).subscribe(car => {
      this.featuredCar = car;
    });
  }
}