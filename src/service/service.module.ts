import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { RestDataService } from './rest-data.service';
import { AuthGuardService } from './auth-guard.service';
import { StorehouseService } from './storehouse.service';
import { ToastService } from './toast.service';

@NgModule({
  providers: [
    AuthGuardService,
    AuthService,
    CartService,
    ProductService,
    RestDataService,
    StorehouseService,
    ToastService
  ],
})
export class ServiceModule { }
