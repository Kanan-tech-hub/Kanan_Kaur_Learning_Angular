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


  getContent(): Observable<Content[]> {
    return of(this.carList);
  }

  
  getContentItem(id: number): Observable<Content | undefined> {
    const item = this.carList.find(c => c.id === id);
    return of(item);
  }

  
  addContent(newCar: Content): Observable<Content[]> {
    this.carList.push(newCar);
    return of(this.carList);
  }

  
  updateContent(updatedCar: Content): Observable<Content[]> {
    const index = this.carList.findIndex(c => c.id === updatedCar.id);
    if (index !== -1) {
      this.carList[index] = updatedCar;
    }
    return of(this.carList);
  }

  
  deleteContent(id: number): Observable<Content[]> {
    const index = this.carList.findIndex(c => c.id === id);
    if (index !== -1) {
      this.carList.splice(index, 1);
    }
    return of(this.carList);
  }
}