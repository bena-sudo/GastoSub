import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    const body = document.body;

    if (this.darkMode) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
