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


@NgModule({
  declarations: [OfferBoxComponent, Product2Component, LoadingComponent, ToastsComponent, PaginationComponent, BestSellersComponent, SideAdvComponent, ProductRelatedComponent, FormInputComponent, FormPropertyValidatorComponent, FormPasswordComponent, FormValidatorComponent, BaseFormComponent, AlertMessagesComponent, FormTextareaComponent],
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
    FormInputComponent,
    FormPasswordComponent,
    FormValidatorComponent,
    FormsModule,
    FormTextareaComponent,
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
