import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-help-section',
  imports: [FontAwesomeModule],
  templateUrl: './help-section.html',
  styleUrl: './help-section.css',
})
export class HelpSection {
  faArrowRight = faArrowRight;
}
