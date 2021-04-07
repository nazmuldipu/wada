import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Order } from 'src/models/order.model';
import { CompanyInfo } from 'src/shared/data/data';

@Component({
  selector: 'app-order-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  @Input() admin = false;
  @Input() order: Order;
  @Input() type = 'Customer';

  companyInfo;
  date: Date;
  constructor() {
    this.companyInfo = CompanyInfo;
    this.date = new Date();
  }

  getStatusClass(status): string {
    switch (status) {
      case 'Cancelled': return 'badge-danger';
      case 'Delivered': return 'badge-success';
      case 'InTransit': return 'badge-primary';
      case 'Paid': return 'badge-success';
      case 'PickupAvailable': return 'badge-info';
      case 'PaymentDue': return 'badge-dark';
      case 'Processing': return 'badge-warning';
      case 'Problem': return 'badge-danger';
      case 'Returned': return 'badge-primary';
    }
  }

  getPaymentStatusClass(status): string {
    switch (status) {
      case 'Cancelled': return 'badge-danger';
      case 'Due': return 'badge-warning';
      case 'Paid': return 'badge-primary';
    }
  }

  getProfit(): number {
    let profit = 0;
    this.order.items.forEach(item => {
      profit += (item.rate - item.purchase_price) * item.quantity;
    });
    return profit;
  }

}
