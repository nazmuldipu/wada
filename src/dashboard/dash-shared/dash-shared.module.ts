import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from 'src/shared/shared.module';
import { OrderTableComponent } from './components/order-table/order-table.component';

@NgModule({
  declarations: [
    UserListComponent,
    OrderTableComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    OrderTableComponent,
    SharedModule,
    UserListComponent
  ]
})
export class DashSharedModule { }
