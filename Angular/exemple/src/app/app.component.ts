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
	// Dictionary
	// user.nom
	currentuser: any = [{
		nom: 'Loisel',
		prenom: 'Christopher',
		pp: 'https://media.licdn.com/dms/image/v2/D4D03AQHGrcYsIRi__w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698420713920?e=1738800000&v=beta&t=v5VJjtiA5EHNO7RwtAk2LqlDCY2zyGktKp0d2Aa4OH0'
	},
	{
		nom: "Doe",
		prenom: "John",
		pp: "https://thispersondoesnotexist.com/",
	},
	{
		nom: "Travolta",
		prenom: "John",
		pp: "https://thispersondoesnotexist.com/",
	},
	];
}
