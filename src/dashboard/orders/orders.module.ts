import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { IndexComponent } from './containers/index/index.component';
import { OrderSideListComponent } from './components/order-side-list/order-side-list.component';
import { SearchComponent } from './containers/search/search.component';
import { OrderSideSearchComponent } from './components/order-side-search/order-side-search.component';

export const ROUTES: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [IndexComponent, OrderSideListComponent, SearchComponent, OrderSideSearchComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class OrdersModule { }
