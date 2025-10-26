import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../core/services/product';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import { BestSeller } from '../../../landing/components/best-seller/best-seller';
import { HelpSection } from '../../../../shared/components/help-section/help-section';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  imports: [SearchBar, BestSeller, HelpSection, CommonModule, FontAwesomeModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  productId: string | null = null;
  product: any = null;
  thumbnails: string[] = [];
  selectedIndex = 0;
  mainImage: string = '';
  isLoading = true;
  faSpinner = faSpinner;

  constructor(private route: ActivatedRoute, private productServies: Product) {}

  ngOnInit() {
    const id = decodeURIComponent(this.route.snapshot.paramMap.get('id') || '');
    console.log('Decoded ID:', id);

    if (!id) return;

    this.productServies.getAllData(1, 1000).subscribe((res) => {
      const product = res.response.data.data.find((p: any) => p.id === id);
        console.log('All Products Data Example:', res.response.data.data[0]); // 👈
      console.log('Product:', product);

      if (product) {
        this.product = product;

        if (product.images?.additional_images?.length) {
          this.thumbnails = product.images.additional_images.slice(0, 3);
          this.mainImage = this.thumbnails[0];
          this.isLoading = false;
        }
      }
    });
  }

  selectImage(index: number) {
    this.selectedIndex = index;
    this.mainImage = this.thumbnails[index];
  }
}
