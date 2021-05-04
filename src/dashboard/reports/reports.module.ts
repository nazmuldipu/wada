import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { CustomerComponent } from './containers/customer/customer.component';
import { DeliveryComponent } from './containers/delivery/delivery.component';
import { SalesComponent } from './containers/sales/sales.component';
import { TransactionComponent } from './containers/transaction/transaction.component';

export const ROUTES: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'transaction', component: TransactionComponent },
];


@NgModule({
  declarations: [CustomerComponent, SalesComponent, DeliveryComponent, TransactionComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class ReportsModule { }
