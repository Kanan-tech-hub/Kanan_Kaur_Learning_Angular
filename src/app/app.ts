import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { Content } from './models/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './app.html'
})
export class AppComponent {
  
  // Real data object for your app to display
  myCar: Content = {
    id: 1,
    title: 'Dodge Challenger',
    description: 'A powerful modern muscle car with a classic look.',
    creator: 'Dodge',
    type: 'Muscle Car',
    imageUrl: 'https://www.motortrend.com/uploads/2024/01/1-2024-Tesla-Model-S-front-view.jpg',
    price: 45000,
    releaseDate: new Date()
  };
}