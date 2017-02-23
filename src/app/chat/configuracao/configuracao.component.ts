import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../main/chats/chats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

	chat: any;

	constructor(
		private chatsService: ChatsService,
		private router: Router
	) { }

	ngOnInit() {
		this.chatsService.chat.subscribe(chat => {
			this.chat = chat;
		});
	}

	deleteChat() {
		this.chatsService.deleteChat(this.chat._id).subscribe(data => {
			if(data.n) {
				this.router.navigate(['']);
			}
		});
	}
}