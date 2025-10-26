import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Product } from '../../../core/services/product';
@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass;
  selectProducts: any[] = [];

  constructor(private productServices: Product) {}

  // ngOnInit() {
  //   this.productServices.getProduct().subscribe((res) => {
  //     const products = res;

  //     const uniqueCategories = Array.from(new Set(products.map((p: any) => p.category)));

  //     this.selectProducts = uniqueCategories.map((cat) => ({
  //       category: cat,
  //     }));
  //   });
  // }
}
