import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/models/offer.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'offer-box',
  templateUrl: './offer-box.component.html',
  styleUrls: ['./offer-box.component.scss']
})
export class OfferBoxComponent implements OnInit {
  @Input() offer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
