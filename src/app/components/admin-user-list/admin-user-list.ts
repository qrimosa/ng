import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { UserAccount } from '../../models/user.models';

@Component({
  selector: 'app-admin-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-user-list.html'
})
export class AdminUserList implements OnInit {
  public auth = inject(AuthService);
  users: UserAccount[] = [];

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.users = this.auth.getAllUsers();
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.auth.deleteUser(id);
      this.refresh();
    }
  }

  resetPassword(id: string) {
    if (confirm('Reset password to newpass123?')) {
      this.auth.resetPassword(id);
      alert('Password reset successful.');
    }
  }
}