import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-form',
	imports: [FormsModule],//Import du module contenant NgModel
	templateUrl: './form.component.html',
	styleUrl: './form.component.css'
})
export class FormComponent {
	constructor(public userService: UserService) {
	}
}
