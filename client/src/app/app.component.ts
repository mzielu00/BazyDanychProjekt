import { TokenStorageService } from './services/token-storage.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private TokenStorageService: TokenStorageService) {}
  title = 'CalorieCalculator';

  logout() {
    this.TokenStorageService.signOut();
  }
}
