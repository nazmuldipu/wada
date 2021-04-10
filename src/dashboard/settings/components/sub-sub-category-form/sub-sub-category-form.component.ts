import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/models/category.model';
import { SubCategory } from 'src/models/sub-category.model';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'sub-sub-category-form',
  templateUrl: './sub-sub-category-form.component.html',
  styleUrls: ['./sub-sub-category-form.component.scss'],
})
export class SubSubCategoryFormComponent extends BaseFormComponent implements OnChanges {
  @Input() categories: Category[];
  @Input() subCategories: SubCategory[];

  @Output() selectCategory = new EventEmitter<string>();

  category: Category;
  subCategory: SubCategory;

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes.item && this.item) {
      this.onCategory(this.item.category._id);
    }
    if (changes.subCategories && this.item && this.item.subCategory) {
      this.onSubCategory(this.item.subCategory._id);
    }
  }

  createForm(): void {
    this.form = this.fb.group({
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      name: ['', Validators.required],
      priority: ['', Validators.required],
      images: [null],
    });
  }

  onCategory(id): void {
    this.category = this.categories.find((c) => c._id === id);
    this.form.patchValue({ categoryId: this.category._id });
    this.selectCategory.emit(this.category.slug);
  }

  onSubCategory(id): void {
    this.subCategory = this.subCategories.find((sc) => sc._id === id);
    this.form.patchValue({ subCategoryId: this.subCategory._id });
  }

  onError(event): void {
    this.err = event;
  }

  clean(): void {
    super.clean();
    this.category = null;
    this.subCategory = null;
  }
}
