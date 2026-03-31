import { Component } from '@angular/core';
import { Content } from './models/content';
import { CarListComponent } from "./car-list/car-list"; // Importing our rules

@Component({
  selector: 'app-root',
  templateUrl: './app.html', // This points to your HTML file
  styleUrls: ['./app.css']    // This points to your CSS file
  ,
  imports: [CarListComponent]
})
export class AppComponent {
  // We create a single car object here
  myCar: Content = {
    id: 1,
    title: 'Dodge Challenger',
    description: 'A powerful modern muscle car with a classic look.',
    creator: 'Dodge',
    type: 'Muscle Car',
    imgURL: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9'
  };
}