import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../core/services/product';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule, PaginationComponent, SearchBar],
  templateUrl: './brand.html',
  styleUrls: ['./brand.css'],
})
export class Brand {
  faStar = faStar;
  faSpinner = faSpinner;

  brandName: string = '';
  brandData: any = null;
  filteredProducts: any[] = [];
  isLoading = true;

  pageNo: number = 1;
  perPage: number = 12;
  totalResults: number = 0;

  sortOption = 'az';
  showPriceRange = false;
  priceMin = 0;
  priceMax = 6000;

  constructor(
    private route: ActivatedRoute,
    private productService: Product,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.brandName = params.get('brand') || '';
      this.loadBrandData();
    });
  }

  loadBrandData() {
    this.isLoading = true;
    this.productService.getAllBrandsData().subscribe((brands) => {
      const brand = brands.find((b: any) => b.title.toLowerCase() === this.brandName.toLowerCase());

      if (brand) {
        this.brandData = brand;
        this.loadBrandProducts(brand.title);
      } else {
        this.isLoading = false;
      }
    });
  }

  loadBrandProducts(brandName: string) {
    this.productService
      .getProductsByBrand(brandName, this.pageNo, this.perPage, this.priceMin, this.priceMax)
      .subscribe((data) => {
        this.filteredProducts = data.response?.data?.data || [];
        this.totalResults = data.response?.data?.totalItems || this.filteredProducts.length;
        this.isLoading = false;
      });
  }

  onPageChange(newPage: number) {
    this.pageNo = newPage;
    this.loadBrandProducts(this.brandName);
  }

  sortProducts() {
    if (this.sortOption === 'az')
      this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    else if (this.sortOption === 'za')
      this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  togglePriceRange() {
    this.showPriceRange = !this.showPriceRange;
  }

  onPriceRangeChange() {
    if (this.priceMax < this.priceMin + 100) this.priceMax = this.priceMin + 100;
    this.loadBrandProducts(this.brandName);
  }

  get startIndex(): number {
    return (this.pageNo - 1) * this.perPage + 1;
  }

  get endIndex(): number {
    const end = this.pageNo * this.perPage;
    return end > this.totalResults ? this.totalResults : end;
  }

  navigateToProduct(filteredProducts: any) {
    console.log(filteredProducts.id);
    const safeId = encodeURIComponent(filteredProducts.id);
    this.router.navigate(['/products/product-items', safeId]);
    console.log(this.filteredProducts);
  }
  
}
