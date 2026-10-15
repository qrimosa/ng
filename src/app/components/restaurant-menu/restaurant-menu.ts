import { Component, inject, input, numberAttribute, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Menus } from '../../services/menu'; 

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './restaurant-menu.html',
  styleUrl: './restaurant-menu.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class RestaurantMenu {
  private readonly menuService = inject(Menus);

  id = input.required({ transform: numberAttribute });

  menuItems = this.menuService.data;
}