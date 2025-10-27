import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../../core/services/user';

declare var google: any;

@Component({
  selector: 'app-signin',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css'],
})
export class Signin implements OnInit {
  loginError = '';

  constructor(private route: Router, private userServices: User) {}

  ngOnInit(): void {
    this.initializeGoogleSignIn();
  }

  login(userLoginForm: NgForm) {
    const formDetails = userLoginForm.value;
    this.userServices.onLoginIn(formDetails).subscribe((res: any) => {
      if (res && res.body && res.body.length) {
        console.log('Login Successful');
        this.route.navigate(['/']);
      } else {
        this.loginError = 'Email or Password is Invalid';
      }
    });
  }

  initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: '258578065557-kdhc84sq444idhad144herbhp05b08pd.apps.googleusercontent.com',
      callback: (response: any) => this.handleGoogleResponse(response),
    });

    google.accounts.id.renderButton(document.getElementById('googleButton'), {
      theme: 'outline',
      size: 'large',
      width: 300,
    });
  }

  handleGoogleResponse(response: any) {
    const token = response.credential;
    const userInfo = JSON.parse(atob(token.split('.')[1]));
    console.log(' User Info:', userInfo);

    localStorage.setItem('user', JSON.stringify(userInfo));
    this.route.navigate(['/']);
  }
}
