import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  admin = {
    username: 'admin',
    password: 'root',
  };

  isAuthenticated = false;

  login() {
    this.router.navigateByUrl('/');
    this.isAuthenticated = true;
  }

  logout() {
    this.router.navigateByUrl('/login');
    this.isAuthenticated = false;
  }
}
