import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
import { ServiceModule } from '../service/service.module'
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
    SharedModule,
    ServiceModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
