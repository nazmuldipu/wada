import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/shared/models/offer.model';

@Component({
  selector: 'offer-box',
  templateUrl: './offer-box.component.html',
  styleUrls: ['./offer-box.component.scss']
})
export class OfferBoxComponent implements OnInit {
  @Input() offer: Offer;

  constructor() { }

  ngOnInit(): void {
  }

}
