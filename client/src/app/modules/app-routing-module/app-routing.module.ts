import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../../components/login-component/login.component';
import { HomeComponent } from '../../components/home-component/home.component';
import { AuthGuard } from '../../shared/guards/auth-guard/auth.guard';

const routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
