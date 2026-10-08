import { Component, model, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Restaurant } from '../models/restaraunt.models';

@Component({
  selector: '[app-rest-card]',
  standalone: true,
  imports: [],
  templateUrl: './rest-card.html',
  styleUrl: './rest-card.scss',
})
export class RestCard {
  canUpdate = signal(true);

  restaurant = model<Restaurant>({
    id: 0,
    name: '',
    description: '',
    cuisine: '',
    imageUrl: '',
    rating: 0,
    deliveryTimeMin: 0,
    deliveryTimeMax: 0,
    deliveryFee: 0,
    minimumOrderValue: 0,
    isActive: false
  });


  private form = form(this.restaurant);

  updateRestaurantData() {
    console.log('Updating restaurant data...', this.restaurant);
  }

  onDescriptionChange(val: string) {
    console.log('Description value:', val);
  }
}