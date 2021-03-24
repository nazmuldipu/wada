import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { ChangePasswordComponent } from './containers/change-password/change-password.component';
import { IndexComponent } from './containers/index/index.component';
import { DashboardComponent } from './dashboard.component';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { DashSideNavbarComponent } from './components/dash-side-navbar/dash-side-navbar.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./inventory/inventory.module').then((m) => m.InventoryModule),
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    ChangePasswordComponent,
    DashNavbarComponent,
    DashSideNavbarComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
