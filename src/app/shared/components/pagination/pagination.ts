import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css'],
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 12;
  @Input() currentPage: number = 1;

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  @Output() currentPageChange = new EventEmitter<number>();

  get totalPages(): number {
    if (!this.totalItems || !this.itemsPerPage) return 1;
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get visiblePages(): number[] {
    const pagesToShow = 5;
    const start = Math.floor((this.currentPage - 1) / pagesToShow) * pagesToShow + 1;
    const end = Math.min(start + pagesToShow - 1, this.totalPages);

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.currentPageChange.emit(this.currentPage);
  }

  next() {
    this.goToPage(this.currentPage + 1);
  }

  prev() {
    this.goToPage(this.currentPage - 1);
  }
}
