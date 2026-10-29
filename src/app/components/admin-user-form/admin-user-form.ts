import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin-user-form.html'
})
export class AdminUserForm {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  adminForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  error = '';

  onSubmit() {
    if (this.adminForm.invalid) return;
    if (this.auth.createAdmin(this.adminForm.value as any)) {
      this.router.navigate(['/admin/users']);
    } else {
      this.error = 'Email already in use';
    }
  }
}