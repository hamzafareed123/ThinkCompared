import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';
import { LandingModule } from './features/landing/landing-module';
import { CategoryModule } from './features/category/category-module';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CoreModule,SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('newThinkCompared');
}
