import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Content } from '../models/content';
import { CarService } from '../car';
import { FullDisplayNamePipe } from '../full-display-name-pipe';
// Import the new directives
import { HoverHighlightDirective } from '../hover-highlight';
import { ShowDetailsDirective } from '../show-details';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FullDisplayNamePipe, 
    HoverHighlightDirective, 
    ShowDetailsDirective
  ],
  templateUrl: './car-list.html'
})
export class CarListComponent implements OnInit {
  cars: Content[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getContent().subscribe(data => this.cars = data);
    console.log("Assignment 9: Directives and Pipes Active.");
  }
}