import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { CarService } from '../car'; // Import service
import { CommonModule } from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarListItemComponent],
  templateUrl: './car-list.html'
})
export class CarListComponent implements OnInit {
  carList: Content[] = [];

  // Step 7: Dependency Injection
  constructor(private carService: CarService) {}

  // Step 8: Use service to retrieve array
  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this.carList = cars;
    });
  }
}