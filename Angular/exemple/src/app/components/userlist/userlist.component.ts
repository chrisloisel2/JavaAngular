import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
	selector: 'app-userlist',
	imports: [UserComponent, CommonModule, FormComponent],
	templateUrl: './userlist.component.html',
	styleUrl: './userlist.component.css'
})
export class UserlistComponent {
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
