import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // REQUIRED for [routerLink]
import { CarService } from '../car';
import { Content } from '../models/content';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here!
  templateUrl: './car-list.html',
})
export class CarListComponent implements OnInit {
  // 1. Define the cars property
  cars: Content[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getContent().subscribe(data => {
      this.cars = data;
    });
  }

  // 2. Define the onDelete method
  onDelete(id: number): void {
    if(confirm("Delete this vehicle?")) {
      this.carService.deleteContent(id).subscribe(updatedList => {
        this.cars = updatedList;
        console.log('Vehicle removed from collection.');
    
      });
    }
  }
}