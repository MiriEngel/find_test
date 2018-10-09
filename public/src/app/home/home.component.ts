import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

//import { ChatService } from '../_services/chat';

import * as io from 'socket.io-client';

export class Message {
    constructor(
        public sender: string,
        public content: string,
        public isBroadcast = false,
    ) { }
}

@Component({
    templateUrl: 'home.component.html',
    // providers: [ChatService]
}
)
export class HomeComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 43.678418;
    lng: number = -79.809007;

    currentUser: User;
    users: User[] = [];
    socket: io.SocketIOClient.Socket;

    constructor(private userService: UserService, /*private chatService: ChatService*/) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        let user = <any>localStorage.getItem('currentUser');
        if (user) {
            user = JSON.parse(user);

            if ('token' in user)
                this.socket = io.connect(`http://${window.location.hostname}:4000?token=${user.token}&iemi=${user.imei}`);
            //  config = { url: 'http://' + window.location.hostname + ':4000', options: { query: "token=" + user.token + '&iemi=' + user.imei } };
        }

        // chatService.getMessage().subscribe(msg => {
        //     console.log("Response from websocket: ", msg);
        //     if (msg.data.latitude) {
        //         this.lat = msg.data.latitude;
        //         this.lng = msg.data.longitude;
        //     }
        // });
    }

    ngOnInit() {
        this.loadAllUsers();

        this.socket.emit('init');
        this.socket.on('message', function (data) {
            console.log(data.msg)
        })

        this.socket.on('data', (msg) => {
            console.log("Response from websocket: ", msg);
            if (msg.data.latitude) {
                this.lat = msg.data.latitude;
                this.lng = msg.data.longitude;
            }
        })
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