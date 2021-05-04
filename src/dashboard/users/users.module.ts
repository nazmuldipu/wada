import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashSharedModule } from './../dash-shared/dash-shared.module';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ListComponent } from './containers/list/list.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';

export const ROUTES: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [ListComponent, ResetPasswordComponent, UserFormComponent, ResetPasswordFormComponent, ProfileComponent],
  imports: [
    DashSharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class UsersModule { }
