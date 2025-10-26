import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { ProductPage } from './pages/product-page/product-page';
import { Brand } from './components/brand/brand';
import { CompareProducts } from './components/compare-products/compare-products';
import { ProductItem } from './components/product-item/product-item';
import { ProductList } from './components/product-list/product-list';
import { Filters } from './components/filters/filters';
import { CompareBox } from './components/compare-box/compare-box';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    ProductPage,
    Brand,
    CompareProducts,
    ProductItem,
    ProductList,
    Filters,
    CompareBox
  ],
  exports: [
    ProductPage,
    Brand,
    CompareProducts,
    ProductItem,
    ProductList,
    Filters,
    CompareBox
  ]
})
export class ProductModule {}
