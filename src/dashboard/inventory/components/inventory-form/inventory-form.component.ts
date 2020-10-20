import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { StorehouseService } from 'src/service/storehouse.service';
import { UserService } from 'src/service/user.service';
import { Inventory } from 'src/shared/models/inventory.model';

@Component({
  selector: 'inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnChanges {
  @Input() inventory: Inventory

  @Output() create = new EventEmitter<Inventory>();

  form: FormGroup;
  exists = false;
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

  searchUser = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.userService.search(term).pipe(
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

  userFormatter = (x) => {
    if (x)
      return `${x.name} [${x.phone}]`;
  }

  constructor(private fb: FormBuilder, private storehouseService: StorehouseService, private userService: UserService) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.inventory) {

    }
  }

  createForm() {
    this.form = this.fb.group({
      inventoryType: ['', Validators.required],
      reference: ['', Validators.required],
      storehouse: ['', Validators.required],
      supplier: ['', Validators.required],
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

