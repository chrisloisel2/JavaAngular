import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	imports: [ReactiveFormsModule, RouterLink], // Formulaire reactif ReactiveFormsModule
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {

	// Creer mes formulaires reactifs
	// Creer un formulaire en tant qu'attribut de la classe
	// formualaire FormGroup aura des champs de type FormControl

	constructor(public router: Router, public auth: AuthService) {
		// Constructeur
	}

	connexionForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});


	handleSubmit() {
		console.log(this.connexionForm.value);
		this.auth.login();
		this.router.navigate(['home']);
	}
}
