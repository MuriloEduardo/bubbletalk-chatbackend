import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { ChatsService } from './chats.service';
import { Chats } from './chats';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

	modalActions = new EventEmitter<string|MaterializeAction>();
	chats: any[];
	appname: string;
	email: string;
	categoria: string;

	constructor(private chatsService: ChatsService) { }

	ngOnInit() {
		this.chatsService.chats.subscribe(chats => {
			this.chats = chats;
		});
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}

	addChat(event) {
		event.preventDefault();
		
		if(!this.appname) return false;

		let newChat = {
			dados: {
				appname: this.appname,
				email: this.email,
				categoria: this.categoria
			}
		};
		
		this.chatsService.addChat(newChat).subscribe(chat => {
			this.chats.push(chat);

			/*this.appname = undefined;
			this.email = undefined;
			this.categoria = undefined;*/

			this.closeModal();
		});
	}
}