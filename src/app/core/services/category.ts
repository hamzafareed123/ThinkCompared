import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Category {
  productServices = new BehaviorSubject<any[]>([]);

  products$ = this.productServices.asObservable();

  setProducts(products: any[]) {
    this.productServices.next(products);
  }

  getProducts() {
    return this.productServices.value;
  }
}
