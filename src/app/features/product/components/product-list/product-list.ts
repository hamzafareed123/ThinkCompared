import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../core/services/product';
import { CommonModule } from '@angular/common';
import { ApiResponse } from '../../../../../dataTypes';
import { HotDeals } from "../../../landing/components/hot-deals/hot-deals";

@Component({
  selector: 'app-product-list',
  imports: [FontAwesomeModule, CommonModule, HotDeals],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // faStar = faStar;
  // faSpinner = faSpinner;
  // allProducts: any[] = [];
  // isLoading = true;

  // constructor(private productServices: Product) {}

  // ngOnInit() {
  //   this.productServices.getAllData().subscribe((res:ApiResponse) => {
  //     this.allProducts = res.response.data.data;
  //     console.log(this.allProducts);
  //     this.isLoading = false; 
  //   });
  // }
}
