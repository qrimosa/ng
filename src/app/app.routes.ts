import { Routes } from '@angular/router';
import { RestaurantDetails } from './components/restaurant-details/restaurant-details';
import { RestList } from './rest-list/rest-list';
import { RestaurantMenu } from './components/restaurant-menu/restaurant-menu';
import { RestaurantMenuProduct } from './components/restaurant-menu-product/restaurant-menu-product';
import { AdminRestaurantList } from './components/admin-restaurant-list/admin-restaurant-list';
import { AdminRestaurantForm } from './components/admin-restaurant-form/admin-restaurant-form';

export const routes: Routes = [
    {
        path: 'restaurants',
        component: RestList,
    },
    {
        path: 'restaurant/:id',
        component: RestaurantDetails,
    },
    {
        path: 'restaurant/:id/menu',
        component: RestaurantMenu,
    },
    {
        path: 'restaurant/:id/menu/product/:productId',
        component: RestaurantMenuProduct,
    },
    {
        path: 'admin/restaurants',
        component: AdminRestaurantList,
    },
    {
        path: 'admin/restaurants/new',
        component: AdminRestaurantForm,
    },
    {
        path: 'admin/restaurants/:id/edit',
        component: AdminRestaurantForm,
    }
];