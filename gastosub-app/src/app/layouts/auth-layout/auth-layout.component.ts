import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, MatToolbarModule, MatIcon, MatButtonModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
