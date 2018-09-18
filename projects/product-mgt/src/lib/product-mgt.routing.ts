import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductMgtComponent } from './product-mgt.component';
import {  ProductListComponent } from './product-list/product-list.component';
const routes: Routes = [
  { path: '',
    component: ProductMgtComponent,
    children: [
      {
        path: 'productList',
        component: ProductListComponent
      },
      {
        path: '',
        redirectTo: 'productList',
        pathMatch: 'full'
      },
      { path: '**', component: ProductListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductMgtRoutes {}
