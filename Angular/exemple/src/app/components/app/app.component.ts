import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { FormComponent } from '../form/form.component';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';

// Décorateur @Component
// Permet de définir les métadonnées du composant
@Component({
	// Selector: Nom de la balise HTML
	selector: 'app-root',
	imports: [UserComponent, CommonModule, FormComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	constructor(public userService: UserService, public http: HttpClient) {
	}


	apiCall() {
		let obs = this.http.get("https://api.chucknorris.io/jokes/random")

		obs.subscribe(
			(response: any) => {
				console.log(response.value);
			}
		);

	}
}
