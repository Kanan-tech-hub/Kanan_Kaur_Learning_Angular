import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list'; // Eagerly loaded (Requirement #7)

export const routes: Routes = [
  
  { path: 'home', component: CarListComponent },
  
  
  { 
    path: 'modify', 
    loadComponent: () => import('./modify-car-item/modify-car-item').then(m => m.ModifyCarItem) 
  },
  
  
  { 
    path: 'modify/:id', 
    loadComponent: () => import('./modify-car-item/modify-car-item').then(m => m.ModifyCarItem) 
  },

  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  
  { path: '**', redirectTo: '/home' }
];