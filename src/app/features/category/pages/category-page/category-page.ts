import { Component } from '@angular/core';
import { Filters } from '../../../product/components/filters/filters';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import { CategoryModule } from '../../category-module';
import { CategorySection } from '../../components/category-section/category-section';
import { BestSeller } from "../../../landing/components/best-seller/best-seller";
import { HelpSection } from "../../../../shared/components/help-section/help-section";

@Component({
  selector: 'app-category-page',
  imports: [SearchBar, CategorySection, BestSeller, HelpSection],
  standalone: true,
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage {}
