import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './list/product.list.component';
import { ProductEditComponent } from './edit/product.edit.component';
import { ProductService } from '../_services/product.service';
import { ProductRoutes } from './product.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ProductRoutes)
  ],
  declarations: [
    ProductListComponent,
    ProductEditComponent
  ],
  providers: [
    ProductService
  ],

})
export class ProductModule { }
