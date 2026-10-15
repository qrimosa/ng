import { Routes } from '@angular/router';
import { RestaurantDetails } from './components/restaurant-details/restaurant-details';
import { RestList } from './rest-list/rest-list';

export const routes: Routes = [
    {
        path: 'restaurants',
        component: RestList,
    },
    {
        path: 'restaurant/:id',
        component: RestaurantDetails,
    }
];
