import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-user',
	imports: [CommonModule],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css'
})
export class UserComponent {

	@Output("add")
	add: EventEmitter<any> = new EventEmitter();

	@Input()
	user: any;
	// Variable utilisateur, type any, attendue en entrée

	constructor() {
		// Constructeur
	}

	connect() {
		// Fonction connect
		this.user.connected = true;
	}

	disconnect() {
		// Fonction disconnect
		this.user.connected = false;
	}

	emitAdd() {
		this.add.emit();
	}

}
