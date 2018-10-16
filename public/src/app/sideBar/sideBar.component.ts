import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
    selector: 'side',
    templateUrl: 'sideBar.component.html',
    providers: [AuthenticationService]
})
export class SideComponent implements OnInit {
    // logged: boolean;
    user: any;
    constructor(authenticationService: AuthenticationService
        /*private _authenticationService: AuthenticationService*/) {
        //authenticationService.isLoggedIn()

    }
    ngOnInit() {

    }
    get logged() {
        let user = <any>localStorage.getItem('currentUser');
        if (user) {
            user = JSON.parse(user);

            if ('token' in user)
                return true;
            //this.user = _authenticationService.;
        }
        return false;
    }
}