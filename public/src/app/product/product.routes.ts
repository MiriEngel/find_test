import { Routes } from '@angular/router';
import { ProductListComponent } from './list/product.list.component';
import { ProductEditComponent } from './edit/product.edit.component';

export const ProductRoutes: Routes = [
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductEditComponent
  }
]
