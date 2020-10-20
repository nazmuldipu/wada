import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'inventory-item-form',
  templateUrl: './inventory-item-form.component.html',
  styleUrls: ['./inventory-item-form.component.scss']
})
export class InventoryItemFormComponent implements OnInit {
  @Input() parent: FormGroup;

  @Output() removeItem = new EventEmitter<any>();

  searching = false;
  searchFailed = false;
  total = 0;

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  searchProduct = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.productService.search(term).pipe(
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

  productFormatter = (x) => {
    if (x)
      return `${x.name} [S: ${x.size}] [P: ${x.price}]`;
  }

  getProductName(x) {
    if (x)
      return `${x.name} [S: ${x.size}] [P: ${x.price}]`;
  }

  onRemoveItem(i) {
    this.removeItem.emit(i);
  }

  updateTotal() {
    const control = <FormArray>this.parent.get('items');
    let t = 0;
    for (let i = 0; i < control.length; i++) {
      t += control.value[i].quantity * control.value[i].purchase_price;
    }
    this.total = t;
  }
}
