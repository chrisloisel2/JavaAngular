import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommonModule } from '@angular/common';

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
	// Attribut
	// Dictionary
	// user.nom

	amis: any = []

	users: any = [{
		age: 25,
		nom: 'Loisel',
		connected: true,
		prenom: 'Christopher',
		pp: 'https://media.licdn.com/dms/image/v2/D4D03AQHGrcYsIRi__w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698420713920?e=1738800000&v=beta&t=v5VJjtiA5EHNO7RwtAk2LqlDCY2zyGktKp0d2Aa4OH0'
	},
	{
		age: 35,
		nom: "Doe",
		connected: true,
		prenom: "John",
		pp: "https://thispersondoesnotexist.com/",
	},
	{
		age: 45,
		nom: "Travolta",
		connected: true,
		prenom: "John",
		pp: "https://thispersondoesnotexist.com/",
	},

	];


	// Fonction
	addFriend() {
		// this.amis.push(user);

		console.log('La fonction addFriend a été appellée');
	}
}
