import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[NgTableFooter]',
  templateUrl: './ng-table-foot.component.html',
  styleUrls: ['./ng-table-foot.component.scss'],
})
export class NgTableFootComponent implements OnInit {
  @Input() columns;
  @Input() total;

  constructor() {}

  ngOnInit(): void {}

  getTotal(path) {
    const value = this.total.find((f) => f.path == path);

    if (value && value.total) {
      return value.total;
    } else if (value && value.label) {
      return value.label;
    }

    return null;
  }
}
