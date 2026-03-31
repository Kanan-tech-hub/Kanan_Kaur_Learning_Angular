import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../models/content'; 
import { CarListItemComponent } from '../car-list-item/car-list-item';

@Component({
  selector: 'app-car-list',
  imports: [CommonModule],
  templateUrl: './car-list.html',
  styleUrls: ['./car-list.css']
  imports: [CommonModule, CarListItemComponent],
})
export class CarListComponent {
  carList: Content[]; 

  constructor() {
    this.carList = [
      { id: 0, title: 'Tesla Model S', description: 'Electric luxury sedan.', creator: 'Tesla', type: 'Electric' },
      { id: 1, title: 'Ford Mustang', description: 'Classic American muscle.', creator: 'Ford', type: 'Muscle' },
      { id: 2, title: 'Porsche 911', description: 'Precision German sports car.', creator: 'Porsche', type: 'Sports' },
      { id: 3, title: 'Honda Civic', description: 'Reliable daily driver.', creator: 'Honda', type: 'Sedan' },
      { id: 4, title: 'Jeep Wrangler', description: 'Off-road legend.', creator: 'Jeep', type: 'SUV' },
      { id: 5, title: 'Lamborghini Aventador', description: 'Italian supercar.', creator: 'Lamborghini', type: 'Exotic' }
    ];
  }
}