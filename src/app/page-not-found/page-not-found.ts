import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Add this import

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink], // 2. Add it here
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound { }