import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { MainRoutingModule } from './main.routing.module';

import { MainComponent } from './main.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
	imports: [
		CommonModule,
		MainRoutingModule,
		FormsModule,
		MaterializeModule
	],
	declarations: [
		ChatsComponent,
		MainComponent
	]
})
export class MainModule {}