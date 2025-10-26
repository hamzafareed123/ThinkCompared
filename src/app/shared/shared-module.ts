import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from './components/product-card/product-card';
import { SearchBar } from './components/search-bar/search-bar';
import { PaginationComponent } from './components/pagination/pagination';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductCard,
    SearchBar,
    PaginationComponent
  ],
  
  exports:[
    ProductCard,
    SearchBar,
    PaginationComponent
  ],
})
export class SharedModule { }
