//import { FlightFilter } from './flight-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../_models';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getAll(userId) {
        return this.http.post<Product[]>(`${environment.apiUrl}/products`,{});
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/products/` + id);
    }

    update(product: Product) {
        return this.http.put(`${environment.apiUrl}/products/` + product._id, product);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/products/` + id);
    }

    add(product: Product, userId) {
        return this.http.post(`${environment.apiUrl}/products/` + userId, product);
    }

    // findById(id: string): Observable<Flight> {

    //     let params = { "id": id };
    //     let headers = new HttpHeaders()
    //                         .set('Accept', 'application/json');
    //     return this.http.get<Flight>(`${environment.apiUrl}`, {params, headers});
    // }

    // load(filter: FlightFilter): void {
    //     this.find(filter).subscribe(
    //         result => {
    //             this.flightList = result;
    //         },
    //         err => {
    //             console.error('error loading', err);
    //         }
    //     )
    // }

    // find(filter: FlightFilter): Observable<Flight[]> {
    //     let url = 'http://www.angular.at/api/flight';
    //     let headers = new HttpHeaders()
    //                         .set('Accept', 'application/json');

    //     let params = {
    //         "from": filter.from,
    //         "to": filter.to,
    //     };

    //     return this.http.get<Flight[]>(url, {params, headers});
    // }

    // save(entity: Flight): Observable<Flight> {
    //     let url = 'http://www.angular.at/api/flight';
    //     let headers = new HttpHeaders()
    //         .set('Accept', 'application/json');
    //     return this.http.post<Flight>(url, entity, {headers});
    // }
}

