import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Inventory } from 'src/shared/models/inventory.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { StorehouseService } from 'src/service/storehouse.service';

@Component({
  selector: 'inventory-transfer-form',
  templateUrl: './inventory-transfer-form.component.html',
  styleUrls: ['./inventory-transfer-form.component.scss'],
})
export class InventoryTransferFormComponent implements OnInit {
  @Output() create = new EventEmitter<Inventory>();

  form: FormGroup;
  mouseoverShifting = false;

  searching = false;
  searchFailed = false;

  searchStorehouse = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.storehouseService.search(term).pipe(
          tap((data) => {
            this.searchFailed = false;
            data
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  storehouseFormatter = (x) => {
    if (x)
      return `${x.name} [${x.storekeeper_number}]`;
  }

  constructor(private fb: FormBuilder, private storehouseService: StorehouseService) {
    this.createForm();
  }

  ngOnInit(): void { }

  createForm() {
    this.form = this.fb.group({
      inventoryType: ['transfer', Validators.required],
      reference: ['', Validators.required],
      from: ['', Validators.required],
      storehouse: ['', Validators.required],
      items: this.fb.array([this.createInventoryItem()])
    });
  }

  pushInventoryItem() {
    const control = <FormArray>this.form.get('items');
    control.push(this.createInventoryItem());
  }

  createInventoryItem() {
    return this.fb.group({
      product: ['', Validators.required],
      quantity: ['', Validators.required],
      purchase_price: ['', Validators.required],
    });
  }

  onRemoveInventoryItem(event) {
    const control = <FormArray>this.form.get('items');
    control.removeAt(event);
  }

  submit() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }
}
