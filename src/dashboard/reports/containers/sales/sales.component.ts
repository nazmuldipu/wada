import { Component, OnInit } from '@angular/core';
import { OrderPage } from 'src/models/order.model';
import { ReportService } from 'src/service/report.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  label = "Sales Report";
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
    this.orderPage = await this.service.sales(start, end).toPromise();
  }
}
