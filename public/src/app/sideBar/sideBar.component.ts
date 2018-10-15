import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'side',
    templateUrl: 'sideBar.component.html',
    //providers:[AuthenticationService]
})
export class SideComponent implements OnInit{

    user:any;
    constructor(/*private _authenticationService: AuthenticationService*/) { 
        	//this.user = _authenticationService.;
    }
    ngOnInit() {

    }
}