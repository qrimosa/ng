import { Component, inject, input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Restaurants } from '../../services/restaurants';

@Component({
  selector: 'app-admin-restaurant-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin-restaurant-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AdminRestaurantForm implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly restaurantService = inject(Restaurants);
  private readonly router = inject(Router);

  id = input<string>();

  restaurantForm!: FormGroup;
  isEditMode = false;

  readonly cuisineOptions = [
    'Italian', 'Chinese', 'Mexican', 'Indian', 'American', 
    'Japanese', 'Mediterranean', 'French', 'Thai', 'Spanish'
  ];

  ngOnInit(): void {
    this.isEditMode = !!this.id();

    this.restaurantForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      cuisine: ['Italian', Validators.required],
      imageUrl: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(6)]],
      deliveryTimeMin: [15, [Validators.required, Validators.min(0)]],
      deliveryTimeMax: [45, [Validators.required, Validators.min(0)]],
      deliveryFee: [0, [Validators.required, Validators.min(0)]],
      minimumOrderValue: [0, [Validators.required, Validators.min(0)]],
      address: ['', Validators.required],
      isActive: [true]
    });

    if (this.isEditMode) {
      const restId = Number(this.id());
      const existing = this.restaurantService.getbyId(restId);
      if (existing) {
        this.restaurantForm.patchValue(existing);
      } else {
        this.router.navigate(['/admin/restaurants']);
      }
    }
  }

  onSubmit(): void {
    if (this.restaurantForm.invalid) {
      this.restaurantForm.markAllAsTouched();
      return;
    }

    const formValue = this.restaurantForm.value;

    if (this.isEditMode) {
      this.restaurantService.update(Number(this.id()), formValue);
    } else {
      this.restaurantService.add(formValue);
    }

    this.router.navigate(['/admin/restaurants']);
  }
}