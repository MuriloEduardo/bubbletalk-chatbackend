import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SidebarService {

	mostrarDrawerEmitter = new EventEmitter<boolean>();
	chat: any;

	constructor() { }

	showDrawer(obj: any) {
		console.dir('SidebarService Inicializado...')
		this.chat = obj;
		this.mostrarDrawerEmitter.emit(true);
	}

	hideDrawer() {
		this.mostrarDrawerEmitter.emit(false);
	}
}
