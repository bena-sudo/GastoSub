import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css',
})
export class SubscriptionFormComponent implements OnInit {
  subscriptionId: string | null = null;
  isEditMode: boolean = false;

  // Temporary model for the subscription
  subscriptionData = {
    name: '',
    price: 0,
    category: '',
    renewal: '',
  };

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    // Check if we are in edit mode
    this.subscriptionId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.subscriptionId;

    if (this.isEditMode) {
      // In a real scenario, we would fetch the subscription by ID
      // For now, we can just mock the data
      this.subscriptionData = {
        name: 'Netflix',
        price: 12.99,
        category: 'Entretenimiento',
        renewal: '2024-03-10',
      };
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      console.log('Updating subscription:', this.subscriptionData);
    } else {
      console.log('Creating subscription:', this.subscriptionData);
    }
    // Navigate back to the subscriptions list or dashboard
  }
}
