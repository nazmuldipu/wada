import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/service/order.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  loading = false;
  message = "";
  errMsg = "";

  constructor(private service: OrderService, private router: Router) { }

  ngOnInit(): void { }

  async onCreateOrder(event) {
    let items = [];
    event.items.forEach(ob => {
      items = [...items, { product: { barcode: ob.product.barcode }, quantity: ob.quantity }]
    })
    const value = { customer: { phone: event.customer.phone }, items }

    try {
      const resp = await this.service.create(value).toPromise();
      this.router.navigateByUrl("/dashboard/orders")
    } catch (err) {
      this.errMsg = err.message;
    }
  }

  onClose() {
    this.loading = false;
    this.errMsg = "";
    this.message = "";
  }
}
