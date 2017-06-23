import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthenticationService } from '../authentication-service/authentication.service';
import { User } from '../../models/user';

@Injectable()
export class UserService {
	constructor(
		private http: Http,
		private authenticationService: AuthenticationService
	) {}

	getUser(): Observable<User> {
		// add authorization header with jwt token
		let headers = new Headers({
			'x-auth': this.authenticationService.token,
		});
		let options = new RequestOptions({ headers: headers });

		// get users from api
		return this.http
			.get('/auth/user', options)
			.map((response: Response) => response.json() as User)
			.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('Was error', error);
		return Observable.throw(error.message || error);
	}
}
