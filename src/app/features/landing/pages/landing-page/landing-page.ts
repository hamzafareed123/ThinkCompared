import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { LandingModule } from '../../landing-module';
import { TopProducts } from '../../components/top-products/top-products';
import { HotDeals } from '../../components/hot-deals/hot-deals';
import { BestSeller } from '../../components/best-seller/best-seller';
import { HelpSection } from '../../../../shared/components/help-section/help-section';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroSection, TopProducts, HotDeals, BestSeller, HelpSection],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
