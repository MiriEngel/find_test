import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from '../_models/user';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    user:User;
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { email: email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    this.user=user;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({...user,email: email}));
                }

                return user;
            }));
    }

    isLoggedIn(): boolean {
		return (!!this.user);
	}

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}




// import 'rxjs/Rx';
// import {Injectable} from '@angular/core';
// import {Http, Response, Headers, RequestOptions} from '@angular/http';
// import {Observable} from 'rxjs/Observable';

// @Injectable()
// export class AuthenticationService {
// 	public user = window['user'];

// 	private _signinURL = 'api/auth/signin';
// 	private _signupURL = 'api/auth/signup';

// 	constructor (private http: Http) {
		
// 	}

// 	isLoggedIn(): boolean {
// 		return (!!this.user);
// 	}

// 	signin(credentials: any): Observable<any> {
//     	let body = JSON.stringify(credentials);
//     	let headers = new Headers({ 'Content-Type': 'application/json' });
//     	let options = new RequestOptions({ headers: headers });

// 		return this.http.post(this._signinURL, body, options)
//                         .map(res => this.user = res.json())
//                         .catch(this.handleError)
//   	}

//   	signup(user: any): Observable<any> {
//     	let body = JSON.stringify(user);
//     	let headers = new Headers({ 'Content-Type': 'application/json' });
//     	let options = new RequestOptions({ headers: headers });

// 		return this.http.post(this._signupURL, body, options)
//                         .map(res => this.user = res.json())
//                         .catch(this.handleError)
//   	}

// 	private handleError(error: Response) {
// 		console.error(error);
// 		return Observable.throw(error.json().message || 'Server error');
// 	}
// }