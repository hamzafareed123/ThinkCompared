import { Component, resource } from '@angular/core';
import { Product } from '../../../../core/services/product';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CategoryRoutingModule } from '../../../category/category-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-products',
  imports: [CommonModule, FontAwesomeModule, CategoryRoutingModule],
  standalone: true,
  templateUrl: './top-products.html',
  styleUrl: './top-products.css',
})
export class TopProducts {
  productsDetails: any[] = [];
  isLoading = true;
  faSpinner = faSpinner;

  constructor(private productServices: Product, private route: Router) {}
  ngOnInit() {
    this.productServices.getPopularCategoryProducts().subscribe((result) => {
      console.log(result[0]);
      this.productsDetails = result.flatMap((cat: any) => cat.products);

      this.isLoading = false;
    });
  }

  onProductClick(product: any) {
    const safeId = encodeURIComponent(product.id);
    this.route.navigate(['/products/product-items', safeId]);
  }
}
