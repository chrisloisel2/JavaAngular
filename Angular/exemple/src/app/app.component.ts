import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';

// Décorateur @Component
// Permet de définir les métadonnées du composant
@Component({
	// Selector: Nom de la balise HTML
	selector: 'app-root',
	imports: [RouterOutlet, UserComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	// Attribut
	nom: string = 'Loisel';
	prenom: string = 'Romain';
}
