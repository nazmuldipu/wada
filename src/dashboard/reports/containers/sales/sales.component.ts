import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  label = "Sales Report";

  constructor() { }

  ngOnInit(): void {
  }

  getItemByDateRange(event) {
    console.log(event);
  }
}
