import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { ProfileComponent } from './containers/profile/profile.component';

export const ROUTES: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [ListComponent, ResetPasswordComponent, UserListComponent, UserFormComponent, ResetPasswordFormComponent, ProfileComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class UsersModule { }
