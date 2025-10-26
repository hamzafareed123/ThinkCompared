import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { ProductItem } from '../product/components/product-item/product-item';

const routes: Routes = [
  { path: '', component: LandingPage },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
