import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../main/chats/chats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	chat: any;

	constructor(private chatsService: ChatsService) { }

	ngOnInit() {
		this.chatsService.chat.subscribe(chat => {
			this.chat = chat;
		});
	}
}