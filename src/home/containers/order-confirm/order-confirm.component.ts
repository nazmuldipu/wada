import { Component, OnInit } from '@angular/core';
import { Order } from 'src/models/order.model';
import { CartService } from 'src/service/cart.service';
import { OrderService } from 'src/service/order.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent implements OnInit {
  // order: Order = {
  //   _id: '606c13b0a8b9bc27f8cf060e',
  //   orderDate: '20210403',
  //   orderNumber: '2021040308',
  //   orderStatus: 'PaymentDue',
  //   items: [
  //     {
  //       discount: 0,
  //       product: { _id: '605b6f3fa6f5f1217c6d6da0', barcode: 'B1sdfadf', name: 'Banana', slug: 'banana', size: '12 pc' },
  //       quantity: 2,
  //       rate: 50,
  //       amount: 100,
  //       warehouses: [{ _id: '605c5847a32a511820b6aef9', name: 'Lalbagh', slug: 'lalbagh', quantity: 2 }],
  //       purchase_price: 30
  //     },
  //     {
  //       discount: 0,
  //       product: { _id: '605c26ab09f9d827686d964b', barcode: 'B823090', name: 'Brinjal', slug: 'brinjal', size: '1kg' },
  //       quantity: 2,
  //       rate: 65,
  //       amount: 130,
  //       warehouses: [{ _id: '605c5847a32a511820b6aef9', name: 'Lalbagh', slug: 'lalbagh', quantity: 2 }],
  //       purchase_price: 32
  //     },

  //     {
  //       discount: 0,
  //       product: { _id: '605c27f009f9d827686d964d', barcode: 'C89238932', name: 'Cabbage', slug: 'cabbage', size: '1 pc' },
  //       quantity: 2,
  //       rate: 30,
  //       amount: 60,
  //       warehouses: [{ _id: '605c5847a32a511820b6aef9', name: 'Lalbagh', slug: 'lalbagh', quantity: 2 }],
  //       purchase_price: 15
  //     }
  //   ],
  //   sub_total: 290,
  //   promotional_discount: 0,
  //   total_discount: 0,
  //   total_tax: 0,
  //   shipping_charge: 0,
  //   total: 290,
  //   customer: {
  //     _id: '60635600bbe3900950af13bf',
  //     name: 'Sabbir',
  //     phone: '01912239662',
  //     cus_add1: 'Bhuigor, Fatullah',
  //     cus_add2: 'Narayanganj 1401',
  //     cus_city: 'Dhaka',
  //     cus_country: 'Bangladesh',
  //     deliveryInstruction: 'onece you are in bhuigor, call me.'
  //   },
  //   address: 'Dhaka',
  //   paymentStatus: 'Due',
  //   paymentMethod: 'bkash',
  //   createdBy: { name: 'Sabbir', phone: '01912239662' },
  //   updatedBy: null,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // };

  order: Order;
  loading = false;

  constructor(private orderService: OrderService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  async onCreate(event): Promise<void> {
    console.log(event);
    try {
      this.loading = true;
      const resp = await this.orderService.confirmOrder(event).toPromise();
      await this.cartService.getMyCart();
      this.order = resp;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  }
}
