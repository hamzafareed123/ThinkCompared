import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../core/services/product';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';
import { FormsModule, NgModel } from '@angular/forms';

import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CompareBox } from '../../../product/components/compare-box/compare-box';
import { CompareProducts } from '../../../product/components/compare-products/compare-products';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    PaginationComponent,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CompareBox,
    FormsModule,
  ],
  templateUrl: './category-item.html',
  styleUrls: ['./category-item.css'],
})
export class CategoryItem {
  faStar = faStar;
  faSpinner = faSpinner;
  filteredProducts: any[] = [];
  categoryName: string = '';
  isLoading = true;

  pageNo: number = 1;
  perPage: number = 12;
  totalResults: number = 0;

  sortOption = 'az';

  showPriceRange = false;
  priceMin = 0;
  priceMax = 6000;
  minPrice = 0;
  maxPrice = 0;

  productMessage: string = '';

  drawerOpened = false;

  constructor(
    private route: ActivatedRoute,
    private productServices: Product,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('category') ?? '';
      this.loadProducts();
    });
  }

  loadProducts() {
    this.isLoading = true;
    const cat = this.categoryName.toLowerCase();
    let obs;

    if (cat === 'mobiles')
      obs = this.productServices.getMobileData(
        this.pageNo,
        this.perPage,
        this.priceMin,
        this.priceMax
      );
    else if (cat === 'laptops')
      obs = this.productServices.getLaptopData(
        this.pageNo,
        this.perPage,
        this.priceMin,
        this.priceMax
      );
    else if (cat === 'desktops')
      obs = this.productServices.getDesktopData(
        this.pageNo,
        this.perPage,
        this.priceMin,
        this.priceMax
      );
    else if (cat === 'monitors')
      obs = this.productServices.getMonitorData(
        this.pageNo,
        this.perPage,
        this.priceMin,
        this.priceMax
      );
    else obs = null;

    if (obs) {
      obs.subscribe((result) => {
        this.filteredProducts = result.response.data.data;
        this.totalResults = result.response.data.totalItems;
        this.isLoading = false;
      });
    } else {
      this.filteredProducts = [];
      this.isLoading = false;
    }
  }

  onPageChange(newPage: number) {
    this.pageNo = newPage;
    this.loadProducts();
  }

  get startIndex(): number {
    return (this.pageNo - 1) * this.perPage + 1;
  }

  get endIndex(): number {
    const end = this.pageNo * this.perPage;
    return end > this.totalResults ? this.totalResults : end;
  }

  sortProducts() {
    if (this.sortOption === 'az') {
      this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortOption === 'za') {
      this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
  }

  togglePriceRange() {
    this.showPriceRange = !this.showPriceRange;
  }

  onPriceRangeChange() {
    if (this.priceMax < this.priceMin + 100) {
      this.priceMax = this.priceMin + 100;
    }
    this.loadProducts();
  }

  @ViewChild('drawer') drawer!: MatSidenav;
  compareProducts: any[] = [];

  toggleDrawer() {
    this.drawer.toggle();
    this.drawerOpened = !this.drawerOpened;
  }

  addToCompare(product: any) {
    if (this.compareProducts.length < 4 && !this.compareProducts.find((p) => p.id === product.id)) {
      this.compareProducts.push(product);
      this.productMessage = '';

      if (!this.drawer.opened) {
        this.drawer.open();
      }
    } else {
      this.productMessage = 'Compare Maximum 4 product at a time';
      setTimeout(() => {
        this.productMessage = ' ';
      }, 3000);
    }
  }

  removeFromCompare(index: number) {
    this.compareProducts.splice(index, 1);
  }

  isInCompare(product: any): boolean {
    return !!this.compareProducts.find((p) => p.id === product.id);
  }

  toggleCompare(product: any) {
    const existsIndex = this.compareProducts.findIndex((p) => p.id === product.id);

    if (existsIndex > -1) {
      this.compareProducts.splice(existsIndex, 1);

      if (this.compareProducts.length === 0) this.drawer.close();
    } else {
      if (this.compareProducts.length < 4) {
        this.compareProducts.push(product);

        if (!this.drawer.opened) this.drawer.open();

        this.productMessage = '';
      } else {
        this.productMessage = 'Compare Maximum 4 product at a time';
      }
    }
  }

  navigateToProduct(product: any) {
    console.log(product.id);
    const safeId = encodeURIComponent(product.id);
    this.router.navigate(['/products/product-items', safeId]);
  }
}
