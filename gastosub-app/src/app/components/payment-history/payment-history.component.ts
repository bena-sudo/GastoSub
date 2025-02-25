import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CurrencyEurPipe } from "../../pipes/currency-eur.pipe";

interface Payment {
  subscriptionName: string;
  date: string;
  amount: number;
}

@Component({
  selector: 'app-payment-history',
  imports: [MatToolbarModule, MatTableModule, CurrencyEurPipe],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.css',
})
export class PaymentHistoryComponent {
  payments: Payment[] = [
    { subscriptionName: 'Netflix', date: '2024-02-10', amount: 12.99 },
    { subscriptionName: 'Spotify', date: '2024-01-28', amount: 9.99 },
  ];

  displayedColumns: string[] = ['subscriptionName', 'date', 'amount'];

  constructor() {}
}
