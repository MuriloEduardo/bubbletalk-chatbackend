import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

	modalActions = new EventEmitter<string|MaterializeAction>();
	nome: string;
	email: string;
	users: any[] = [
		{
			id: 1,
			nome: 'Murilo Santos',
			email: 'nome1@gmail.com'
		},
		{
			id: 2,
			nome: 'Ana Maria',
			email: 'nome2@gmail.com'
		},
		{
			id: 3,
			nome: 'Ricardo Peixoto',
			email: 'nome3@gmail.com'
		}
	];

	constructor() { }

	ngOnInit() {
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}

	addUser(event) {
		event.preventDefault();
		
		if(!this.email) return false;

		let newUser = {
			nome: this.nome,
			email: this.email
		};
		
		this.users.push(newUser);

		this.closeModal();
	}
}
