import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {

	const authService = inject(AuthService);

	if (authService.currentUser) {
		return true;
	}
	const router = inject(Router);
	router.navigate(['login']);
	return false;
};
