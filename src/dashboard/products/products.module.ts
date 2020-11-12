import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { ProductDetailsFormComponent } from './components/product-details-form/product-details-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { StorehouseFormComponent } from './components/storehouse-form/storehouse-form.component';
import { FreeDeliveryComponent } from './containers/free-delivery/free-delivery.component';
import { ProductsComponent } from './containers/products/products.component';
import { StorehouseComponent } from './containers/storehouse/storehouse.component';

export const ROUTES: Routes = [
  { path: 'storehouse', component: StorehouseComponent },
  { path: 'free-delivery', component: FreeDeliveryComponent },
  { path: '', component: ProductsComponent },
];

@NgModule({
  declarations: [StorehouseComponent, ProductsComponent, StorehouseFormComponent, ProductDetailsFormComponent, ProductFormComponent, FreeDeliveryComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class ProductsModule { }
