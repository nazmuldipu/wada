import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferBoxComponent } from './components/offer-box/offer-box.component';
import { RouterModule } from '@angular/router';
import { Product2Component } from './components/product2/product2.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastsComponent } from './components/toasts/toasts.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { SideAdvComponent } from './components/side-adv/side-adv.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';


@NgModule({
  declarations: [OfferBoxComponent, Product2Component, LoadingComponent, ToastsComponent, PaginationComponent, BestSellersComponent, SideAdvComponent, ProductRelatedComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    BestSellersComponent,
    CommonModule,
    FormsModule,
    LoadingComponent,
    NgbModule,
    OfferBoxComponent,
    PaginationComponent,
    Product2Component,
    ProductRelatedComponent,
    ReactiveFormsModule,
    RouterModule,
    SideAdvComponent,
    ToastsComponent
  ]
})
export class SharedModule { }
