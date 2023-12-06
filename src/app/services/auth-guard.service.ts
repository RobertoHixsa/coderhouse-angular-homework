import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AUTH_GUARD: CanActivateFn = (route, state) => {
  const isAuthenticated = inject(AuthService).isAuthenticated;
  // if (isAuthenticated) {
  return true;
  // }
  // inject(Router).navigateByUrl('/login');
  // return false;
};
