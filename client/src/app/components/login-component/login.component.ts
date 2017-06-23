import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/models/User';
import { AuthenticationService } from '../../shared/services/authentication-service/authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	model: any = {};
	loading = false;
	error: string = '';

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService
	) {}

	ngOnInit() {
		// reset login status
		this.authenticationService.logout();
	}

	login() {
		this.loading = true;
		this.authenticationService
			.login(this.model.username, this.model.password)
			.subscribe(result => {
				if (result === true) {
					this.router.navigate(['/']);
				} else {
					this.error = 'Username or password is incorrect';
					this.loading = false;
				}
			});
	}
}
