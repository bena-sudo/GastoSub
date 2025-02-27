import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CurrencyEurPipe } from '../../pipes/currency-eur.pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    CurrencyEurPipe,
    NgxChartsModule,
  ],
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
  chartData = [
    {
      name: 'Gasto',
      series: [
        { name: 'Enero', value: 150 },
        { name: 'Febrero', value: 200 },
        { name: 'Marzo', value: 120 },
        { name: 'Abril', value: 180 },
      ],
    },
  ];

  constructor() {}
}
