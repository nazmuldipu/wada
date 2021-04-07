import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { IndexComponent } from './containers/index/index.component';
import { OrderSideListComponent } from './components/order-side-list/order-side-list.component';

export const ROUTES: Routes = [
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [IndexComponent, OrderSideListComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class OrdersModule { }
