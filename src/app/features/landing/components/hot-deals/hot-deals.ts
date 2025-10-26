import { Component } from '@angular/core';
import { Product } from '../../../../core/services/product';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hot-deals',
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './hot-deals.html',
  styleUrl: './hot-deals.css',
})
export class HotDeals {
  faStar = faStar;
  faSpinner = faSpinner;
  specificProducts: any[] = [];
  isLoading = true;
  constructor(private productServices: Product) {}

  ngOnInit() {
    this.productServices.getPopularCategoryProducts().subscribe((result) => {
      const allProducts = result.flatMap((cat: any) => cat.products);

      this.specificProducts = allProducts.filter(
        (prod: any) => prod.brand?.toLowerCase() === 'samsung'
      );

      this.isLoading = false;
    });
  }
}
