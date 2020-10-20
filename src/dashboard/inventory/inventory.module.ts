import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { InventoryDetailsComponent } from './components/inventory-details/inventory-details.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { InventoryItemFormComponent } from './components/inventory-item-form/inventory-item-form.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryTransferFormComponent } from './components/inventory-tranfer-form/inventory-transfer-form.component';
import { ProductStockListComponent } from './components/product-stock-list/product-stock-list.component';
import { AddComponent } from './containers/add/add.component';
import { ConvertComponent } from './containers/convert/convert.component';
import { IndexComponent } from './containers/index/index.component';
import { ReceiveComponent } from './containers/receive/receive.component';
import { StocksComponent } from './containers/stocks/stocks.component';
import { TransferComponent } from './containers/transfer/transfer.component';

export const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'add', component: AddComponent },
  { path: 'add/:id', component: AddComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'receive', component: ReceiveComponent },
  { path: 'convert', component: ConvertComponent },
];

@NgModule({
  declarations: [
    AddComponent,
    ConvertComponent,
    IndexComponent,
    ReceiveComponent,
    StocksComponent,
    TransferComponent,
    InventoryDetailsComponent,
    InventoryFormComponent,
    InventoryItemFormComponent,
    InventoryListComponent,
    InventoryTransferFormComponent,
    ProductStockListComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class InventoryModule { }
