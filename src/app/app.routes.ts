import { Routes } from '@angular/router';
import { LandingPage } from './features/landing/pages/landing-page/landing-page';

export const routes: Routes = [
  { path: '', component: LandingPage },

  {
    path: 'category',
    loadChildren: () => import('./features/category/category-module').then((m) => m.CategoryModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./features/product/product-module').then((m) => m.ProductModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./features/contact-us/contact-us-module').then((m) => m.ContactUsModule),
  },
];
