import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { InventoryComponent } from './pages/inventory/inventory';
import { CustomerComponent } from './pages/customer/customer';
import { BillComponent } from './pages/bill/bill';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'bill', component: BillComponent },
];