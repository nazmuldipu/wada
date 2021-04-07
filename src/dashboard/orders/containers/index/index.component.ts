import { Component, OnInit } from '@angular/core';
import { Order } from 'src/models/order.model';
import { OrderService } from 'src/service/order.service';
import { OrderStatus, PaymentMethods, PaymentStatus } from 'src/shared/data/data';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  paymentMethodsData;
  orderStatusData;
  paymentStatusData;
  order: Order;
  status;

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.paymentMethodsData = PaymentMethods;
    this.orderStatusData = OrderStatus;
    this.paymentStatusData = PaymentStatus;
  }

  async onDetails({ _id }): Promise<void> {
    try {
      this.order = await this.service.getOrder(_id).toPromise();
      this.order._id = _id;
      this.status = {
        orderStatus: this.order.orderStatus,
        paymentStatus: this.order.paymentStatus,
        paymentMethod: this.order.paymentMethod
      };
    } catch (err) {
      console.log(err);
    }
  }

  async onUpdateStatus(): Promise<void> {
    console.log(this.status);
    try {
      this.order = await this.service.updateStatus(this.order._id, this.status).toPromise();
    } catch (err) {
      console.log(err);
    }
  }

}
