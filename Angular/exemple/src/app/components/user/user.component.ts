import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-user',
	imports: [],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css'
})
export class UserComponent {

	@Input()
	user: any;
	// Variable utilisateur, type any, attendue en entrée

}
