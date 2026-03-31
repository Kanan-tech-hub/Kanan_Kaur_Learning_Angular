import { Injectable } from '@angular/core';
import { Content } from './models/content';
import { CARS } from './data/mock-content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private items: Content[] = CARS;

  constructor() { }

  // Step 6: Return the whole array as an Observable
  getCars(): Observable<Content[]> {
    return of(this.items);
  }

  // Step 9 - READ
  getItem(id: number): Observable<Content | undefined> {
    const item = this.items.find(i => i.id === id);
    return of(item);
  }

  // Step 9 - CREATE
  addItem(newItem: Content): Observable<Content[]> {
    this.items.push(newItem);
    return of(this.items);
  }

  // Step 9 - UPDATE
  updateItem(updatedItem: Content): Observable<Content[]> {
    const index = this.items.findIndex(i => i.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
    return of(this.items);
  }

  // Step 9 - DELETE
  deleteItem(id: number): Observable<Content | undefined> {
    const index = this.items.findIndex(i => i.id === id);
    let removedItem;
    if (index !== -1) {
      removedItem = this.items.splice(index, 1)[0];
    }
    return of(removedItem);
  }
}