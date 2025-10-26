import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../../../core/services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-seller.html',
  styleUrl: './best-seller.css',
})
export class BestSeller {
  brands: any[] = [];
  images = Array.from({ length: 12 }, (_, i) => `/best-seller/img${i + 1}.png`);

  constructor(private productService: Product, private router: Router) {}

  ngOnInit() {
    this.loadBrands();
  }

  loadBrands() {
    this.productService.getAllBrandsData().subscribe({
      next: (brands) => {
        this.brands = brands.slice(0, 12); 
        console.log(this.brands);
      },
      error: (err) => console.error('Failed to load brands', err),
    });
  }

  onBrandClick(brand: any) {
    console.log(brand.title);
    this.router.navigate(['/products/brand', brand.title]);
  }
}
