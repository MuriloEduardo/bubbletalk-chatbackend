import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { MaterializeAction } from 'angular2-materialize';

import { ChatsService } from '../main/chats/chats.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	chat: {};

	constructor(
		private sidebarService: SidebarService,
		private chatsService: ChatsService,
		private route: ActivatedRoute,
		private router: Router,
		private chatService: ChatService
	) { }

	ngOnInit() {
		this.chatService.connect();

		this.chatService.connection = this.chatService.setUser({
			_id: '0a9sjd0asd09aks',
			nome: 'Murilo Eduardo dos Santos'
		}).subscribe(data => {
			console.log('Set:user')
	      console.log(data)
	    });

		this.inscricao = this.route.params.subscribe((params: any) => {
				this.chatsService.getChat(params['id']).subscribe(chat => {
					
					if(!chat) {
						this.router.navigate(['nao-encontrado']);
					} else {
						this.chat = chat;
						this.sidebarService.showDrawer(chat);

						// Seta a sala do _id desta aplicação
						this.joinRoom(chat._id);
					}
				});
			}
		);

		this.chatService.connection = this.chatService.getMessages().subscribe(message => {
	      this.chatService.messages.push(message);
	    });
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
		
		this.chatService.connection.unsubscribe();

		this.sidebarService.hideDrawer();
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}

	joinRoom(room) {
		this.chatService.setRoom(room).subscribe(data => {
			if(data['id'] == this.chatService.socket.id) {
				this.triggerToast('Bem vindo ' + data['nome']);
			} else {
				this.triggerToast(data['nome'] + ' entrou');
			}
		});

		this.chatService.getLeftRoom().subscribe(data => {
			this.triggerToast(data['nome'] + ' saiu');
		});
	}
}