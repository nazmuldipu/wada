import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferBoxComponent } from './components/offer-box/offer-box.component';
import { RouterModule } from '@angular/router';
import { Product2Component } from './components/product2/product2.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [OfferBoxComponent, Product2Component, LoadingComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    NgbModule,
    OfferBoxComponent,
    Product2Component, 
    RouterModule
  ]
})
export class SharedModule { }
