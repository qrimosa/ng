import { Service, signal } from '@angular/core';
import data from '../../../data/restaurants.json';
import { Restaurant } from '../models/restaraunt.models';

@Service()
export class Restaurants {
    readonly data = signal<Restaurant[]>([]);

    constructor() {
        this.loadFromStorage();
    }

    private loadFromStorage(): void {
        const stored = localStorage.getItem('app_restaurants');
        if (stored) {
            this.data.set(JSON.parse(stored));
        } else {
            this.data.set(data as Restaurant[]);
            this.saveToStorage();
        }
    }

    private saveToStorage(): void {
        localStorage.setItem('app_restaurants', JSON.stringify(this.data()));
    }

    getAll(): Restaurant[] {
        return this.data();
    }

    getbyId(id: number): Restaurant | undefined {
        return this.data().find((restaurant) => restaurant.id === id);
    }

    add(restaurant: Omit<Restaurant, 'id'>): void {
        const currentData = this.data();
        const maxId = currentData.reduce((max, r) => Math.max(max, r.id), 0);
        const newRestaurant = { ...restaurant, id: maxId + 1 } as Restaurant;
        
        this.data.set([...currentData, newRestaurant]);
        this.saveToStorage();
    }

    update(id: number, updatedData: Partial<Restaurant>): void {
        this.data.update((list) =>
            list.map((r) => (r.id === id ? { ...r, ...updatedData } : r))
        );
        this.saveToStorage();
    }

    deactivate(id: number): void {
        this.update(id, { isActive: false });
    }
}