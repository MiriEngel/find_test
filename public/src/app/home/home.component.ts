import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import * as _ from 'lodash';



import * as io from 'socket.io-client';

export class Marker {
    constructor(
        public lat: number,
        public long: number,
        public imei: string,
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
    toggledClass = true;

    currentUser: User;
    users: User[] = [];
    markers: Marker[] = [];
    socket: io.SocketIOClient.Socket;

    constructor(private userService: UserService
       // private dropdownDirective:DropdownDirective
         /*private chatService: ChatService*/) {
        //  this.markers.push(new Marker(this.lat+0.8,this.lng,'hghj'))
        //  this.markers.push( new Marker(this.lat+0.1,this.lng,'333'))
        //  setTimeout(() => {
        //       this.testSocket({data:{imei:'1234',latitude:this.lat+0.3,longitude:this.lng}})
        //  }, 5000);


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
            if (msg.data.imei && msg.data.latitude) {// update the coordinate or add marker
                let index = this.markers.findIndex(el => el.imei === msg.data.imei);
                if (index >= 0)
                    this.markers[index] = new Marker(msg.data.latitude, msg.data.longitude, msg.data.imei);
                else
                    this.markers.push(new Marker(msg.data.latitude, msg.data.longitude, msg.data.imei));
            }
            // if (msg.data.latitude) {
            //     this.lat = msg.data.latitude;
            //     this.lng = msg.data.longitude;
            // }
        })
    }
    testSocket(msg) {
        if (msg.data.imei && msg.data.latitude) {// update the coordinate or add marker
            let index = this.markers.findIndex(el => el.imei === msg.data.imei);
            if (index >= 0)
                this.markers[index] = new Marker(msg.data.latitude, msg.data.longitude, msg.data.imei);
            else
                this.markers.push(new Marker(msg.data.latitude, msg.data.longitude, msg.data.imei));
        }
    }

    markerClick(infoWin, marker) {
        alert('clicked')
    }
    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    addIemei(imei: string) {
        this.userService.addImei(imei, this.currentUser._id).pipe(first()).subscribe(users => {
            //this.users = users;
            alert('imei saved!');
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }


}