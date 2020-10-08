import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';

import { ServiceModule } from '../service/service.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  // { path: 'test', component: TestComponent },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('../dashboard/dashboard.module').then((m) => m.DashboardModule), canActivate: [AuthGuardService]
  // },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ServiceModule,
    SidebarModule.forRoot(),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
