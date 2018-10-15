import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { Product } from '@app/_models';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'product.edit',
    templateUrl: './product.edit.component.html'
})
export class ProductEditComponent implements OnInit {
    isNew: boolean = false;
    id: string;
    product: Product;
    errors: string;
    user: any;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService) {
        let u = <any>localStorage.getItem('currentUser');
        if (u) {
            this.user = JSON.parse(u);
        }
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
            map(p => p['id']),
            switchMap(id => {
                if (id === 'new') {
                    this.isNew = true;
                    return of(new Product());
                }
                return this.productService.getById(id)
            })
            )
            .subscribe(
            product => {
                this.product = new Product();
                this.errors = '';
            },
            err => {
                this.errors = 'Error loading';
            }
            );
    }

    save() {
        if (this.isNew) {
            this.productService.add(this.product, this.user._id).subscribe(
                prod => {
                    //  this.product = prod; 
                    this.errors = 'Save was successful!';
                },
                err => {
                    this.errors = 'Error saving';
                }
            )
        }
        else {
            this.productService.update(this.product).subscribe(
                prod => {
                    //  this.product = prod; 
                    this.errors = 'Save was successful!';
                },
                err => {
                    this.errors = 'Error saving';
                }
            );
        }
    }
}