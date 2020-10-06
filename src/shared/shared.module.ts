import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferBoxComponent } from './components/offer-box/offer-box.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [OfferBoxComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    NgbModule,
    OfferBoxComponent,
    RouterModule
  ]
})
export class SharedModule { }
