import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { CustomerAccount } from '../models/user.models';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html'
})
export class Profile implements OnInit {
  private fb = inject(FormBuilder);
  public auth = inject(AuthService);

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    password: [''],
    deliveryAddress: this.fb.group({
      street: [''],
      buildingNumber: [''],
      apartmentNumber: [''],
      postalCode: [''],
      city: ['']
    })
  });

  successMsg = '';
  errorMsg = '';
  isCustomer = false;

  ngOnInit() {
    const user = this.auth.currentUser();
    if (user) {
      this.isCustomer = user.role === 'customer';
      this.profileForm.patchValue(user);
    }
  }

  onSubmit() {
    if (this.profileForm.invalid) return;
    const formValue = { ...this.profileForm.value };
    if (!formValue.password) delete formValue.password;
    
    const user = this.auth.currentUser();
    if (user && this.auth.updateProfile(user.id, formValue as any)) {
      this.successMsg = 'Profile updated successfully';
      this.errorMsg = '';
    } else {
      this.errorMsg = 'Failed to update. Email might be in use.';
      this.successMsg = '';
    }
  }
}