import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './pages/product-page/product-page';
import { Brand } from './components/brand/brand';
import { CompareProducts } from './components/compare-products/compare-products';
import { ProductItem } from './components/product-item/product-item';


const routes: Routes = [
  { path: '', component: ProductPage },
  {path :'brand/:brand',component:Brand},
  {path:'compare-products',component:CompareProducts},
  {path:'product-items/:id', component:ProductItem}
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
