import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/models/feature.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'offer-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offer-box.component.html',
  styleUrls: ['./offer-box.component.scss']
})
export class OfferBoxComponent {
  @Input() feature: Feature;
  @Input() imageUrl: string;
}
