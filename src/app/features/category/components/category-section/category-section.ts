import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComputer, faLaptop, faMobile, faTelevision } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category-section.html',
  styleUrl: './category-section.css',
})
export class CategorySection {
  faComputer = faComputer;
  faLaptop = faLaptop;
  faMobile = faMobile;
  faTelevision = faTelevision;

  constructor(private route: Router) {}

  navigateToCategory(category: string) {
    this.route.navigate(['/category', category]);
    console.log(category);
  }
}
