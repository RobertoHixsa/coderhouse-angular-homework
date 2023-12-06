import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.local';

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
    console.log(environment.apiUrl);
    // this.router.navigateByUrl('/');
    // this.isAuthenticated = true;
  }

  logout() {
    this.router.navigateByUrl('/login');
    this.isAuthenticated = false;
  }
}
