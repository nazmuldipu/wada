import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/service/product.service';
import { Pagination } from 'src/models/pagination.model';

@Component({
  selector: 'inventory-item-form',
  templateUrl: './inventory-item-form.component.html',
  styleUrls: ['./inventory-item-form.component.scss'],
})
export class InventoryItemFormComponent implements OnInit {
  @Input() parent: FormGroup;

  @Output() removeItem = new EventEmitter<any>();

  total = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  searchProduct = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => {
        if (term.length < 3) return [];
        return this.productService
          .getList(new Pagination(1, 10, 'name', 'asc', term))
          .pipe(
            catchError(() => {
              return of([]);
            })
          );
      }),
      map((p) => (p ? p['docs'] : []))
    );

  productFormatter = (x) => {
    if (x) return `${x.name} [S: ${x.size}] [P: ${x.price}]`;
  };

  getProductName(x) {
    if (x) return `${x.name} [S: ${x.size}] [P: ${x.price}]`;
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
