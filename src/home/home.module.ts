import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { SidebarModule } from 'ng-sidebar';
import { SharedModule } from 'src/shared/shared.module';

import { CategoriesComponent } from './components/categories/categories.component';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CategoryComponent } from './containers/category/category.component';
import { CommingSoonComponent } from './containers/comming-soon/comming-soon.component';
import { IndexComponent } from './containers/index/index.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { SpecialOffersComponent } from './containers/special-offers/special-offers.component';
import { HomeComponent } from './home.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { DetailsComponent } from './containers/details/details.component';

export const ROUTES: Routes = [
  { path: 'comming', component: CommingSoonComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'orders', component: OrdersComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      // { path: 'category/:slug', component: CategoryComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'category/:slug', component: CategoryComponent },
      { path: 'offers/:slug', component: SpecialOffersComponent },
      { path: '', component: IndexComponent },
    ],
  },
];

@NgModule({
  declarations: [IndexComponent, HomeComponent, LoginComponent, RegisterComponent, NavbarComponent, FotterComponent, TopbarComponent, HomeHeroComponent, CommingSoonComponent, CategoriesComponent, OffersComponent, CategoryComponent, SpecialOffersComponent, DetailModalComponent, UserDetailsFormComponent, DetailsComponent],
  imports: [
    CommonModule,
    NgImageSliderModule,
    SharedModule,
    SidebarModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class HomeModule { }
