import { Service, signal } from '@angular/core';
import data from '../../../data/restaurants.json';
import { Restaurant } from '../models/restaraunt.models';

@Service()
export class Restaurants {
  readonly data = signal<Restaurant[]>(data as Restaurant[]);

  getAll(): Restaurant[] {
    return this.data();
  }

  getbyId(id: number): Restaurant | undefined {
    return this.data().find((restaurant) => restaurant.id === id);
  }

  updateDescription(id: number, newDescription: string): void {
    this.data.update((restaurants) =>
      restaurants.map((item) =>
        item.id === id ? { ...item, description: newDescription } : item
      )
    );
  }
}