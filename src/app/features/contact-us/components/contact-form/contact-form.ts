import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  isSubmitting = false;
  successMessage: undefined | string;

  userDetails: any = '';

  onSubmit(form: NgForm) {
    this.isSubmitting = true;

    console.log(form);
    localStorage.setItem('contact', JSON.stringify(form));

    setTimeout(() => {
      this.isSubmitting = false;
      this.successMessage = 'Your Message has been Successfully Send';

      setTimeout(() => {
        this.successMessage = undefined;
      }, 3000);
    }, 2000);

    
  }
}
