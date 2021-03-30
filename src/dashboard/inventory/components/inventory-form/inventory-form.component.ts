import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { UserService } from 'src/service/user.service';
import { WarehouseService } from 'src/service/warehouse.service';
import { InventoryTypes } from 'src/shared/data/data';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';
import { Pagination } from 'src/shared/models/pagination.model';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss'],
})
export class InventoryFormComponent extends BaseFormComponent {
  inventoryTypes = InventoryTypes;

  searchWarehouse = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => {
        if (term.length < 3) return [];
        return this.warehouseService
          .getList(new Pagination(1, 10, 'name', 'asc', term))
          .pipe(
            catchError(() => {
              return of([]);
            })
          );
      }),
      map((p) => (p ? p['docs'] : []))
    );

  searchUser = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => {
        if (term.length < 3) return [];
        return this.userService
          .getList(new Pagination(1, 10, 'name', 'asc', term))
          .pipe(
            catchError(() => {
              return of([]);
            })
          );
      }),
      map((p) => (p ? p['docs'] : []))
    );

  warehouseFormatter = (x) => {
    if (x) return `${x.name} [${x.admin.name}]`;
  };

  userFormatter = (user: User) => {
    if (user) return `${user.name}  [${user.phone}]`;
  };

  constructor(
    private fb: FormBuilder,
    private warehouseService: WarehouseService,
    private userService: UserService
  ) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      reference: ['', Validators.required],
      inventoryType: ['in', Validators.required],
      warehouse: ['', Validators.required],
      supplier: ['', Validators.required],
      items: this.fb.array([this.createInventoryItem()]),
    });
  }

  createInventoryItem() {
    return this.fb.group({
      product: ['', Validators.required],
      quantity: [1, Validators.required],
      purchase_price: [0, Validators.required],
    });
  }

  pushInventoryItem() {
    const control = <FormArray>this.form.get('items');
    control.push(this.createInventoryItem());
  }

  onRemoveInventoryItem(event) {
    const control = <FormArray>this.form.get('items');
    control.removeAt(event);
  }

  clean() {
    const control = <FormArray>this.form.get('items');
    control.clear();
    super.clean();
    this.pushInventoryItem();
  }
}
