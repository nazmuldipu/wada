import { NgModule } from '@angular/core';
import { CartComponent } from './containers/cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { MyOrdersComponent } from './containers/my-orders/my-orders.component';
import { SharedModule } from 'src/shared/shared.module';

export const ROUTES: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'my-orders', component: MyOrdersComponent },
];

@NgModule({
  declarations: [CartComponent, MyOrdersComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class OrdersModule { }
