import { Component, OnInit } from '@angular/core';
import { OrderPage } from 'src/models/order.model';
import { Pagination } from 'src/models/pagination.model';
import { User, UserPage } from 'src/models/user.model';
import { ReportService } from 'src/service/report.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  label = "Customer Report";
  user: User;
  userPage: UserPage;
  orderPage: OrderPage;

  options;
  loading = false;
  message = '';
  errMsg = '';

  constructor(private userService: UserService, private service: ReportService) { }

  ngOnInit(): void {
    this.getUserList(new Pagination())
  }

  async getItemByDateRange({ start, end, mode }) {
    this.options = { start, end, mode };
    console.log(this.options);
    if (this.user) {
      this.orderPage = await this.service.customer(this.user._id, start, end).toPromise();
    }
  }

  async getUserList(pagi: Pagination) {
    this.loading = true;
    try {
      this.userPage = await this.userService.getList(pagi).toPromise();
    } catch (error) {
      this.errMsg = error;
    }
    this.loading = false;
  }

  onEdit(id) {
    this.user = this.userPage.docs.find((u) => u._id == id);
    this.getItemByDateRange(this.options)
  }

  onClose() {
    this.message = '';
    this.errMsg = '';
    this.loading = false;
    this.user = null;
  }

}
