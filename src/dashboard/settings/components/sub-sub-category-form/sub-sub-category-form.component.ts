import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';
import { Category } from 'src/shared/models/category.model';
import { SubCategory } from 'src/shared/models/sub-category.model';

@Component({
  selector: 'sub-sub-category-form',
  templateUrl: './sub-sub-category-form.component.html',
  styleUrls: ['./sub-sub-category-form.component.scss'],
})
export class SubSubCategoryFormComponent extends BaseFormComponent {
  @Input() categories: Category[];
  @Input() subCategories: SubCategory[];

  @Output() selectCategory = new EventEmitter<string>();

  category: Category;
  subCategory: SubCategory;

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      name: ['', Validators.required],
      priority: ['', Validators.required],
      images: [null],
    });
  }

  onCategory(id) {
    this.category = this.categories.find((c) => c._id == id);
    this.form.patchValue({ categoryId: this.category._id });
    this.selectCategory.emit(this.category.slug);
  }

  onSubCategory(id) {
    this.subCategory = this.subCategories.find((sc) => sc._id == id);
    this.form.patchValue({ subCategoryId: this.subCategory._id });
  }

  onError(event) {
    this.err = event;
  }

  clean() {
    super.clean();
    this.category = null;
    this.subCategory = null;
  }
}
