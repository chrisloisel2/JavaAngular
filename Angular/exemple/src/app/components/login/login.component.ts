import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-login',
	imports: [ReactiveFormsModule], // Formulaire reactif ReactiveFormsModule
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {

	// Creer mes formulaires reactifs
	// Creer un formulaire en tant qu'attribut de la classe
	// formualaire FormGroup aura des champs de type FormControl

	connexionForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});


	handleSubmit() {
		console.log(this.connexionForm.value);
	}
}
