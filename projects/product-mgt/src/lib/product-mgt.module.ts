import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ProductMgtComponent } from './product-mgt.component';
import {  ProductListComponent } from './product-list/product-list.component';
import { ProductMgtRoutes } from './product-mgt.routing';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ProductMgtRoutes
  ],
  declarations: [
    ProductMgtComponent,
    ProductListComponent
  ],
  exports: [ProductMgtComponent]
})
export class ProductMgtModule { }
