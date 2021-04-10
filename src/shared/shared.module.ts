import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { LoadingComponent } from './components/loading/loading.component';
import { OfferBoxComponent } from './components/offer-box/offer-box.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';
import { Product2Component } from './components/product2/product2.component';
import { SideAdvComponent } from './components/side-adv/side-adv.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { FormInputComponent } from './forms/form-input/form-input.component';
import { FormPropertyValidatorComponent } from './forms/form-property-validator/form-property-validator.component';
import { FormPasswordComponent } from './forms/form-password/form-password.component';
import { FormValidatorComponent } from './forms/form-validator/form-validator.component';
import { BaseFormComponent } from './forms/base-form/base-form.component';
import { AlertMessagesComponent } from './components/alert-messages/alert-messages.component';
import { FormTextareaComponent } from './forms/form-textarea/form-textarea.component';
import { NgTableComponent } from './ngTable/ng-table/ng-table.component';
import { NgTableBodyComponent } from './ngTable/ng-table-body/ng-table-body.component';
import { NgTableFootComponent } from './ngTable/ng-table-foot/ng-table-foot.component';
import { NgTableHeadComponent } from './ngTable/ng-table-head/ng-table-head.component';
import { FormFileComponent } from './forms/form-file/form-file.component';
import { FormObjectLabelComponent } from './forms/form-object-label/form-object-label.component';
import { FormSelectComponent } from './forms/form-select/form-select.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductTableComponent } from './components/product-table/product-table.component';

@NgModule({
  declarations: [
    OfferBoxComponent,
    Product2Component,
    ProductTableComponent,
    LoadingComponent,
    ToastsComponent,
    PaginationComponent,
    BestSellersComponent,
    SideAdvComponent,
    ProductRelatedComponent,
    FormInputComponent,
    FormPropertyValidatorComponent,
    FormPasswordComponent,
    FormValidatorComponent,
    BaseFormComponent,
    AlertMessagesComponent,
    FormTextareaComponent,
    NgTableComponent,
    NgTableBodyComponent,
    NgTableFootComponent,
    NgTableHeadComponent,
    FormFileComponent,
    FormObjectLabelComponent,
    FormSelectComponent,
    InfiniteScrollComponent,
    ModalMessageComponent,
    OrderItemComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    AlertMessagesComponent,
    BestSellersComponent,
    CommonModule,
    FormFileComponent,
    FormInputComponent,
    FormObjectLabelComponent,
    FormPasswordComponent,
    FormSelectComponent,
    FormValidatorComponent,
    FormsModule,
    FormTextareaComponent,
    InfiniteScrollComponent,
    LoadingComponent,
    NgbModule,
    NgTableComponent,
    OfferBoxComponent,
    OrderItemComponent,
    OrderDetailsComponent,
    PaginationComponent,
    Product2Component,
    ProductTableComponent,
    ProductRelatedComponent,
    ReactiveFormsModule,
    RouterModule,
    SideAdvComponent,
    ToastsComponent,
  ],
})
export class SharedModule { }
