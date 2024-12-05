import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserlistComponent } from './components/userlist/userlist.component';

export const routes: Routes = [
	{
		pathMatch: 'full', path: '', redirectTo: 'login'
	},
	{
		path: '', component: LoginComponent
	},
	{
		path: 'login', component: LoginComponent
	},
	{
		path: 'register', component: SigninComponent
	},
	{
		path: 'home', component: UserlistComponent
	}
];
