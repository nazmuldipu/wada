import { Component, OnInit } from '@angular/core';
import { OrderPage } from 'src/models/order.model';
import { ReportService } from 'src/service/report.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  label = "Transaction Report";
  orderPage: OrderPage;

  options;
  loading = false;
  message = '';
  errMsg = '';

  constructor(private service: ReportService) { }

  ngOnInit(): void {
  }

  async getItemByDateRange({ start, end, mode }) {
    this.options = { start, end, mode };
    console.log(this.options);
    this.orderPage = await this.service.delivery(start, end).toPromise();
  }
}
