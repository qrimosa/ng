import { Component, inject, input, numberAttribute, computed} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Menus } from '../../services/menu'; 

@Component({
  imports: [CurrencyPipe, RouterLink],
  selector: 'app-restaurant-menu-product',
  styleUrl: './restaurant-menu-product.scss',
  templateUrl: './restaurant-menu-product.html',
})
export class RestaurantMenuProduct {
  private readonly menuService = inject(Menus);

  id = input.required({ transform: numberAttribute });

  productId = input.required({ transform: numberAttribute });

  item = computed(() => this.menuService.getbyId(this.productId()));
}
