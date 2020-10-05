import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { FotterComponent } from './components/fotter/fotter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { IndexComponent } from './containers/index/index.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { CommingSoonComponent } from './containers/comming-soon/comming-soon.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OffersComponent } from './components/offers/offers.component';

export const ROUTES: Routes = [
  { path: 'comming', component: CommingSoonComponent },
  // { path: 'orders', component: OrdersComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      // { path: 'category/:slug', component: CategoryComponent },
      // { path: 'details/:id', component: DetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: IndexComponent },
    ],
  },
];

@NgModule({
  declarations: [IndexComponent, HomeComponent, LoginComponent, RegisterComponent, NavbarComponent, FotterComponent, TopbarComponent, HomeHeroComponent, CommingSoonComponent, CategoriesComponent, OffersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class HomeModule { }
