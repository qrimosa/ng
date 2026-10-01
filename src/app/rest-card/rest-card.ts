import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-rest-card',
  imports: [],
  templateUrl: './rest-card.html',
  styleUrl: './rest-card.scss',
})
export class RestCard {
  name = signal('Makus');
}
