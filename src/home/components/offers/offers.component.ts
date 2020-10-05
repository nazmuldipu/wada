import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/shared/models/offer.model';
import { Offers } from 'src/shared/data/offers';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers: Offer[] = Offers;

  constructor() { }

  ngOnInit(): void {
  }

}
