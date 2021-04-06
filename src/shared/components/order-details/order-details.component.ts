import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/models/order.model';
import { CompanyInfo } from 'src/shared/data/data';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  @Input() order: Order;
  @Input() type = 'Customer';

  companyInfo;
  date: Date;
  constructor() {
    this.companyInfo = CompanyInfo;
    this.date = new Date();
  }

  ngOnInit(): void {
  }

}
