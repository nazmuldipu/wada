import { Component, Input, OnInit } from '@angular/core';
import { OrderPage } from 'src/models/order.model';

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  @Input() orderPage: OrderPage;
  @Input() name: string;

  tableName = 'Order Table';

  columns: any[] = [
    { path: 'orderNumber', label: 'Order Number' },
    { path: 'createdAt', label: 'Created', pipe: 'date', pipeArgs: 'dd/MM/yyyy', },
    { path: 'orderStatus', label: 'Order Status' },
    { path: 'paymentStatus', label: 'Payment Status' },
    { path: 'paymentMethod', label: 'Payment Method', totalLabel: true },
    { path: 'createdBy.name', label: 'Created By' },
    { path: 'total', label: 'Total', total: true },
  ];

  sortColumn = {
    path: 'name',
    order: 'asc',
    limit: 8,
    page: 1,
    search: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
