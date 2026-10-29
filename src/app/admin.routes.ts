import { Routes } from '@angular/router';
import { AdminRestaurantList } from './components/admin-restaurant-list/admin-restaurant-list';
import { AdminRestaurantForm } from './components/admin-restaurant-form/admin-restaurant-form';
import { AdminUserList } from './components/admin-user-list/admin-user-list';
import { AdminUserForm } from './components/admin-user-form/admin-user-form';

export const adminRoutes: Routes = [
  { path: 'restaurants', component: AdminRestaurantList },
  { path: 'restaurants/new', component: AdminRestaurantForm },
  { path: 'restaurants/:id/edit', component: AdminRestaurantForm },
  { path: 'users', component: AdminUserList },
  { path: 'users/new', component: AdminUserForm }
];