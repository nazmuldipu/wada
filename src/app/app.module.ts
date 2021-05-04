import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { AuthGuardService } from 'src/service/auth-guard.service';

import { ServiceModule } from '../service/service.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { Daterangepicker } from 'ng2-daterangepicker';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule), canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', redirectTo: '/404' }
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
    Daterangepicker,
    SidebarModule.forRoot(),
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
