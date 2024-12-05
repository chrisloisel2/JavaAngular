import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	currentUser: any = null;

	constructor() { }

	login() {
		this.currentUser = {
			name: 'John'
		};
	}

	logout() {
		this.currentUser = null;
	}
}
