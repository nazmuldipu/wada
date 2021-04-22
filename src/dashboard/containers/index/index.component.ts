import { Component, OnInit } from '@angular/core';
import { ReportService } from './../../../service/report.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  head_data = [
    {
      label: 'Orders',
      icon: 'fa-shopping-basket',
      color: '#1976d2',
      background: '#64b5f6',
      values: [
        { label: 'This month', amount: '0' },
        { label: 'Today', amount: '0' },
      ],
    },
    {
      label: 'Inventories',
      icon: 'fa-money',
      color: '#303f9f',
      background: '#7986cb',
      values: [
        { label: 'This month', amount: '0' },
        { label: 'Today', amount: '0' },
      ],
    },
    {
      label: 'Revenue',
      background: '#4dd0e1',
      icon: 'fas fa-money',
      color: '#0097a7',
      values: [
        { label: 'This month', amount: '0' },
        { label: 'Today', amount: '0' },
      ],
    },
    {
      label: 'Users',
      icon: 'fa-user',
      color: '#00796b',
      background: '#4db6ac',
      values: [
        { label: 'This month', amount: '0' },
        { label: 'Today', amount: '0' },
      ],
    },
  ];

  quickLinks = [
    { name: 'Add Product', url: '/dashboard/products/new-products' },
    { name: 'Product list', url: '/dashboard/products' },
    { name: 'Orders', url: '/dashboard/orders' },
    { name: 'Inventory', url: '/dashboard/inventory' },
    { name: 'Users', url: '/dashboard/users' },
  ];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getDashBoardReport();
  }

  async getDashBoardReport() {
    try {
      const res = await this.reportService.dashboardReport().toPromise();
      res.forEach(element => {
        const findex = this.head_data.findIndex(d => d.label == element.label);
        if (findex >= 0) {
          this.head_data[findex].values = [{ label: 'This month', amount: element.values.month }, { label: 'Today', amount: element.values.day }]
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

}
