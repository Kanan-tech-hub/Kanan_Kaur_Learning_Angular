import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list'; // Eagerly loaded (Requirement #7)

export const routes: Routes = [
  // 1. Eagerly loaded default route
  { path: 'home', component: CarListComponent },
  
  // 2. Lazy loaded 'Modify' route (Requirement #7)
  { 
    path: 'modify', 
    loadComponent: () => import('./modify-car-item/modify-car-item').then(m => m.ModifyCarItem) 
  },
  
  // 3. Lazy loaded 'Edit' route with ID
  { 
    path: 'modify/:id', 
    loadComponent: () => import('./modify-car-item/modify-car-item').then(m => m.ModifyCarItem) 
  },

  // Redirect to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  // Optional: Wildcard for 404
  { path: '**', redirectTo: '/home' }
];