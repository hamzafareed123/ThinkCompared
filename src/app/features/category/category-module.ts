import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItem } from './components/category-item/category-item';
import { CategoryList } from './components/category-list/category-list';
import { CategorySection } from './components/category-section/category-section';
import { CategoryPage } from './pages/category-page/category-page';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CategoryItem, CategoryList, CategorySection, CategoryPage,CategoryRoutingModule],

  exports: [CommonModule, CategoryItem, CategoryList, CategorySection, CategoryPage],
})
export class CategoryModule {}