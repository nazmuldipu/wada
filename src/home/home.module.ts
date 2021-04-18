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
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { HomeComponent } from './home.component';
import { FrontSpecialOfferComponent } from './components/front-special-offer/front-special-offer.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { OrderConfirmComponent } from './containers/order-confirm/order-confirm.component';
import { FeaturesComponent } from './containers/features/features.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';
import { FeaturedOffersComponent } from './components/featured-offers/featured-offers.component';
import { PaySuccessComponent } from './containers/pay-success/pay-success.component';
import { PayCanceledComponent } from './containers/pay-canceled/pay-canceled.component';
import { PayFailComponent } from './containers/pay-fail/pay-fail.component';
import { TermsComponent } from './containers/terms/terms.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';
import { ReturnComponent } from './containers/return/return.component';

export const ROUTES: Routes = [
  { path: 'comming', component: CommingSoonComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'terms', component: TermsComponent},
      { path: 'privacy', component: PrivacyComponent},
      { path: 'return', component: ReturnComponent},
      { path: 'cart', component: CartComponent, canActivate: [AuthGuardService] },
      { path: 'orders', component: OrdersComponent, canActivate: [AuthGuardService] },
      { path: 'order-confirm', component: OrderConfirmComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'category/:slug', component: CategoryComponent },
      { path: 'features/:slug', component: FeaturesComponent },
      { path: 'pay-success', component: PaySuccessComponent },
      { path: 'pay-cancel', component: PayCanceledComponent },
      { path: 'pay-fail', component: PayFailComponent },
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
    CategoryComponent,
    DetailModalComponent,
    UserDetailsFormComponent,
    DetailsComponent,
    CartComponent,
    OrdersComponent,
    LoginFormComponent,
    FrontSpecialOfferComponent,
    AddressFormComponent,
    OrderConfirmComponent,
    FeaturesComponent,
    FeatureBannerComponent,
    FeaturedOffersComponent,
    PaySuccessComponent,
    PayCanceledComponent,
    PayFailComponent,
    TermsComponent,
    PrivacyComponent,
    ReturnComponent
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
