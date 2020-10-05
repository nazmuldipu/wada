import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferBoxComponent } from './components/offer-box/offer-box.component';


@NgModule({
  declarations: [OfferBoxComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NgbModule,
    OfferBoxComponent
  ]
})
export class SharedModule { }
