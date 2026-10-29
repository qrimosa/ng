import { Injectable, signal } from '@angular/core';
import { UserAccount, CustomerAccount, AdminAccount } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly currentUser = signal<UserAccount | null>(null);
  private users: UserAccount[] = [];

  constructor() {
    this.loadUsers();
    this.loadSession();
  }

  private loadUsers(): void {
    const stored = localStorage.getItem('app_users');
    if (stored) {
      this.users = JSON.parse(stored);
    } else {
      const defaultAdmin: AdminAccount = {
        id: '1',
        name: 'Super Admin',
        email: 'admin@admin.com',
        password: btoa('admin123'),
        role: 'admin'
      };
      this.users = [defaultAdmin];
      this.saveUsers();
    }
  }

  private loadSession(): void {
    const session = localStorage.getItem('app_session');
    if (session) {
      const userId = JSON.parse(session);
      const user = this.users.find(u => u.id === userId);
      if (user) {
        this.currentUser.set(this.stripPassword(user));
      }
    }
  }

  private saveUsers(): void {
    localStorage.setItem('app_users', JSON.stringify(this.users));
  }

  private setSession(user: UserAccount): void {
    localStorage.setItem('app_session', JSON.stringify(user.id));
    this.currentUser.set(this.stripPassword(user));
  }

  private stripPassword(user: UserAccount): UserAccount {
    const { password, ...safeUser } = user;
    return safeUser as UserAccount;
  }

  login(email: string, pass: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === btoa(pass));
    if (user) {
      this.setSession(user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('app_session');
    this.currentUser.set(null);
  }

  registerCustomer(data: Omit<CustomerAccount, 'id' | 'role'>): boolean {
    if (this.users.some(u => u.email === data.email)) return false;
    const newUser: CustomerAccount = {
      ...data,
      id: Date.now().toString(),
      password: btoa(data.password!),
      role: 'customer'
    };
    this.users.push(newUser);
    this.saveUsers();
    return true;
  }

  createAdmin(data: Omit<AdminAccount, 'id' | 'role'>): boolean {
    if (this.users.some(u => u.email === data.email)) return false;
    const newAdmin: AdminAccount = {
      ...data,
      id: Date.now().toString(),
      password: btoa(data.password!),
      role: 'admin'
    };
    this.users.push(newAdmin);
    this.saveUsers();
    return true;
  }

  updateProfile(id: string, data: Partial<UserAccount>): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    if (data.email && this.users.some(u => u.email === data.email && u.id !== id)) return false;
    
    if (data.password) {
      data.password = btoa(data.password);
    }
    
    this.users[index] = { ...this.users[index], ...data } as UserAccount;
    this.saveUsers();
    
    if (this.currentUser()?.id === id) {
      this.currentUser.set(this.stripPassword(this.users[index]));
    }
    return true;
  }

  getAllUsers(): UserAccount[] {
    return this.users.map(u => this.stripPassword(u));
  }

  deleteUser(id: string): void {
    this.users = this.users.filter(u => u.id !== id);
    this.saveUsers();
  }

  resetPassword(id: string): void {
    const user = this.users.find(u => u.id === id);
    if (user) {
      user.password = btoa('newpass123');
      this.saveUsers();
    }
  }
}