import { Component, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { RestCard } from '../rest-card/rest-card';
import { Restaurants } from '../services/restaurants';

@Component({
  selector: 'app-rest-list',
  standalone: true,
  imports: [RestCard],
  templateUrl: './rest-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './rest-list.scss',
})
export class RestList {
  // Inject the service decorated with @Service()
  private readonly restaurantService = inject(Restaurants);

  // State signals for search and status filter
  searchTerm = signal('');
  statusFilter = signal<'all' | 'open' | 'closed'>('all');

  // Automatically recalculates when service data, search term, or status changes
  filteredRestaurants = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const status = this.statusFilter();
    const list = this.restaurantService.data();

    return list.filter((restaurant) => {
      const matchesSearch =
        !term ||
        restaurant.name.toLowerCase().includes(term) ||
        restaurant.cuisine.toLowerCase().includes(term);

      const matchesStatus =
        status === 'all' ||
        (status === 'open' && restaurant.isActive) ||
        (status === 'closed' && !restaurant.isActive);

      return matchesSearch && matchesStatus;
    });
  });

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  onFilterChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.statusFilter.set(select.value as 'all' | 'open' | 'closed');
  }
}