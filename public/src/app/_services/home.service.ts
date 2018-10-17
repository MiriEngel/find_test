//import { FlightFilter } from './flight-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Notification } from '../_models';

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) {
    }

    getRecentNotification(userId) {
        return this.http.post<Notification[]>(`${environment.apiUrl}/notifications`,{userId});
    }
}