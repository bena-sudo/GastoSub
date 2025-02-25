import { Routes } from '@angular/router';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'inicio', component: DashboardComponent },
      { path: 'suscripciones', component: SubscriptionListComponent },
      { path: 'suscripciones/nueva', component: SubscriptionFormComponent },
      {
        path: 'suscripciones/editar/:id',
        component: SubscriptionFormComponent,
      },
      { path: 'historial', component: PaymentHistoryComponent },
      { path: 'configuracion', component: SettingsComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  { path: '**', redirectTo: '/inicio' },
];
