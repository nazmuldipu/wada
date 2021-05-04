import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';
import { Pagination } from 'src/models/pagination.model';
import { ProductService } from 'src/service/product.service';
import { StockService } from 'src/service/stock.service';

@Component({
  selector: 'order-item-form',
  templateUrl: './order-item-form.component.html',
  styleUrls: ['./order-item-form.component.scss']
})
export class OrderItemFormComponent {
  @Input() parent: FormGroup;

  @Output() removeItem = new EventEmitter<any>();

  total = 0;

  constructor(private productService: ProductService, private stockService: StockService) { }

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
    if (x) return `${x.name} - ${x.size}`;
  };

  onRemoveItem(i) {
    this.removeItem.emit(i);
  }

  async checkStock(i, event) {
    const control = (<FormArray>this.parent.controls['items']).at(i);
    try {
      const resp = await this.stockService.byProductId(event.item._id, new Pagination(1, 1000)).toPromise();
      let total = 0;
      resp.forEach(st => {
        total += st.quantity;
      })
      control['controls'].max_quantity.setValue(total);
    } catch (err) {
      console.log(err.message);
      control['controls'].max_quantity.setValue(0);
    }
  }

  updateTotal() {
    const control = <FormArray>this.parent.get('items');
    let t = 0;
    for (let i = 0; i < control.length; i++) {
      if (control.value[i].product)
        t += control.value[i].quantity * control.value[i].product.price;
    }
    this.total = t;
  }
}
