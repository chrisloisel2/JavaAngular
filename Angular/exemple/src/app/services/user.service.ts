import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor() { }


	// Modifier par le composant form
	filterName: string = '';


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


	amis: any = []


	// Fonction
	addFriend(user: any) {
		// Ajout de l'utilisateur à la liste
		this.amis.push(user);

		console.log('Voici le user passé par mon evenement Add', user);
	}

	// Fonction fléchée
	// (arguments) => { instructions }

	// Si ma fonction fléchée a Un seul paramètre, je opeux retirer les parenthèses
	// Si ma fonction fléchée a Un seul return, je peux retirer les accolades
	// x => x / 2

	// this.users = [1, 2, 3, 4, 5]
	//

	get filteredUsers() {
		// filtre les utilisateurs en fonction de la valeur de filterName
		return this.users.filter((user: any) => {
			return user.nom.toLowerCase().includes(this.filterName.toLowerCase()) || user.prenom.toLowerCase().includes(this.filterName.toLowerCase())
		}
		)
	}


	// filteredUser(user: any) {
	// 	return user.nom.toLowerCase().includes(this.filterName.toLowerCase())
	// }


	// get filteredUsers() {
	// 	return this.users.filter(this.filteredUser);
	// }

}
