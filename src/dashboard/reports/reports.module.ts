import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Daterangepicker } from 'ng2-daterangepicker';

import { DashSharedModule } from './../dash-shared/dash-shared.module';
import { ReportHeadComponent } from './components/report-head/report-head.component';
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
  declarations: [CustomerComponent, SalesComponent, DeliveryComponent, TransactionComponent, ReportHeadComponent],
  imports: [
    DashSharedModule, Daterangepicker, RouterModule.forChild(ROUTES)
  ]
})
export class ReportsModule { }
