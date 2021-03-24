import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'sub-category-form',
  templateUrl: './sub-category-form.component.html',
  styleUrls: ['./sub-category-form.component.scss'],
})
export class SubCategoryFormComponent extends BaseFormComponent {
  @Input() categories: Category[];

  category: Category;

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes.item && this.item) {
      this.category = this.categories.find(
        (c) => c._id === this.item['category']['_id']
      );
      this.form.patchValue({ categoryId: this.category._id });
    }
  }

  onCategory(id) {
    this.category = this.categories.find((c) => c._id == id);
    this.form.patchValue({ categoryId: this.category._id });
  }
  onCategoryChange() {}

  createForm() {
    this.form = this.fb.group({
      categoryId: ['', Validators.required],
      name: ['', Validators.required],
      priority: ['', Validators.required],
      images: [null],
    });
  }

  onError(event) {
    this.err = event;
  }

  clean() {
    super.clean();
    this.category = null;
  }
}
