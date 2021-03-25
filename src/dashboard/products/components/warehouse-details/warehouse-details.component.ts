import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from 'src/shared/models/warehouse.model';

@Component({
  selector: 'warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.scss']
})
export class WarehouseDetailsComponent {
  @Input() warehouse: Warehouse;
}
