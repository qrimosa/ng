import { Component, signal, computed } from '@angular/core';
import { RestCard } from '../rest-card/rest-card';
import data from '../../../data/restaurants.json';
import { CuisineType, Restaurant } from '../models/restaraunt.models';

@Component({
  selector: 'app-rest-list',
  standalone: true,
  imports: [RestCard],
  templateUrl: './rest-list.html',
  styleUrl: './rest-list.scss',
})
export class RestList {
  // 1. Your original data
  restaurants = signal<Restaurant[]>(data as Restaurant[]);

  // 2. State signals for the search bar and filter dropdown
  searchTerm = signal('');
  statusFilter = signal('all');

  private searchTimeout: any;

  // 3. Computed signal: automatically runs whenever searchTerm, statusFilter, or restaurants change
  filteredRestaurants = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const status = this.statusFilter();

    return this.restaurants().filter(restaurant => {
      // Check if name or cuisine matches the search term
      const matchesSearch = restaurant.name.toLowerCase().includes(term) || 
                            restaurant.cuisine.toLowerCase().includes(term);
      
      // Check if the isActive status matches the dropdown
      let matchesStatus = true;
      if (status === 'open') {
        matchesStatus = restaurant.isActive === true;
      } else if (status === 'closed') {
        matchesStatus = restaurant.isActive === false;
      }

      return matchesSearch && matchesStatus;
    });
  });

  // 4. Methods to update the signals when the user types or clicks
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;

    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.searchTerm.set(input.value);}, 300);
  }

  onFilterChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.statusFilter.set(select.value);
  }
}