import { Component, OnInit } from '@angular/core';
import { I18nService } from '../_services/i18n.service';
import { Notification } from '../_models';
import { HomeService } from '../_services'
import * as io from 'socket.io-client';
import { first } from 'rxjs/internal/operators/first';


@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    providers:[HomeService]
})
export class HeaderComponent implements OnInit {
    socket: io.SocketIOClient.Socket;
    user: any;
    messages: Notification[] = [];

    constructor(private i18nService: I18nService, homeService: HomeService/*private _authenticationService: AuthenticationService*/) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.user) {
            if ('token' in this.user)
                this.socket = io.connect(`http://${window.location.hostname}:4000?token=${this.user.token}&iemi=${this.user.imei}`);
            //  config = { url: 'http://' + window.location.hostname + ':4000', options: { query: "token=" + user.token + '&iemi=' + user.imei } };
        }
        homeService.getRecentNotification(this.user._id).pipe(first()).subscribe(notifications =>
            this.messages = notifications
        )
    }

    ngOnInit() {
        this.socket.on('alert', (msg) => {
            this.messages.push(new Notification(msg, false));
        });
    }

    setLanguage(language: string) {
        this.i18nService.language = language;
    }

    get currentLanguage(): string {
        return this.i18nService.language;
    }

    get languages(): string[] {
        return this.i18nService.supportedLanguages;
    }
    get logged() {
        this.user = <any>localStorage.getItem('currentUser');
        if (this.user) {
            this.user = JSON.parse(this.user);

            if ('token' in this.user)
                return true;
            //this.user = _authenticationService.;
        }
        return false;
    }

    get countNewMessages() {
        return this.messages.filter(msg => msg.read == false).length;
    }
}