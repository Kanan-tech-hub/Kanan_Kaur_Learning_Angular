import { Component } from '@angular/core';
import { Content } from './models/content';
import { CarListComponent } from "./car-list/car-list"; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html', 
  styleUrls: ['./app.css'],
})
export class AppComponent {
  
  myCar: Content = {
    id: 1,
    title: 'Dodge Challenger',
    description: 'A powerful modern muscle car with a classic look.',
    creator: 'Dodge',
    type: 'Muscle Car',
    imgURL: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9'
  };
}