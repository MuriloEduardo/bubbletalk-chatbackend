import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidebarService } from './sidebar.service';
import { ChatsService } from '../main/chats/chats.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	chat: any;

	constructor(private sidebarService: SidebarService) { }

	ngOnInit() {
		this.chat = this.sidebarService.chat;
	}
}
