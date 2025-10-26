import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/services/category';
import { CommonModule } from '@angular/common';
import { BestSeller } from '../../../landing/components/best-seller/best-seller';
import { HelpSection } from '../../../../shared/components/help-section/help-section';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-compare-products',
  standalone: true,
  imports: [CommonModule, BestSeller, HelpSection,FontAwesomeModule],
  templateUrl: './compare-products.html',
  styleUrl: './compare-products.css',
})
export class CompareProducts {
  products: any[] = [];
  faTimes=faTimes

  constructor(private compareServices: Category) {}

  ngOnInit() {
    this.products = this.compareServices.getProducts();
    console.log(this.products);
  }

  removeProduct(product: any) {
    this.products = this.products.filter((p) => p.id != product.id);
    console.log(this.products);

    this.compareServices.setProducts(this.products);
  }
}
