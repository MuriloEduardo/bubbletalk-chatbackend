import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './login/auth.service';
import { SidebarService } from './sidebar/sidebar.service';
import { ChatsService } from './main/chats/chats.service';
import { ChatService } from './chat/chat.service';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { SuaContaComponent } from './sua-conta/sua-conta.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SuaContaComponent,
    LoginComponent,
    SidebarComponent,
    NaoEncontradoComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ChatsService,
    ChatService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
