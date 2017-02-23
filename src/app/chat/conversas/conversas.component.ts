import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.component.html',
  styleUrls: ['./conversas.component.css']
})
export class ConversasComponent implements OnInit {

	messages;
	message;
	dadosSocket: any = this.chatService.socket;

	constructor(private chatService: ChatService) { }

	ngOnInit() {
	    this.messages = this.chatService.messages;

	    console.log(this.dadosSocket)
	}

	sendMessage(){
		this.chatService.sendMessage(this.message);
		this.message = undefined;
	}
}