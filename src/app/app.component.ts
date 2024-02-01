import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreNavigationComponent } from './core-navigation/core-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoreNavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anggun-greenbase';
}
