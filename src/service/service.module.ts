import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { RestDataService } from './rest-data.service';
import { AuthGuardService } from './auth-guard.service';
import { StorehouseService } from './storehouse.service';
import { ToastService } from './toast.service';
import { ProductDetailsService } from './product-details.service';
import { UtilService } from './util.service';
import { InventoryService } from './inventory.service';
import { OrderService } from './order.service';
import { ProductStockService } from './product-stock.service';
import { UserService } from './user.service';
import { BrandService } from './brand.service';
import { CategoryService } from './category.service';
import { SubCateogryService } from './sub-cateogry.service';

@NgModule({
  providers: [
    AuthService,
    BrandService,
    CategoryService,
    SubCateogryService,
    
    AuthGuardService,
    CartService,
    InventoryService,
    OrderService,
    ProductDetailsService,
    ProductStockService,
    ProductService,
    RestDataService,
    StorehouseService,
    ToastService,
    UserService,
    UtilService,
  ],
})
export class ServiceModule {}
