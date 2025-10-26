import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faUser,faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faUser = faUser;
  loggedInUser = '';
  isMenuOpen = false;
  showAccountMenu = false;
  faBars=faBars;

  toggleAccountMenu() {
    this.showAccountMenu = !this.showAccountMenu;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {}
}
