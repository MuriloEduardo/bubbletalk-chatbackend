import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';

import { ChatsService } from '../main/chats/chats.service';

@Injectable()
export class ChatService {

	private url = 'http://localhost:3000';  
	public socket;
	public connection;
	public messages = [];

	constructor(private chatsService: ChatsService) {
		console.log('Chat Service Inicializado...')
	}

	connect() {
		// Se connecta com o socket, toda vez que entra numa aplicação
		this.socket = io(this.url);
	}

	setRoom(room: string) {
		// Seta os dados usuarios no socket
		this.socket.emit('set:room', room);

		let observable = new Observable(observer => {
			this.socket.on('join:room', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		})
		return observable;
	}

	getLeftRoom() {
		let observable = new Observable(observer => {
			this.socket.on('left:room', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		})
		return observable;
	}

	setUser(user: {}) {
		// Seta os dados usuarios no socket
		this.socket.emit('set:user', user);

		let observable = new Observable(observer => {
			this.socket.on('set:user', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		})
		return observable;
	}

	sendMessage(message){
		this.socket.emit('new:message', message);    
	}

	getMessages() {
		let observable = new Observable(observer => {
			this.socket.on('message', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		})
		return observable;
	}
}