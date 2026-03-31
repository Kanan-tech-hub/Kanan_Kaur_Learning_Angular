import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { CarService } from '../car';
import { Content } from '../models/content';
import { FullDisplayNamePipe } from '../full-display-name-pipe'; 

@Component({
  selector: 'app-car-list',
  standalone: true,
  // Make sure to add your Custom Pipe to this imports array!
  imports: [CommonModule, RouterModule, FullDisplayNamePipe], 
  templateUrl: './car-list.html',
})
export class CarListComponent implements OnInit {
  cars: Content[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Requirement #6: Log specific message for the custom pipe version
    console.log("Custom Pipe Initialized- Version 2.0.");

    this.carService.getContent().subscribe(data => {
      this.cars = data;
    });
  }

  onDelete(id: number): void {
    if(confirm("Are you sure you want to delete this vehicle?")) {
      this.carService.deleteContent(id).subscribe(updatedList => {
        this.cars = updatedList;
        console.log('Vehicle removed from collection.');
      });
    }
  }
}