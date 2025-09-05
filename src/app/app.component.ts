import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'small-app';
  // Use a signal to manage the login state
  isLoggedIn = signal(false);

  // Use a signal to track the current page for routing
  currentPage = signal<'home' | 'page1' | 'page2' | 'page3' | 'page4'>('home');

  login() {
    this.isLoggedIn.set(true);
    this.currentPage.set('home');
  }

  logout() {
    this.isLoggedIn.set(false);
  }

  goToPage(page: 'home' | 'page1' | 'page2' | 'page3' | 'page4') {
    this.currentPage.set(page);
  }
}
