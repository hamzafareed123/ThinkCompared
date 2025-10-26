import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { Category } from '../../../../core/services/category';

@Component({
  selector: 'app-compare-box',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule, NgIf],
  templateUrl: './compare-box.html',
  styleUrl: './compare-box.css',
})
export class CompareBox {
  @Input() products: any[] = [];
  @Input() productMessage: string = ' ';
  @Output() removeProduct = new EventEmitter<number>();
  @Output() closeDrawer = new EventEmitter<void>();

  constructor(private route: Router, private compareServices: Category) {}

  ngOnInit() {
    console.log(this.products);
  }
  onRemove(index: number) {
    this.removeProduct.emit(index);
  }

  onClose() {
    this.closeDrawer.emit();
  }

  navigateToProducts() {
    this.compareServices.setProducts(this.products);
    this.route.navigate(['/products/compare-products']);
  }
}
