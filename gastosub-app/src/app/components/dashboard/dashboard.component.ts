import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CurrencyEurPipe } from '../../pipes/currency-eur.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [MatToolbarModule, MatCardModule, MatListModule, CurrencyEurPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  totalExpense: number = 52.97;
  upcomingPayments = [
    { name: 'Netflix', renewalDate: '10/03/2024' },
    { name: 'Spotify', renewalDate: '28/02/2024' },
    { name: 'Coursera', renewalDate: '05/03/2024' },
  ];

  constructor() {}
}
