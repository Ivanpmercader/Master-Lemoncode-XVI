import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn =  (_, __) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isPersistence()) {
    authService.setLoggedUserByPersistence();
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
