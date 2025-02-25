import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Subscription {
  name: string;
  price: number;
  category: string;
  renewal: string;
}

@Component({
  selector: 'app-subscription-list',
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    CommonModule,
  ],
  templateUrl: './subscription-list.component.html',
  styleUrl: './subscription-list.component.css',
})
export class SubscriptionListComponent {
  subscriptions: Subscription[] = [
    {
      name: 'Netflix',
      price: 12.99,
      category: 'Entretenimiento',
      renewal: '10/03/2024',
    },
    { name: 'Spotify', price: 9.99, category: 'Música', renewal: '28/02/2024' },
    {
      name: 'Coursera',
      price: 29.99,
      category: 'Educación',
      renewal: '05/03/2024',
    },
  ];

  displayedColumns: string[] = [
    'name',
    'price',
    'category',
    'renewal',
    'actions',
  ];

  constructor() {}
}
