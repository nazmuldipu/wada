import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

}
