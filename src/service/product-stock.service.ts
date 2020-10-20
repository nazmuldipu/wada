import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { ProductStock, ProductStockPage } from 'src/shared/models/product-stock.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {
  productStockUrl = 'api/products-stock';

  constructor(private dataSource: RestDataService) { }

  getProductStockByProductId(productId: string): Observable<ProductStock[]> {
    return this.dataSource.sendRequest('GET', this.productStockUrl + `/product/${productId}`, null, false, null);
  }

  getProductStockByStorehouseId(storehouseId: string): Observable<ProductStockPage> {
    return this.dataSource.sendRequest('GET', this.productStockUrl + `/storehouse/${storehouseId}`, null, false, null);
  }
}
