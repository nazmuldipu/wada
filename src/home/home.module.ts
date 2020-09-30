import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FotterComponent } from './components/fotter/fotter.component';

export const ROUTES: Routes = [
  // { path: 'cart', component: CartComponent },
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
  declarations: [IndexComponent, HomeComponent, LoginComponent, RegisterComponent, NavbarComponent, FotterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class HomeModule { }
