import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable()
export class ChatService {

    constructor(private socket: Socket) { }

    sendMessage(msg: string){
        this.socket.emit("data", msg);
    }
     getMessage() {
        return <any>this.socket
            .fromEvent("data")
            .pipe(map( data => data ));
    }
}

// import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { WebsocketService } from './websocket';

// const CHAT_URL = 'ws://localhost:4000';

// export interface Message {
// 	author: string,
// 	message: string
// }

// @Injectable()
// export class ChatService {
// 	public messages: Subject<Message>;

// 	constructor(wsService: WebsocketService) {
// 		this.messages = <Subject<Message>>wsService
// 			.connect(CHAT_URL)
// 			.pipe(map((response: MessageEvent): Message => {
// 				let data = JSON.parse(response.data);
// 				return {
// 					author: data.author,
// 					message: data.message
// 				}
// 			}));
// 	}
// }