import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { SuaContaComponent } from './sua-conta/sua-conta.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
	{
		path: 'sua-conta',
		component: SuaContaComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'nao-encontrado',
		component: NaoEncontradoComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '',
		loadChildren: 'app/main/main.module#MainModule',
		canActivate: [AuthGuard]
	},
	{
		path: ':id',
		loadChildren: 'app/chat/chat.module#ChatModule',
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}