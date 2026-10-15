import { Component, input, computed, inject, numberAttribute, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Restaurants } from '../../services/restaurants';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './restaurant-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './restaurant-details.scss',
})
export class RestaurantDetails {
  private readonly restaurantService = inject(Restaurants);

  // Converts the string route param to number
  id = input.required({ transform: numberAttribute });

  // Calls getbyId from the Restaurants service
  restaurant = computed(() => this.restaurantService.getbyId(this.id()));
}