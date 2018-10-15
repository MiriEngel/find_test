import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { FlightFilter } from '../flight-filter';
import { ProductService } from '../../_services/product.service';
import { Product, User } from '../../_models';
import { first } from 'rxjs/operators';

@Component({
    selector: 'product',
    templateUrl: 'product.list.component.html'
})
export class ProductListComponent {
    user: User;
    //filter = new FlightFilter();
    selectedProduct: Product;
    products: Product[];

    productList() {
        try{
        this.productService.getAll(this.user._id).pipe(first()).subscribe(products => {
            this.products = products;
        })
    }catch(err){
        console.log(err);
    }
       
    }

    constructor(private productService: ProductService) {
        let u = <any>localStorage.getItem('currentUser');
        if (u) {
            this.user = JSON.parse(u);
        }
        this.productList();
    }

    ngOnInit() {
    }

    search(): void {
        //this.flightService.load(this.filter);
    }

    select(selected: Product): void {
        this.selectedProduct = selected;
    }

}
