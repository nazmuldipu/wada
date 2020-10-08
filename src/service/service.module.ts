import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { RestDataService } from './rest-data.service';

@NgModule({
  providers: [ProductService, RestDataService],
})
export class ServiceModule { }
