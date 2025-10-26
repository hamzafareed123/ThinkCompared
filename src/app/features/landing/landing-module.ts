import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from './components/hero-section/hero-section';
import { HotDeals } from './components/hot-deals/hot-deals';
import { TopProducts } from './components/top-products/top-products';
import { LandingPage } from './pages/landing-page/landing-page';
import { LandingRoutingModule } from './landing-routing.module';
import { HttpClient } from '@angular/common/http';
import { BestSeller } from './components/best-seller/best-seller';
import { HelpSection } from '../../shared/components/help-section/help-section';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HotDeals,
    TopProducts,
    HeroSection,
    LandingPage,
    LandingRoutingModule,
    BestSeller,
    HelpSection,
  ],

  exports: [HeroSection, HotDeals, TopProducts, LandingPage, BestSeller],
})
export class LandingModule {}
