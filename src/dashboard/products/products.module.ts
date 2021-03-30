import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { ProductDetailsFormComponent } from './components/product-details-form/product-details-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { WarehouseAssignFormComponent } from './components/warehouse-assign-form/warehouse-assign-form.component';
import { WarehouseDetailsComponent } from './components/warehouse-details/warehouse-details.component';
import { WarehouseFormComponent } from './components/warehouse-form/warehouse-form.component';
import { WarehouseTableComponent } from './components/warehouse-table/warehouse-table.component';
import { NewProductsComponent } from './containers/new-products/new-products.component';
import { ProductsComponent } from './containers/products/products.component';
import { WarehouseComponent } from './containers/warehouse/warehouse.component';

// import { StorehouseFormComponent } from './components/storehouse-form/storehouse-form.component';
// import { StorehouseComponent } from './containers/storehouse/storehouse.component';
// import { FreeDeliveryComponent } from './containers/free-delivery/free-delivery.component';

export const ROUTES: Routes = [
  // { path: 'storehouse', component: StorehouseComponent },
  // { path: 'free-delivery', component: FreeDeliveryComponent },
  { path: 'warehouse', component: WarehouseComponent },
  { path: 'new-products', component: NewProductsComponent },
  { path: 'new-products/:id', component: NewProductsComponent },
  { path: '', component: ProductsComponent },
];

@NgModule({
  declarations: [
    // StorehouseComponent,
    // StorehouseFormComponent,
    // FreeDeliveryComponent,
    ProductsComponent,
    ProductDetailsFormComponent,
    ProductFormComponent,
    NewProductsComponent,
    ProductTableComponent,
    WarehouseComponent,
    WarehouseFormComponent,
    WarehouseTableComponent,
    WarehouseAssignFormComponent,
    WarehouseDetailsComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class ProductsModule {}
