import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { SidebarModule } from 'ng-sidebar';
import { AuthGuardService } from 'src/service/auth-guard.service';
import { SharedModule } from 'src/shared/shared.module';

import { CategoriesComponent } from './components/categories/categories.component';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { FreeDeliveryComponent } from './containers/free-delivery/free-delivery.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { CartComponent } from './containers/cart/cart.component';
import { CategoryComponent } from './containers/category/category.component';
import { CommingSoonComponent } from './containers/comming-soon/comming-soon.component';
import { DetailsComponent } from './containers/details/details.component';
import { IndexComponent } from './containers/index/index.component';
import { LoginComponent } from './containers/login/login.component';
import { OrdersComponent } from './containers/orders/orders.component';
import { RegisterComponent } from './containers/register/register.component';
import { SpecialOffersComponent } from './containers/special-offers/special-offers.component';
import { HomeComponent } from './home.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { FrontSpecialOfferComponent } from './components/front-special-offer/front-special-offer.component';

export const ROUTES: Routes = [
  { path: 'cart', component: CartComponent, canActivate: [AuthGuardService] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuardService] },
  { path: 'comming', component: CommingSoonComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'orders', component: OrdersComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      // { path: 'category/:slug', component: CategoryComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'category/:slug', component: CategoryComponent },
      { path: 'free-delivery-products', component: FreeDeliveryComponent},
      { path: 'offers', component: OffersComponent },
      { path: 'spical-offers/:slug', component: SpecialOffersComponent },
      { path: 'new-products', component: NewProductsComponent},
      { path: '', component: IndexComponent },
    ],
  },
];

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FotterComponent,
    TopbarComponent,
    HomeHeroComponent,
    CommingSoonComponent,
    CategoriesComponent,
    OffersComponent,
    CategoryComponent,
    SpecialOffersComponent,
    DetailModalComponent,
    UserDetailsFormComponent,
    DetailsComponent,
    CartComponent,
    OrdersComponent,
    LoginFormComponent,
    FreeDeliveryComponent,
    NewProductsComponent,
    FrontSpecialOfferComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    SharedModule,
    SidebarModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class HomeModule { }
