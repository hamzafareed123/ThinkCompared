import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SignUp } from '../../../../../dataTypes';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../../core/services/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private route: Router, private userServices: User) {}
  SignUp(userForm: NgForm) {
    const formDetails = userForm.value;
    console.log(userForm.value);
    this.userServices.onSignUp(formDetails).subscribe((result) => {
      console.log('Login Successfully');
      this.route.navigate(['/']);
    });
  }
}
