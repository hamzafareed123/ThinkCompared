import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPage } from './pages/category-page/category-page';
import { CategoryItem } from './components/category-item/category-item';

const routes: Routes = [
  { path: '', component: CategoryPage },
  { path: ':category', component: CategoryItem },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
