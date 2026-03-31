import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './models/content';
import { CARS } from './data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carList: Content[] = CARS;

  constructor() { }

  // 1. Get all items
  getContent(): Observable<Content[]> {
    return of(this.carList);
  }

  // 2. NEW: Get a single item by ID (Fixes TS2551 error)
  getContentItem(id: number): Observable<Content | undefined> {
    const item = this.carList.find(c => c.id === id);
    return of(item);
  }

  // 3. CREATE: Add a new item
  addContent(newCar: Content): Observable<Content[]> {
    this.carList.push(newCar);
    return of(this.carList);
  }

  // 4. UPDATE: Modify an existing item (Requirement #2)
  updateContent(updatedCar: Content): Observable<Content[]> {
    const index = this.carList.findIndex(c => c.id === updatedCar.id);
    if (index !== -1) {
      this.carList[index] = updatedCar;
    }
    return of(this.carList);
  }

  // 5. DELETE: Remove an item (Requirement #6)
  deleteContent(id: number): Observable<Content[]> {
    const index = this.carList.findIndex(c => c.id === id);
    if (index !== -1) {
      this.carList.splice(index, 1);
    }
    return of(this.carList);
  }
}