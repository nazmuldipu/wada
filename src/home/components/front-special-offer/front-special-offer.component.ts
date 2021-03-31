import { Component, OnInit } from '@angular/core';
import { Offers } from 'src/shared/data/offers';
import { Offer } from 'src/models/offer.model';

@Component({
  selector: 'front-special-offer',
  templateUrl: './front-special-offer.component.html',
  styleUrls: ['./front-special-offer.component.scss']
})
export class FrontSpecialOfferComponent implements OnInit {
  offers: Offer[] = Offers;

  constructor() { }

  ngOnInit(): void {
  }

}
