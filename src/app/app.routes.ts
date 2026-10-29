import { Routes } from '@angular/router';
import { RestList } from './rest-list/rest-list';
import { RestaurantDetails } from './components/restaurant-details/restaurant-details';
import { RestaurantMenu } from './components/restaurant-menu/restaurant-menu';
import { RestaurantMenuProduct } from './components/restaurant-menu-product/restaurant-menu-product';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestList },
  { path: 'restaurant/:id', component: RestaurantDetails },
  { path: 'restaurant/:id/menu', component: RestaurantMenu },
  { path: 'restaurant/:id/menu/product/:productId', component: RestaurantMenuProduct },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  { 
    path: 'admin', 
    canActivate: [authGuard, adminGuard],
    loadChildren: () => import('./admin.routes').then(m => m.adminRoutes)
  }
];