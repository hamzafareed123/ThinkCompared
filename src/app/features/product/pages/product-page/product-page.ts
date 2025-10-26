import { Component } from '@angular/core';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import { ProductList } from '../../components/product-list/product-list';
import { BestSeller } from '../../../landing/components/best-seller/best-seller';
import { HelpSection } from "../../../../shared/components/help-section/help-section";

@Component({
  selector: 'app-product-page',
  imports: [SearchBar, ProductList, BestSeller, HelpSection],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {}
