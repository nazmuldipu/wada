import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from 'src/models/feature.model';

@Component({
  selector: 'app-feature-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './feature-banner.component.html',
  styleUrls: ['./feature-banner.component.scss']
})
export class FeatureBannerComponent {
  @Input() headline: string;
  @Input() feature: Feature;
  @Input() imageUrl: string;

  constructor() { }

}
