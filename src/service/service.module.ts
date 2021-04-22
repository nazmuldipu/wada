import { NgModule } from '@angular/core';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { BrandService } from './brand.service';
import { CartService } from './cart.service';
import { CategoryService } from './category.service';
import { InventoryService } from './inventory.service';
import { OrderService } from './order.service';
import { ProductDetailsService } from './product-details.service';
import { ProductService } from './product.service';
import { RestDataService } from './rest-data.service';
import { StockService } from './stock.service';
import { SubCategoryService } from './sub-cateogry.service';
import { SubSubCategoryService } from './sub-sub-category.service';
import { ToastService } from './toast.service';
import { UserService } from './user.service';
import { UtilService } from './util.service';
import { WarehouseService } from './warehouse.service';
import { FeaturesService } from './features.service';
import { ReportService } from './report.service';

@NgModule({
  providers: [
    AuthService,
    BrandService,
    CategoryService,
    FeaturesService,
    RestDataService,
    StockService,
    SubCategoryService,
    SubSubCategoryService,
    UserService,
    UtilService,
    WarehouseService,
    ReportService,

    AuthGuardService,
    CartService,
    InventoryService,
    OrderService,
    ProductDetailsService,
    ProductService,
    ToastService,
  ],
})
export class ServiceModule { }
