import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html'
})
export class Register {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: [''],
    deliveryAddress: this.fb.group({
      street: ['', Validators.required],
      buildingNumber: ['', Validators.required],
      apartmentNumber: [''],
      postalCode: ['', Validators.required],
      city: ['', Validators.required]
    })
  });

  error = '';

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const success = this.auth.registerCustomer(this.registerForm.value as any);
    if (success) {
      this.router.navigate(['/login']);
    } else {
      this.error = 'Email already in use';
    }
  }
}