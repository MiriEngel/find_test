import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

import { ChatService } from '../_services/chat';

export class Message {
    constructor(
        public sender: string,
        public content: string,
        public isBroadcast = false,
    ) { }
}


@Component({
    templateUrl: 'home.component.html',
    providers: [ChatService]
}
)
export class HomeComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 43.678418;
    lng: number = -79.809007;

    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService, private chatService: ChatService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        chatService.getMessage().subscribe(msg => {

            console.log("Response from websocket: " + msg);
            if (msg.data.data.latitude) {
                this.lat = msg.data.latitude;
                this.lng = msg.data.longitude;
            }
        });
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

}