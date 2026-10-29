import { Component, input, signal, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Restaurant } from '../models/restaraunt.models';
import { Restaurants } from '../services/restaurants';

@Component({
  selector: '[app-rest-card]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rest-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './rest-card.scss',
})
export class RestCard implements OnInit {
  private readonly restaurantService = inject(Restaurants);

  restaurant = input.required<Restaurant>();
  updatedDescription = signal('');

  ngOnInit(): void {
    this.updatedDescription.set(this.restaurant().description);
  }

  canUpdate = signal(true);

  onDescriptionChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.updatedDescription.set(input.value);
  }

  updateRestaurantData(): void {
    // FIX: Use the new generic update() method from the Local Storage service
    this.restaurantService.update(this.restaurant().id, {
      description: this.updatedDescription()
    });
  }
}