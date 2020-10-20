import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorehouseComponent } from './containers/storehouse/storehouse.component';
import { ProductsComponent } from './containers/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { StorehouseFormComponent } from './components/storehouse-form/storehouse-form.component';
import { ProductDetailsFormComponent } from './components/product-details-form/product-details-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const ROUTES: Routes = [
  { path: 'storehouse', component: StorehouseComponent },
  { path: '', component: ProductsComponent },
];

@NgModule({
  declarations: [StorehouseComponent, ProductsComponent, StorehouseFormComponent, ProductDetailsFormComponent, ProductFormComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class ProductsModule { }
