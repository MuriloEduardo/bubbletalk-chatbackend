import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

	private usuarioAutenticado: boolean = false;

	mostrarMenuEmitter = new EventEmitter<boolean>();
	
	constructor(private router: Router) { }

	fazerLogin(usuario: Usuario) {
		if(usuario.email === 'm@m' && usuario.senha === 'm') {
			this.usuarioAutenticado = true;

			this.mostrarMenuEmitter.emit(true);

			this.router.navigate(['']);
		} else {
			this.usuarioAutenticado = false;

			this.mostrarMenuEmitter.emit(false);
		}
	}
	
	usuarioEstaAutenticado() {
		return this.usuarioAutenticado;
	}
}
