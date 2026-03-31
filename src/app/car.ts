import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './models/content'; // Ensure this folder exists!

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // We'll start with an empty array or a few defaults
  private carList: Content[] = [
    { id: 1, title: 'Tesla Model S', creator: 'Tesla', description: 'Electric luxury sedan.', type: 'Electric' }
  ];

  constructor() { }

  // Assignment 4/5 requirement
  getContent(): Observable<Content[]> {
    return of(this.carList);
  }

  // Assignment 5/6 requirement (to find a car to edit)
  getContentItem(id: number): Observable<Content | undefined> {
    return of(this.carList.find(c => c.id === id));
  }

  // Assignment 6: Add a new car
  addContent(newCar: Content): Observable<Content> {
    this.carList.push(newCar);
    return of(newCar);
  }
}