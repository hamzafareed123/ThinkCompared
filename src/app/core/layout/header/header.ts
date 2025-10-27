import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faUser = faUser;
  loggedInUser = '';
  isMenuOpen = false;
  showAccountMenu = false;
  faBars = faBars;
  faTimes = faTimes;

  userType: 'default' | 'SignedIn' = 'default';
  userName: string = '';
  isLoggedIn = false;

  constructor(private route: Router) {}

  ngOnInit() {
    this.scynUserFromLocalStorage();

    this.route.events.subscribe(() => {
      this.scynUserFromLocalStorage();
    });
  }

  scynUserFromLocalStorage() {
    const raw = localStorage.getItem('user');
    if (raw) {
      try {
        const data = JSON.parse(raw);
        const user = Array.isArray(data) ? data[0] : data;
        console.log(user);

        if (user) {
          this.userType = 'SignedIn';
          this.userName = user.name;
          this.isLoggedIn = true;
          return;
        }
      } catch (error) {
        console.warn('invalid user in localStorage', error);
      }
    }

    this.userType = 'default';
    this.userName = '';
    this.isLoggedIn = false;
  }

  toggleAccountMenu() {
    this.showAccountMenu = !this.showAccountMenu;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.userName = '';
    this.route.navigate(['/']);
  }
}
