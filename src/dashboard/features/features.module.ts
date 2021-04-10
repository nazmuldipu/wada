import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { IndexComponent } from './containers/index/index.component';
import { FeatureFormComponent } from './components/feature-form/feature-form.component';
import { FeatureTableComponent } from './components/feature-table/feature-table.component';

export const ROUTES: Routes = [
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [IndexComponent, FeatureFormComponent, FeatureTableComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class FeaturesModule { }
