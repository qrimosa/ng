import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Restaurants } from '../../services/restaurants';

@Component({
  selector: 'app-admin-restaurant-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-restaurant-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AdminRestaurantList {
  private readonly restaurantService = inject(Restaurants);

  restaurants = this.restaurantService.data;

  deactivate(id: number, name: string): void {
    if (window.confirm(`Are you sure you want to deactivate ${name}?`)) {
      this.restaurantService.deactivate(id);
    }
  }
}