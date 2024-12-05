import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-form',
	imports: [FormsModule],//Import du module contenant NgModel
	templateUrl: './form.component.html',
	styleUrl: './form.component.css'
})
export class FormComponent {

	username: string = '';

}
