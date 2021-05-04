import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  label = "Transaction Report";

  constructor() { }

  ngOnInit(): void {
  }

  getItemByDateRange(event) {
    console.log(event);
  }
}
