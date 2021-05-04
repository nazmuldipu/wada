import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { IndexComponent } from './containers/index/index.component';
import { OrderSideListComponent } from './components/order-side-list/order-side-list.component';
import { SearchComponent } from './containers/search/search.component';
import { OrderSideSearchComponent } from './components/order-side-search/order-side-search.component';
import { AddComponent } from './containers/add/add.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderItemFormComponent } from './components/order-item-form/order-item-form.component';

export const ROUTES: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [IndexComponent, OrderSideListComponent, SearchComponent, OrderSideSearchComponent, AddComponent, OrderFormComponent, OrderItemFormComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class OrdersModule { }
