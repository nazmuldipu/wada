import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Order } from 'src/models/order.model';

@Component({
  selector: 'app-order-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;

  currentRate = 3.64;

  constructor() { }

  ngOnInit(): void {
  }

  getStatusClass(status): string {
    switch (status) {
      case 'Cancelled': return 'badge-danger';
      case 'Delivered': return 'badge-success';
      case 'InTransit': return 'badge-primary';
      case 'Paid': return 'badge-success';
      case 'PickupAvailable': return 'badge-info';
      case 'PaymentDue': return 'badge-dark';
      case 'PaymentFailed': return 'badge-danger';
      case 'Processing': return 'badge-warning';
      case 'Problem': return 'badge-danger';
      case 'Returned': return 'badge-primary';
    }
  }
}
