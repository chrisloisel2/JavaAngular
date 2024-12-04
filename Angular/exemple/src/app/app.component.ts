import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

// Décorateur @Component
// Permet de définir les métadonnées du composant
@Component({
	// Selector: Nom de la balise HTML
	selector: 'app-root',
	imports: [RouterOutlet, UserComponent, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	constructor(public userService: UserService) {
	}
}
