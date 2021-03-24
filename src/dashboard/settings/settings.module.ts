import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './containers/brands/brands.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { SubCategoriesComponent } from './containers/sub-categories/sub-categories.component';
import { SubSubCategoriesComponent } from './containers/sub-sub-categories/sub-sub-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { BrandsTableComponent } from './components/brands-table/brands-table.component';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';

export const ROUTES: Routes = [
  { path: 'brands', component: BrandsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'sub-categories', component: SubCategoriesComponent },
  { path: 'sub-sub-categories', component: SubSubCategoriesComponent },
];

@NgModule({
  declarations: [
    BrandsComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    SubSubCategoriesComponent,
    BrandsTableComponent,
    BrandFormComponent,
    CategoryFormComponent,
    CategoryTableComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class SettingsModule {}
