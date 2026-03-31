import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list';
import { ModifyCarItem } from './modify-car-item/modify-car-item';
import { PageNotFound } from './page-not-found/page-not-found'; 

export const routes: Routes = [
  { path: 'home', component: CarListComponent },
  { path: 'modify', component: ModifyCarItem },
  { path:  'modify/:id', component: ModifyCarItem },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFound } 
];