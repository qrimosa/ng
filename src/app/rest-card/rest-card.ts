import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-rest-card',
  imports: [],
  templateUrl: './rest-card.html',
  styleUrl: './rest-card.scss',
})
export class RestCard {
  restaraunts = signal([
  {
    name: 'Bottiglieria 1881',
    description: 'Eskluzywna restauracja wyróżniona dwiema gwiazdkami Michelin, oferująca autorskie menu degustacyjne oparte na lokalnych, sezonowych składnikach z Małopolski.',
    cuisine: 'Kuchnia polska / Modern European',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxjqUx3RcikmUgVW_vkNY211z0PceFm6SLfFGw9glpw&s=10',
    rating: '4.9', 
    deliveryTime: "-",
    deliveryFee: '-',
    openStatus: true
  },
  {
    name: 'Nami Beef and Reef',
    description: 'Eskluzywna restauracja wyróżniona dwiema gwiazdkami Michelin, oferująca autorskie menu degustacyjne oparte na lokalnych, sezonowych składnikach z Małopolski.',
    cuisine: 'Kuchnia polska / Modern European',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxjqUx3RcikmUgVW_vkNY211z0PceFm6SLfFGw9glpw&s=10',
    rating: '4.7', 
    deliveryTime: '40-60min',
    deliveryFee: '8,99',
    openStatus: true
  },
  {
    name: 'McDonalds Szewska',
    description: 'Eskluzywna restauracja wyróżniona dwiema gwiazdkami Michelin, oferująca autorskie menu degustacyjne oparte na lokalnych, sezonowych składnikach z Małopolski.',
    cuisine: 'Kuchnia polska / Modern European',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxjqUx3RcikmUgVW_vkNY211z0PceFm6SLfFGw9glpw&s=10',
    rating: '4.2', 
    deliveryTime: '20-30min',
    deliveryFee: '4,99',
    openStatus: false
  },
  {
    name: 'Sioux',
    description: 'Eskluzywna restauracja wyróżniona dwiema gwiazdkami Michelin, oferująca autorskie menu degustacyjne oparte na lokalnych, sezonowych składnikach z Małopolski.',
    cuisine: 'Kuchnia polska / Modern European',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxjqUx3RcikmUgVW_vkNY211z0PceFm6SLfFGw9glpw&s=10',
    rating: '4.7', 
    deliveryTime: '40-60min',
    deliveryFee: '10.99',
    openStatus: true
  },
])
}
